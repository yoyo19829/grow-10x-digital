import { useEffect, useState } from "react";

export function BrandLogo({ light = false }: { light?: boolean }) {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowText(true);
    }, 700);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        @keyframes bedifly-dot-1 {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          45% {
            transform: translate(7px, -5px) scale(1.25);
            opacity: 1;
          }
          100% {
            transform: translate(18px, 0) scale(0);
            opacity: 0;
          }
        }

        @keyframes bedifly-dot-2 {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          45% {
            transform: translate(11px, -2px) scale(1.2);
            opacity: 1;
          }
          100% {
            transform: translate(25px, 0) scale(0);
            opacity: 0;
          }
        }

        @keyframes bedifly-dot-3 {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          45% {
            transform: translate(14px, 3px) scale(1.15);
            opacity: 1;
          }
          100% {
            transform: translate(31px, 0) scale(0);
            opacity: 0;
          }
        }

        @keyframes bedifly-dot-4 {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          45% {
            transform: translate(9px, 7px) scale(1.2);
            opacity: 1;
          }
          100% {
            transform: translate(22px, 0) scale(0);
            opacity: 0;
          }
        }

        @keyframes bedifly-dot-5 {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          45% {
            transform: translate(5px, -8px) scale(1.15);
            opacity: 1;
          }
          100% {
            transform: translate(14px, 0) scale(0);
            opacity: 0;
          }
        }

        @keyframes bedifly-text-in {
          0% {
            opacity: 0;
            transform: translateX(-12px) scale(0.96);
            filter: blur(5px);
          }

          60% {
            opacity: 0.8;
            filter: blur(1px);
          }

          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes bedifly-orange-glow {
          0%,
          100% {
            filter: drop-shadow(0 0 0 transparent);
          }

          50% {
            filter: drop-shadow(0 0 7px rgba(240, 130, 40, 0.45));
          }
        }

        @keyframes bedifly-dot-pulse {
          0%,
          100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.25);
          }
        }

        .bedifly-logo {
          position: relative;
          display: inline-flex;
          align-items: center;
          height: 42px;
          min-width: 126px;
          padding: 0 4px;
          overflow: visible;
          user-select: none;
        }

        .bedifly-logo-dots {
          position: absolute;
          left: 5px;
          top: 50%;
          width: 18px;
          height: 18px;
          transform: translateY(-50%);
          pointer-events: none;
        }

        .bedifly-logo-dot {
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 999px;
          background: #f28a32;
          box-shadow: 0 0 8px rgba(242, 138, 50, 0.45);
        }

        .bedifly-logo-dot:nth-child(1) {
          left: 0;
          top: 2px;
        }

        .bedifly-logo-dot:nth-child(2) {
          left: 7px;
          top: 0;
        }

        .bedifly-logo-dot:nth-child(3) {
          left: 13px;
          top: 4px;
        }

        .bedifly-logo-dot:nth-child(4) {
          left: 3px;
          top: 9px;
        }

        .bedifly-logo-dot:nth-child(5) {
          left: 10px;
          top: 11px;
        }

        .bedifly-logo-text {
          position: relative;
          display: inline-flex;
          align-items: center;
          margin-left: 27px;
          font-family: "Space Grotesk", sans-serif;
          font-size: 1.5rem;
          line-height: 1;
          font-weight: 900;
          letter-spacing: -0.055em;
          white-space: nowrap;
        }

        .bedifly-logo-text.visible {
          animation: bedifly-text-in 0.75s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        /* NORMAL LOGO = NAVY */
        .bedifly-logo:not(.bedifly-logo-light) .bedifly-logo-bedi {
          color: #17134a;
          -webkit-text-fill-color: #17134a;
        }

        /* LIGHT LOGO = WHITE */
        .bedifly-logo.bedifly-logo-light .bedifly-logo-bedi {
          color: #ffffff;
          -webkit-text-fill-color: #ffffff;
        }

        .bedifly-logo-fly {
          display: inline-block;
          background: linear-gradient(
            135deg,
            #f28a32 0%,
            #ff9d45 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
          transition: transform 300ms ease;
        }

        .bedifly-logo-dot-final {
          display: inline-block;
          margin-left: 1px;
          color: #f28a32;
          -webkit-text-fill-color: #f28a32;
          animation: bedifly-orange-glow 3s ease-in-out infinite;
        }

        .bedifly-logo:not(.bedifly-logo-light):hover
          .bedifly-logo-bedi {
          color: #f28a32;
          -webkit-text-fill-color: #f28a32;
        }

        .bedifly-logo.bedifly-logo-light:hover
          .bedifly-logo-bedi {
          color: #ffffff;
          -webkit-text-fill-color: #ffffff;
        }

        .bedifly-logo:hover .bedifly-logo-fly {
          transform: translateY(-1px) scale(1.04);
        }

        .bedifly-logo:hover .bedifly-logo-dot-final {
          animation: bedifly-dot-pulse 0.7s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .bedifly-logo-dot,
          .bedifly-logo-text.visible,
          .bedifly-logo-dot-final {
            animation: none !important;
          }
        }
      `}</style>

      <span className={`bedifly-logo ${light ? "bedifly-logo-light" : ""}`} aria-label="Bedifly">
        {!showText && (
          <span className="bedifly-logo-dots" aria-hidden="true">
            <span
              className="bedifly-logo-dot"
              style={{
                animation: "bedifly-dot-1 0.7s ease-in forwards",
              }}
            />

            <span
              className="bedifly-logo-dot"
              style={{
                animation: "bedifly-dot-2 0.7s ease-in forwards",
              }}
            />

            <span
              className="bedifly-logo-dot"
              style={{
                animation: "bedifly-dot-3 0.7s ease-in forwards",
              }}
            />

            <span
              className="bedifly-logo-dot"
              style={{
                animation: "bedifly-dot-4 0.7s ease-in forwards",
              }}
            />

            <span
              className="bedifly-logo-dot"
              style={{
                animation: "bedifly-dot-5 0.7s ease-in forwards",
              }}
            />
          </span>
        )}

        <span
          className={`bedifly-logo-text ${showText ? "visible" : ""}`}
          style={{
            opacity: showText ? 1 : 0,
          }}
        >
          <span className="bedifly-logo-bedi">Bedi</span>

          <span className="bedifly-logo-fly">fly</span>

          <span className="bedifly-logo-dot-final">.</span>
        </span>
      </span>
    </>
  );
}
