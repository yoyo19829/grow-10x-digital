import fs from "node:fs/promises";
import path from "node:path";

async function moveDir(src, dest) {
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      await moveDir(srcPath, destPath);
    } else {
      await fs.rename(srcPath, destPath);
    }
  }
  await fs.rmdir(src);
}

async function main() {
  const clientDir = "dist/client";
  const distDir = "dist";

  // The server bundle is not needed for static Apache/PHP hosting.
  await fs.rm("dist/server", { recursive: true, force: true });

  // Move the prerendered client bundle to the dist root so index.html sits at the top level.
  if (await fs.stat(clientDir).then(() => true).catch(() => false)) {
    await moveDir(clientDir, distDir);
  }

  console.log("Static build ready in dist/");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
