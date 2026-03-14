export const siteConfig = {
  name: "Ben Childs",
  tagline: "Christchurch Videography",
  email: "contact@benchilds.co.nz",
  phone: "+64 273 495 184",
  address: "Navarra Road, Christchurch, Canterbury, 8025",
  hours: "Mon–Fri, 8am–5pm NZDT",
  imdb: "https://www.imdb.com/name/nm5188866/",
  linkedin: "https://www.linkedin.com/in/ben-childs-nz/",
  // Replace this with your actual Google Form embed URL
  googleFormEmbed:
    "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true",
};

export const services = [
  {
    category: "Filming",
    items: [
      { name: "Full Day Shoot", duration: "Up to 8 hours", price: "$1,000" },
      { name: "Half Day Shoot", duration: "Up to 4 hours", price: "$600" },
      { name: "Mini Shoot", duration: "Up to 2 hours", price: "$400" },
    ],
  },
  {
    category: "Editing",
    items: [
      { name: "Full Day Edit", duration: "Up to 8 hours", price: "$800" },
      { name: "Half Day Edit", duration: "Up to 4 hours", price: "$450" },
      { name: "Raw Footage", duration: "DIY or archival delivery", price: "From $100" },
    ],
  },
];

export const equipment = [
  "Panasonic GH5 camera",
  "DJI gimbal stabilisation",
  "Sennheiser microphones",
  "High-end editing suite with RTX 4080",
];

export const credentials = [
  "Senior Media Manager at Storypark",
  "5+ years consulting with Fire and Emergency New Zealand",
  "Award-winning filmmaker with international festival recognition",
];

export const valueProps = [
  {
    title: "Transparent Pricing",
    description:
      "No hidden fees. You know exactly what you're getting before we start.",
  },
  {
    title: "Relaxed Process",
    description:
      "A stress-free, approachable experience from brief to final delivery.",
  },
  {
    title: "Proven Experience",
    description:
      "5+ years of professional work across commercial, documentary, and narrative film.",
  },
  {
    title: "Best Value in Christchurch",
    description:
      "Professional-grade production at rates that won't blow your budget.",
  },
];

export const testimonials = [
  {
    quote:
      "Ben exceeded our expectations. His outcome-focused approach meant every shot served our business objectives.",
    author: "CEO, Storypark",
  },
  {
    quote:
      "Professional, creative, and reliable. Ben delivered exactly what Fire and Emergency NZ needed.",
    author: "Fire and Emergency New Zealand",
  },
  {
    quote:
      "An incredibly efficient filmmaker. Ben understood the brief immediately and delivered well ahead of schedule.",
    author: "Beagle Innovations",
  },
  {
    quote:
      "Working with Ben was a pleasure from start to finish. The final video was outstanding.",
    author: "Peter Feeney, Actor",
  },
];

export const clients = [
  "Storypark",
  "Fire and Emergency NZ",
  "Beagle Innovations",
  "Dental Spa",
];

export const films = [
  {
    title: "Space Trash Men",
    year: "2015",
    award: "Official Selection — Show Me Shorts",
    // Replace with your actual YouTube or Vimeo embed URL
    embedUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    platform: "youtube" as const,
  },
  {
    title: "Birdsong",
    year: "2013",
    award: "Best Foreign Film — IndieFest USA",
    embedUrl: "https://player.vimeo.com/video/YOUR_VIDEO_ID",
    platform: "vimeo" as const,
  },
  {
    title: "Supernova",
    year: "2012",
    award: "Christchurch Runner-up — 48 Hours",
    embedUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    platform: "youtube" as const,
  },
  {
    title: "Space Trash Men: Behind the Scenes",
    year: "2015",
    award: "",
    embedUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    platform: "youtube" as const,
  },
];

export const ventures = [
  {
    title: "Video Production",
    description:
      "Stress-free, cost-effective videos for businesses and organisations across Christchurch and New Zealand.",
  },
  {
    title: "Short Films",
    description:
      "Award-winning short films written and directed by Ben, screened at international festivals.",
  },
  {
    title: "Acting",
    description:
      "Speaking roles in three feature films, trained with world-class industry experts.",
  },
  {
    title: "Interactive Media",
    description:
      "Interactive media development using Unity, bridging film and interactive storytelling.",
  },
];
