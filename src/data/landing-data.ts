import indianPropertyExpert from "@/assets/indian-property-expert.jpeg";
import newLifeTherapy from "@/assets/new-life-therapy.png";
import padmakshiJewels from "@/assets/padmakshi-jewels.png";
import aneriCreation from "@/assets/aneri-creation.png";
import justRealEstate from "@/assets/just-real-estate.png";
import aawartanConstruction from "@/assets/aawartan-construction.png";
import tirthTravels from "@/assets/tirth-travels.jpeg";
import shantiJuniors from "@/assets/shanti-juniors.png";
import iant from "@/assets/iant.png";
import pinPointAstrology from "@/assets/pin-point-astrology.png";

export type Pkg = {
  emoji: string;
  name: string;
  category: string;
  tagline: string;
  price: number;
  priceLabel?: string;
  oneTime?: boolean;
  highlight?: boolean;
  sections: { title: string; items: string[] }[];
  note?: string;
};

export const clients = [
  { name: "Indian Property Expert", logo: indianPropertyExpert },
  { name: "New Life Therapy", logo: newLifeTherapy },
  { name: "Padmakshi Jewels", logo: padmakshiJewels },
  { name: "Aneri Creation", logo: aneriCreation },
  { name: "Just Real Estate", logo: justRealEstate },
  { name: "Aawartan Construction", logo: aawartanConstruction },
  { name: "Tirth Travels & Holiday", logo: tirthTravels },
  { name: "Shanti Juniors", logo: shantiJuniors },
  { name: "IANT", logo: iant },
  { name: "Pin Point Astrology", logo: pinPointAstrology },
];

export const packages: Pkg[] = [
  {
    emoji: "🚀",
    name: "Lead Generation Ignite",
    category: "Lead Generation",
    tagline: "Perfect for businesses starting their lead generation journey.",
    price: 7999,
    sections: [
      {
        title: "What's Included",
        items: [
          "Meta Ads (Facebook & Instagram)",
          "Meta Instant Forms, Calls, WhatsApp & Google Sheets leads",
          "Complete Campaign Setup",
          "Audience Research & Targeting",
          "Professional Ad Copywriting",
          "High-Converting Ad Creatives (Static & Video)",
          "Meta Pixel + Conversion API (CAPI)",
          "Conversion Tracking",
          "Campaign Monitoring & Optimization",
          "Weekly Performance Reports",
          "Dedicated Account Manager",
          "Ongoing Technical Support",
        ],
      },
    ],
  },
  {
    emoji: "📈",
    name: "Lead Generation Momentum",
    category: "Lead Generation",
    tagline: "Built for businesses ready to scale consistently.",
    price: 14999,
    highlight: true,
    sections: [
      {
        title: "What's Included",
        items: [
          "Everything included in Ignite package",
          "Meta Ads or Google Ads (chosen for your objectives)",
          "Fast Loading Next.js Landing Page",
          "Google Conversion Tracking",
          "Landing Page Optimization",
          "A/B Testing",
          "Multiple Ad Creative Variations",
          "Remarketing Campaigns",
          "Advanced Audience Research",
          "CRM Integration (if available)",
          "Bi-Weekly Strategy Calls",
          "Priority Support",
          "Detailed Performance Reports",
        ],
      },
    ],
    note: "Domain name and hosting will be provided by the client.",
  },
  {
    emoji: "♾️",
    name: "Lead Generation Infinity",
    category: "Lead Generation",
    tagline: "The complete solution for businesses focused on aggressive growth.",
    price: 24999,
    sections: [
      {
        title: "What's Included",
        items: [
          "Everything included in Momentum package",
          "Meta Ads + Google Ads combined",
          "Custom Fast Loading Next.js Landing Page",
          "Complete Sales Funnel Setup",
          "Google Tag Manager + Analytics 4 Setup",
          "Advanced Conversion Tracking",
          "Lead Quality Optimization",
          "Advanced Remarketing Campaigns",
          "AI-Powered Lead Qualification (Optional)",
          "Email & WhatsApp Follow-up Integration",
          "Monthly Creative Refresh",
          "Competitor Analysis",
          "Advanced A/B Testing",
          "Weekly Strategy Meetings",
          "Real-Time Performance Dashboard",
          "Dedicated Performance Marketing Manager",
        ],
      },
    ],
    note: "Domain name and hosting will be provided by the client.",
  },
  {
    emoji: "📱",
    name: "Social Media Management",
    category: "Social Media",
    tagline: "Consistent, on-brand content that grows reach & engagement.",
    price: 14999,
    sections: [
      {
        title: "What's Included",
        items: [
          "8 High-Quality Creative Posts",
          "8 Engaging Reels (Video Content)",
          "Festival & Special Occasion Creatives",
          "Monthly Content Calendar & Planning",
          "Caption Writing with Strong CTAs",
          "Hashtag & Posting Strategy",
          "Ad Creative Concepts & Hook Ideas",
          "High-Converting Ad Copy & Captions",
          "Content Strategy for Better Reach & Engagement",
          "Competitor Analysis & Market Insights",
          "Brand Positioning Recommendations",
        ],
      },
    ],
  },
  {
    emoji: "👑",
    name: "Social Media + Lead Generation Elite",
    category: "Social Media",
    tagline: "The ultimate all-in-one growth package.",
    price: 27999,
    sections: [
      {
        title: "What's Included",
        items: [
          "Everything included in Lead Generation Momentum package",
          "Everything included in Social Media Management package",
        ],
      },
    ],
    note: "Domain name and hosting will be provided by the client.",
  },
  {
    emoji: "🌐",
    name: "Website Starter",
    category: "Website Development",
    tagline: "A clean, fast website to get your business online.",
    price: 24999,
    oneTime: true,
    sections: [
      {
        title: "What's Included",
        items: [
          "5-page responsive website",
          "Free domain & 1-year hosting",
          "SSL certificate",
          "Contact form",
          "Basic SEO",
          "WhatsApp integration",
        ],
      },
    ],
  },
  {
    emoji: "💼",
    name: "Website Business",
    category: "Website Development",
    tagline: "A custom-designed site built to capture leads.",
    price: 39999,
    oneTime: true,
    sections: [
      {
        title: "What's Included",
        items: [
          "Everything included in Starter package",
          "Custom design",
          "Blog",
          "Google Analytics",
          "Meta Pixel",
          "Lead forms",
          "Speed optimization",
        ],
      },
    ],
  },
  {
    emoji: "🏆",
    name: "Website Premium",
    category: "Website Development",
    tagline: "A conversion machine with automation and support built in.",
    price: 59999,
    priceLabel: "59,999 – 79,999",
    oneTime: true,
    sections: [
      {
        title: "What's Included",
        items: [
          "Everything included in Business package",
          "Booking system or advanced forms",
          "CRM integration",
          "Conversion-focused landing pages",
          "Advanced SEO setup",
          "AI chatbot",
          "3 months of support",
        ],
      },
    ],
  },
];

export const termOffers = [
  { months: 3, off: 10 },
  { months: 6, off: 20 },
  { months: 12, off: 30 },
];

export const formatINR = (n: number) => n.toLocaleString("en-IN");

export const testimonials = [
  {
    quote:
      "I am a channel partner in real estate business and I tried earlier lead generation packages from so many companies like 99 acre and more but nothing worked — less than 5% site visits. But after Bedifly, the quality improved a lot — more than 25% site visits and around 3% conversion rate. My business skyrocketed. Everyone should try at least once.",
    name: "Vijay Desai",
    role: "Founder, Indian Property Expert",
  },
  {
    quote:
      "Bedifly ke saath kaam karke humein lead quality mein kaafi achha improvement dekhne ko mila. Pehle bahut saare leads sirf enquiry tak hi limited rehte the, lekin ab lagbhag 20% leads site visit tak pahunch rahe hain aur 2% ke aas-paas booking conversion mil raha hai. Sabse achhi baat yeh hai ki unka focus sirf lead quantity par nahi, balki genuine buyers lane par hota hai.",
    name: "Narendra Sharma",
    role: "Founder, Puja Realty",
  },
  {
    quote:
      "Travel business always depends on social media engagement and Bedifly knows it very well because of their high engagement reels and Meta ads expertise. I generated 10,000 leads in last 4 months with conversion rate of 5%.",
    name: "Amit Khare",
    role: "Founder, Lake Tours & Travels",
  },
  {
    quote:
      "Must try — they are very good in it whatever they do. I am in interior designing business, converting more than 5 clients per month with a project cost around 15 lac+.",
    name: "Divya Jamini",
    role: "Founder, Aristo Spaces",
  },
  {
    quote:
      "We are into the loan industry, needing clients all over India for above ₹1 crore residential and commercial loans. Ashutosh sir has helped us a lot in getting loan files at a very affordable lead cost — conversion rate above 4% and we are getting a ROAS of around 1:9 right now.",
    name: "Vishal Reddy",
    role: "Founder, Akshat Financial Services",
  },
];