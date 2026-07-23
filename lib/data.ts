export const siteConfig = {
  name: "Ben Childs",
  tagline: "Christchurch Videography",
  email: "contact@benchilds.co.nz",
  phone: "+64273495184",
  address: "Christchurch, Canterbury, New Zealand",
  imdb: "https://www.imdb.com/name/nm3923114/",
  linkedin: "https://www.linkedin.com/in/benchildsnz",
  // Replace this with your actual Google Form embed URL
  googleFormEmbed:
    "https://docs.google.com/forms/d/e/1FAIpQLScRt0tzC55m573k1qXHgihtpT2TTibPaowhh6gqUFAmCgLxrw/viewform?embedded=true",
};

export const services = [
  {
    category: "Filming",
    items: [
      {
        name: "Full Day Shoot",
        description: "Me and my filming equipment for up to 8hrs filming.",
        price: "$1000",
      },
      {
        name: "Half Day Shoot",
        description: "Me and the gear for up to 4hrs filming.",
        price: "$650",
      },
      {
        name: "Mini Shoot",
        description: "Me. The gear. Up to 2hrs.",
        price: "$480",
      },
    ],
  },
  {
    category: "Editing",
    items: [
      {
        name: "Full Day Edit",
        description: "Me and my edit suite for up to 8hrs.",
        price: "$800",
      },
      {
        name: "Half Day Edit",
        description: "Me and the suite. Up to 4hrs.",
        price: "$450",
      },
      {
        name: "Raw Footage",
        description:
          "If you want to DIY edit or just have it archived I can deliver you all the raw files. BYO cloud or physical storage.",
        price: "from $100",
      },
    ],
  },
  {
    category: "DVD Authoring",
    items: [
      {
        name: "Per Project",
        description:
          "Includes 2x copies, additional copies are $10 each. Provide me with the video files or original DVD. Region 4 only.",
        price: "$100",
      },
    ],
  },
];

export const pricingNote =
  "Get in touch with me to help scope your project. A great rule of thumb when scoping the time it will take to edit a video is 2-3x the shoot duration.";

export const valueProps = [
  "Clear, unbeatable pricing!",
  "A fun & relaxed process that isn't scary",
  "Quality that comes from years of experience",
  "Best value videographer in Christchurch",
];

export const equipment = [
  {
    name: "Panasonic GH5",
    description:
      "4K ultra high definition. Up to 60 frames per second. 10-bit colour. But most importantly: nimble, efficient, compact. This is my secret weapon for stunning videos on the fly!",
    image: "/images/equipment-gh5.jpg",
  },
  {
    name: "DJI Ronin-S Gimbal stabilization",
    description:
      "Compact, lightweight, fast setup. Nothing beats this gimbal for efficiency. And nothing beats a silky smooth tracking shot!",
    image: "/images/equipment-ronin.jpg",
  },
  {
    name: "Sennheiser microphones",
    description:
      "Shotgun and lapels for fast turn-around, top quality audio.",
    image: "/images/equipment-sennheiser.jpg",
  },
  {
    name: "Aputure Amaran 100d lights",
    description:
      "Compact and reliable. Powerful and versatile. These are my go to lights for speed and efficiency.",
    image: "/images/equipment-aputure.jpg",
  },
  {
    name: "Edit suite",
    description:
      "Powered by AMD's flagship 5950x processor, RTX 4080 graphics, dual-screen 4K monitoring, and blazing fast SSDs, I waste no time waiting for videos to render.",
    image: "/images/equipment-edit-suite.jpg",
  },
];

export const softwareNote =
  "I'm highly skilled and currently use Adobe Premiere, Adobe Photoshop, DaVinci Resolve, Unity, and OBS Studio. I have prior experience with AVID Media Composer, Final Cut Pro 8, and DragonFrame.";

export const soloFilmingQuote =
  "I've been doing this for more than ten years and have honed the process of solo-filming to a fine art, calmly and effectively performing all the necessary roles at once: director, camera operator, sound recordist, and even interviewer. It's far less intimidating than a full crew, and you'll be amazed at what can be achieved.";

export const testimonials = [
  // First 3 are hand-picked to frontload (per explicit instruction), not auto-sorted by date.
  {
    quote:
      "We cannot recommend Ben Childs Film & Video highly enough! Ben is an absolute professional and did the most incredible job of our video project. Ben was communicative, flexible and very understanding. Our video involved working with a lot of very young children and a load of volunteers who were not used to being on camera. Ben was kind, patient and very easy to work with. The final product is polished and filled our brief exactly. We thoroughly enjoyed working with Ben and would gladly recommend him to anyone.",
    author: "Lauren Lincoln",
    rating: 5,
    googleReviewUrl: "https://maps.app.goo.gl/1dGWFtL1DiEiwGHg7",
  },
  {
    quote:
      "Smooch Dental Spa recently hired Ben to produce a walk through of our new clinic and a technical video to help patients understand our hygiene process. We absolutely love the results which you can see at our website. We found Ben very professional and a pleasure to work with, he was particularly good at getting everyone to feel at ease in front of the lens and guiding us through our long filming day.",
    author: "George, Smooch Dental Spa",
    rating: 5,
    googleReviewUrl: "https://maps.app.goo.gl/EEdV1y7ZkYuQDKnN7",
  },
  {
    quote:
      "Ben understands business objectives and consistently creates engaging, outcome focused work. I'm always blown away by Ben's initiative and efficiency, from scoping and budgeting to directing and editing we know we can rely on Ben to pull it all together even with tight time constraints.",
    author: "Jamie MacDonald, CEO Storypark",
  },
  // Newest reviews go here, below the 3 hand-picked ones above — add new entries at the top of this block.
  {
    quote:
      "Got Ben to record (and edit and voice) a number of instructional / training videos. He was amazing, can't stress that enough, made everything so easy and also was great value! Highly recommended.",
    author: "Chris Whiteside",
    rating: 5,
    googleReviewUrl: "https://maps.app.goo.gl/NA6UonnTqo9pmXDSA",
  },
  {
    quote:
      "Ben videoed Mighty Mix Dog Food's one-day sales training session and we were really pleased with the results. The full 8 hours of training took 93 GB of data in total, over five separate videos which we have uploaded to our website for our franchisees reference. We would recommend Ben to anyone looking to have this type of work done.",
    author: "Grant Day",
    rating: 5,
    googleReviewUrl: "https://maps.app.goo.gl/hHwqsSRhj5ucGUqQ6",
  },
  {
    quote:
      "I have had the pleasure of working with Ben for a couple of video shoots over the past couple of months and he has managed to make an impressive end product occur from the rambling instructions & ideas I have floated at him! His professional, easy-going manner while filming and his editing skills have made him a joy to work with and I will continue to use him in the future. Thanks Ben!",
    author: "Nathan Brand",
    rating: 5,
    googleReviewUrl: "https://maps.app.goo.gl/MBKRBmD4V2VKZppf6",
  },
  {
    quote:
      "I reached out to Ben about recording some monologues for my acting portfolio, and I was genuinely impressed by his professionalism. He went above and beyond—helping me find a studio, organizing all the equipment, and setting up the perfect backdrops for the shoot. The guidance and support I received throughout the filming process were incredibly valuable. I'm really happy with the final edits; the quality is outstanding. I'll definitely be working with Ben again! :))",
    author: "Jay Valiev",
    rating: 5,
    googleReviewUrl: "https://maps.app.goo.gl/N7VbHF97AEswuc8N7",
  },
  {
    quote:
      "I cannot recommend Ben Childs highly enough. From the very beginning he was warm, professional, and deeply understanding of the meaning behind our special event. He brought not only technical skill but also genuine heart to the project, capturing every detail with care and respect. The finished video was beautifully crafted, moving, and exceeded all our expectations. Ben's creativity, patience, and dedication made the entire process seamless and memorable. If you are looking for someone who will honour your story and deliver with excellence, Ben is the one. Thank you, Ben, for giving us something we will treasure forever.",
    author: "Nyree Bowen-Lilly",
    rating: 5,
    googleReviewUrl: "https://maps.app.goo.gl/cgYgD9uR4RBSsqFJA",
  },
  {
    quote:
      "Ben is a pleasure to work with, efficient, excellent communication and produces a high quality product. I highly recommend Ben's services.",
    author: "William Jamieson",
    rating: 5,
    googleReviewUrl: "https://maps.app.goo.gl/m3Vg2AwXHqRJFXgd7",
  },
  {
    quote:
      "We hired Ben to film our very simple outdoor elopement, and we couldn't have asked for a better experience. Even though weddings aren't usually his thing, he happily agreed because of our small guest list and short ceremony. Originally we planned a 7:30 am ceremony on Mt. Vernon, then had to shift it to 9:30 am due to weather which he was totally accommodating of…",
    author: "Sankha Maitra",
    rating: 5,
    googleReviewUrl: "https://maps.app.goo.gl/YGV4ZhnRBpR1XLzM8",
  },
  {
    quote:
      "Ben worked on editing 120mins of video footage I had from my flight in a WW2 Spitfire over the Kent countryside in England recently. His skills and expertise in this process were of the highest order and I couldn't be more satisfied with the final video. Ben was a pleasure to work with, nothing was too much trouble for him, he worked efficiently solving all challenges I presented. I would not hesitate to recommend Ben for your video and editing needs.",
    author: "Julie Tonkin",
    rating: 5,
    googleReviewUrl: "https://maps.app.goo.gl/2jxFWyYvW9A3RRu76",
  },
  {
    quote:
      "Ben's expertise, creativity and character means he is always the first name on our list for any major project. Whether it's scripting, directing, filming or in post-production, we can rely on Ben to fit in seamlessly with our team, and lead any project with professionalism and positivity.",
    author: "Aarron Chittock, Producer, Fire and Emergency New Zealand",
  },
  {
    quote:
      "Ben's calm composure and professionalism made everyone feel at ease and he seemed to quickly 'get' what we were trying to say and do. He managed to pull everything together quickly and efficiently and along with his wonderful voice-overs, we were thrilled with the end product. We now have a suite of engaging videos that really showcase our application.",
    author: "Deborah Grover, Director, Beagle Innovations",
  },
  {
    quote:
      "I had the pleasure of working with Ben on a recent project, and I cannot recommend him enough! From start to finish, he was professional, reliable, and great behind the camera (shooting and interviewing). One of the things I appreciated most about Ben was his ability to work under pressure. Given the sensitive nature of our project, we needed someone who could think on their feet, adapt to changing circumstances, and keep a low profile. Ben did all that and more, always finding creative solutions to unexpected challenges.",
    author: "Zaina Razzaq, Basis",
  },
  {
    quote:
      "I researched his background, watched all of his films I could online, and was impressed by the nuanced performances and precise story telling in each film, even his earliest ones. On set I found him unflappable and clear on what he wanted in each scene.",
    author: "Peter Feeney, Actor (Black Sheep, 30 Days of Night, Spartacus)",
  },
  {
    quote:
      "Ben's impeccable old-school manners and knowledge of film processes is unexpected and refreshing from someone so young. He has an exceptional work ethic - getting the job done without any compromise to quality and deadlines. We look forward to collaborating with him again on future projects.",
    author: "Charlie Lee, Scratch Design",
  },
  {
    quote:
      "Ben is a truly gifted director. He has strong creative vision and is able to articulate this with crystal clarity. He gives insightful feedback and always maintains a high team morale.",
    author: "Ewan Clark, Composer (Turn of the Screw, Doubt: The Scott Watson Case)",
  },
  {
    quote:
      "Ben takes on responsibility and total care for his assigned duties and one could rely on his total commitment to assigned tasks and responsibilities. Ben is a commendable and valued member in his team and is recognised as a mentor amongst his colleagues and peers.",
    author: "Sashi Meanger, Executive Director, The New Zealand Film and Television School",
  },
  {
    quote:
      "Ben captured our very small and slightly unconventional wedding ceremony beautifully. He had great communication throughout the whole process and had an amazingly fast turn around with the final edit. Ben is personable and very professional. We've had so many compliments on the video! Really couldn't have asked for anything better on our special day. Thanks, Ben!",
    author: "Leslie Nylen",
    rating: 5,
    googleReviewUrl: "https://maps.app.goo.gl/st3xZp99v7ztfoH46",
  },
];

export const credentialsBio = `I am an experienced Christchurch based videographer and award-winning filmmaker. In my role as Senior Media and Content Manager for Storypark, I am responsible for developing and executing a content strategy to increase brand awareness and engagement as Storypark grows into North America. I manage the production of high quality video and social media content that provides real value to early childhood education professionals and communicates Storypark's unique purpose.

Additionally, for over five years I served as a video consultant to an in-house team at Fire and Emergency New Zealand, and continue to occasionally work with them to support their high-stakes, larger-scale video projects. This commercial video experience has helped me to develop strong communication and organisational skills and the ability to work well with many different teams.

My filmmaking experience is extensive. I have acted as named roles in three feature films, directed two award winning short films, and spent a year as an intern at the Gibson Group writing coverage on screenplays. I have studied acting at the Court Theatre and trained with many screen experts. As a director I have trained with internationally renowned acting coach Miranda Harcourt and Character Based Improvisation expert Robert Marchand.

I was awarded the Outstanding Student award at The New Zealand Film and Television School and was the selected director for the graduation short film. Birdsong was the first ever film from the school to receive international recognition at several festivals, including the Best Foreign Film award at IndieFest USA. Upon graduation, I directed and co-wrote the sci-fi short film Space Trash Men which was nominated for the Special Jury Award at Show Me Shorts and had several pay-per-view and on-demand deals, including a regular spot on TVNZ on demand.

Aside from my videography work in Christchurch, I am a husband and a dad to two daughters, with a son on the way! Since 2020 I have been pursuing an exciting new passion, learning how to program in C# and use the Unity game engine. This hobby is very quickly evolving into a new commercial pursuit with my company <a href="https://www.cassbaygames.com" target="_blank" rel="noopener noreferrer" class="underline underline-offset-4 hover:text-gray-900 transition-colors">Cass Bay Games Ltd</a>. And I'm always writing, be it screenplays or stories for my daughters.

I have released my first video game (<a href="/interactive/super-mayor" class="underline underline-offset-4 hover:text-gray-900 transition-colors">Super Mayor</a>) on Steam, two apps on iOS, and one on Google Play. In 2025 I went to Cologne, Germany to pitch my next game <a href="/interactive/davy-jones-deckhand" class="underline underline-offset-4 hover:text-gray-900 transition-colors">Davy Jones' Deckhand</a> at Gamescom, the world's largest gaming convention. I also exhibited this project at PAX Australia.`;

export const portfolioVideos = [
  { title: "Storypark Recruitment Video", embedUrl: "https://player.vimeo.com/video/706020899", platform: "vimeo" as const },
  { title: "The Story of Storypark", embedUrl: "https://player.vimeo.com/video/236664132", platform: "vimeo" as const },
  { title: "What Happens When You Call 111 for a Fire", embedUrl: "https://www.youtube.com/embed/klSE3oplB7c", platform: "youtube" as const },
  { title: "Lucky Rover by Lucky Rentals", embedUrl: "https://www.youtube.com/embed/skfbat7_XuA", platform: "youtube" as const },
  { title: "Promotional Video: SMOOCH Dental Spa", embedUrl: "https://www.youtube.com/embed/YbuCCuGYzvE", platform: "youtube" as const },
  { title: "Zaxton's Story", embedUrl: "https://player.vimeo.com/video/649722786", platform: "vimeo" as const },
  { title: "Product Testimonials for Beagle Innovations", embedUrl: "https://player.vimeo.com/video/174053478", platform: "vimeo" as const },
  { title: "Stop-Motion Content Marketing", embedUrl: "https://player.vimeo.com/video/207048269", platform: "vimeo" as const },
  { title: "Staff Profiles for Storypark", embedUrl: "https://player.vimeo.com/video/357274509", platform: "vimeo" as const },
  { title: "Product Support Videos for Storypark", embedUrl: "https://player.vimeo.com/video/98896128", platform: "vimeo" as const },
  { title: "Patient Information Videos — Specialist Vein Health", embedUrl: "https://player.vimeo.com/video/206316687", platform: "vimeo" as const },
];

export const films = [
  {
    title: "Space Trash Men",
    year: "2015",
    award: "Official Selection — Show Me Shorts",
    embedUrl: "https://www.youtube.com/embed/VgKHb4yqaLU",
    platform: "youtube" as const,
  },
  {
    title: "Birdsong",
    year: "2013",
    award: "Best Foreign Film — IndieFest USA",
    embedUrl: "https://www.youtube.com/embed/1gh_g2_oJbc",
    platform: "youtube" as const,
  },
  {
    title: "Supernova",
    year: "2012",
    award: "Christchurch Runner-up — 48 Hours",
    embedUrl: "https://player.vimeo.com/video/134257690",
    platform: "vimeo" as const,
  },
  {
    title: "Space Trash Men: Behind the Scenes",
    year: "2015",
    award: "",
    embedUrl: "https://player.vimeo.com/video/105461030",
    platform: "vimeo" as const,
  },
];

export const ventures = [
  {
    title: "Video Production",
    description:
      "Allow me to bring your ideas to life with outstanding, stress-free, cost-effective videos.",
    image: "/images/ventures-video-production.jpg",
    href: "/videography",
  },
  {
    title: "Film",
    description:
      "Check out some award-winning short films that I have written, directed and produced.",
    image: "/images/ventures-film.png",
    href: "/films",
  },
  {
    title: "Acting",
    description:
      "I am an experienced actor and director having played speaking roles in three features films, directed two award winning shorts, and studied with world-class experts.",
    image: "/images/ventures-acting.png",
    href: "/acting",
  },
  {
    title: "Interactive Media",
    description:
      "I'd love to chat with you about how I can bring your interactive projects and apps to life with the Unity game engine.",
    image: "/images/ventures-interactive.png",
    href: "/interactive",
  },
];

export const actingCredits = {
  film: [
    { year: "2020", title: "Friend to the Friendless", type: "TV Movie", role: "Scott Guy" },
    { year: "2019", title: "Daffodils", type: "Feature Film", role: "Dave" },
    { year: "2019", title: "Births, Deaths, and Marriages", type: "Feature Film", role: "Dean" },
    { year: "2013", title: "Old Man's Game", type: "Short Film", role: "Peter" },
    { year: "2012", title: "Supernova", type: "Short Film", role: "Nicky Brick" },
  ],
  theatre: [
    { year: "2011", title: "Hay Fever", role: "Sandy Tyrell", company: "Canterbury Celebration Theatre" },
    { year: "2011", title: "Ladies Night", role: "Norman", company: "Canterbury Celebration Theatre" },
    { year: "2011", title: "Sweet Phoebe", role: "Frazer", company: "Scriptease Productions" },
    { year: "2010", title: "Angels in America: Millennium Approaches", role: "Joe Pitt", company: "Scriptease Productions" },
    { year: "2010", title: "King Richard II", role: "Lord Green", company: "Scriptease Productions" },
  ],
};

export const interactiveProjects = [
  {
    title: "Davy Jones' Deckhand",
    description: "My current passion project. In 2024 I founded Cass Bay Games and we're working on our first title, Davy Jones' Deckhand. It's a strategic pirate adventure with a nostalgic, Tintin-esque art style and a free demo you can check out right now on Steam.",
    image: "/images/interactive-djd.png",
    links: [
      { label: "Learn more", href: "/interactive/davy-jones-deckhand" },
      { label: "Play demo", href: "https://store.steampowered.com/app/4538750/Davy_Jones_Deckhand_Demo/?utm_source=benchilds.co.nz&utm_medium=website&utm_campaign=davy-jones-deckhand" },
    ],
  },
  {
    title: "Super Mayor",
    description:
      "A feel-good 2D platformer / metroidvania where you play as a councillor to a rural farming district in New Zealand! Solve problems, meet the public, and become MAYOR in this hilarious, story-rich adventure.",
    image: "/images/interactive-super-mayor.gif",
    links: [
      { label: "Learn more", href: "/interactive/super-mayor" },
      { label: "Play free on Steam", href: "https://store.steampowered.com/app/2534930/Super_Mayor/?utm_source=benchilds.co.nz&utm_medium=website&utm_campaign=super-mayor" },
    ],
  },
  {
    title: "Dough Get Baked",
    description:
      "Warning this demo is extremely high in carbohydrates! You're a lump of bread dough, fallen from grace into a world of baked goods. Your life mission is to find an oven and get baked. Split, squish and puzzle your way to redemption in this whimsical adventure.",
    image: "/images/interactive-dough.png",
    links: [
      { label: "Learn more", href: "/interactive/dough-get-baked" },
    ],
    note: "This prototype is no longer available on Google Play.",
  },
  {
    title: "Interactive Toddler",
    description:
      "Pitched just right for your child. This digital toy is lovingly created by a real dad for his 18 month old daughter. Pop bubbles, wave at the cow, help the sheep kick a ball, and listen to the peaceful countryside sounds as a pig flies lazily on by.",
    image: "/images/interactive-toddler.png",
    imageClassName: "object-cover scale-150",
    links: [
      { label: "Learn more", href: "/interactive/interactive-toddler" },
    ],
    note: "This prototype is no longer available on the App store.",
  },
];
