/**
 * VIREON DIGITAL - Global Configuration & Data Store
 * Easily customize business information, contact links, and service offerings.
 */

const VIREON_CONFIG = {
  brand: {
    name: "Vireon Digital",
    shortName: "Vireon",
    tagline: "Growing Brands Through Social Media & Next-Gen Sales Systems",
    headline: "Scale Your Revenue On Autopilot",
    subheadline: "We engineer high-performance outsourced sales pipelines, viral digital marketing, creator-led content, and autonomous AI growth engines for high-growth brands.",
    foundedYear: 2024,
    availability: "Accepting 3 New Brands for Q3/Q4 Sprints",
    statusBadge: "🟢 High-Capacity Growth Protocol Active"
  },
  
  contact: {
    // WhatsApp direct link with pre-filled message
    whatsappNumber: "+1234567890", // Update with your actual WhatsApp phone number (with country code)
    whatsappMessage: "Hi Vireon Digital team! I'm interested in scaling my sales, digital marketing & AI growth systems. Let's discuss.",
    
    // Direct Phone Call
    phoneNumber: "+1 (800) 847-3660", // Display format
    phoneRaw: "+18008473660", // tel: link format
    
    // Email
    email: "growth@vireondigital.com",
    
    // Official Social Links provided by user
    instagram: "https://www.instagram.com/digital.vireon?igsh=MWlnd3VnNGc5bXNhYw%3D%3D&igsi=MWlnd3VnNGc5bXNhYw%3D%3D",
    facebook: "https://www.facebook.com/people/Vireon-Digital/61592777193962/?mibextid=wwXIfr&rdid=nre3wS62PUjukgDG&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1RaRzPJczc%2F%3Fmibextid%3DwwXIfr",
    linkedin: "https://linkedin.com/company/vireon-digital",
    twitter: "https://twitter.com/vireondigital",
    youtube: "https://youtube.com/@vireondigital"
  },

  stats: [
    { label: "Total Client Revenue Generated", value: "$48.5M+", icon: "trending-up", change: "+142% YoY" },
    { label: "Qualified Meetings Booked", value: "34,800+", icon: "calendar-check", change: "99.4% Show-up" },
    { label: "Average Campaign ROAS", value: "4.6x", icon: "zap", change: "Industry Avg: 1.8x" },
    { label: "Organic Content Impressions", value: "185M+", icon: "eye", change: "Across TikTok & Reels" }
  ],

  videos: [
    {
      id: "video-1",
      title: "Outsourced Sales & Pipeline Engineering",
      subtitle: "High-ticket appointment generation & closing infrastructure in action.",
      category: "sales",
      duration: "0:45",
      views: "142K",
      thumbnail: "assets/images/hero-ecosystem.jpg",
      localSrc: "assets/videos/vireon-showcase-1.mp4",
      gdriveId: "1RHHxykhGWWMD3Lo0r1Yvz7P4LKZ7WlrJ",
      highlight: "Generated $3.2M pipeline for B2B tech firm"
    },
    {
      id: "video-2",
      title: "Viral Creator Growth & Video Mastery",
      subtitle: "Hollywood-grade short-form editing, hook psychology & brand authority.",
      category: "creator",
      duration: "0:38",
      views: "890K",
      thumbnail: "assets/images/hero-ecosystem.jpg",
      localSrc: "assets/videos/vireon-showcase-2.mp4",
      gdriveId: "1RW3MEemueowuFSJHqmyLDJ_p0gBpCwk0",
      highlight: "Scaled founder from 2K to 240K followers in 90 days"
    },
    {
      id: "video-3",
      title: "Autonomous AI Sales & Marketing Engine",
      subtitle: "24/7 AI lead qualification, voice outreach & omni-channel automation.",
      category: "ai",
      duration: "0:52",
      views: "310K",
      thumbnail: "assets/images/ai-sales-agent.jpg",
      localSrc: "assets/videos/vireon-showcase-3.mp4",
      gdriveId: "1IJJ4xWwU_bJyxc8YpoNBBRBoicc7w6bK",
      highlight: "84% response rate with sub-minute lead outreach"
    }
  ],

  services: [
    {
      id: "sales-outsourcing",
      icon: "users-check",
      badge: "Flagship Engine",
      title: "Outsourced Sales Infrastructure",
      subtitle: "Full-cycle B2B/B2C outbound, dedicated SDR/BDR teams, and high-ticket closers.",
      description: "We build and manage your entire revenue engine. From customized cold outbound infrastructure to dedicated appointment setters and commission-aligned closers who fill your calendar with qualified buyers.",
      metrics: "Average 45+ Qualified Demos / Month per Rep",
      features: [
        "Dedicated Cold Email & LinkedIn Outbound Pods",
        "Trained Commission-Aligned High-Ticket Closers",
        "Custom CRM Setup & Automated Lead Routing",
        "Real-Time Sales Call Auditing & Conversion Optimization",
        "Performance-Backed Revenue Milestone Guarantees"
      ]
    },
    {
      id: "digital-marketing",
      icon: "target-arrow",
      badge: "High ROAS",
      title: "Performance Digital Marketing",
      subtitle: "Omni-channel paid traffic across Meta, Google Ads, TikTok & YouTube.",
      description: "Stop burning ad budget on low-intent clicks. We engineer hyper-targeted multi-touch acquisition funnels that convert cold audiences into loyal, high-LTV customers with predictive ROAS modeling.",
      metrics: "Average 4.6x Verified ROAS across $12M+ Managed Spend",
      features: [
        "Full-Funnel Meta (Facebook & Instagram) Ad Campaigns",
        "High-Intent Google Search & Performance Max Domination",
        "Direct-Response TikTok & YouTube Video Ads",
        "Dynamic Dynamic Retargeting & Omnichannel Inception Funnels",
        "Advanced Server-Side CAPI & Offline Conversion Tracking"
      ]
    },
    {
      id: "creator-growth",
      icon: "film-play",
      badge: "Viral Impact",
      title: "Viral Creator & Social Media Growth",
      subtitle: "End-to-end short-form content production, hook science, and personal brand authority.",
      description: "Turn views into compounding enterprise value. We handle scripting, Hollywood-grade short-form video editing (Reels, TikTok, Shorts), daily distribution, and creator collaboration to make your brand omnipresent.",
      metrics: "185M+ Total Organic Views Generated",
      features: [
        "Data-Driven Scripting & Retention-Hook Engineering",
        "High-End Motion Graphics, Sound Design & Captions",
        "Cross-Platform Omnichannel Scheduling & Growth Ops",
        "High-Authority Founder & Creator Personal Branding",
        "Podcast & Long-Form Repurposing Engine"
      ]
    },
    {
      id: "ai-automation",
      icon: "cpu-sparkle",
      badge: "Next-Gen Tech",
      title: "AI Growth Engines & Autonomous Agents",
      subtitle: "24/7 AI inbound qualification, voice calling bots, and automated CRM workflows.",
      description: "Replace repetitive manual bottlenecks with lightning-fast autonomous AI agents. Engage prospects instantly within 30 seconds of form fill, nurture leads 24/7 on WhatsApp/SMS, and automate 90% of admin workflows.",
      metrics: "< 30s Speed-to-Lead with 88% Conversion Lift",
      features: [
        "Ultra-Realistic AI Inbound/Outbound Voice Call Agents",
        "Automated WhatsApp & Instagram DM Lead Qualification Bots",
        "Autonomous Predictive Lead Scoring & Intent Detection",
        "Self-Healing CRM Workflows (HubSpot, GoHighLevel, Salesforce)",
        "Custom LLM Fine-Tuned on Your Brand Knowledge Base"
      ]
    },
    {
      id: "seo-domination",
      icon: "search-code",
      badge: "Compounding Traffic",
      title: "Search Authority & AI Engine Optimization (GEO)",
      subtitle: "Top-1 Google rankings and ChatGPT/Perplexity AI search recommendation visibility.",
      description: "Dominate both traditional search engines and the new wave of generative AI engines. We build programmatic semantic content hubs and high-tier digital PR that drive consistent, zero-CAC organic buyer traffic.",
      metrics: "340% Avg. Organic Inbound Lead Growth in 6 Months",
      features: [
        "Programmatic SEO & High-Intent Keyword Dominance",
        "Generative Engine Optimization (GEO) for ChatGPT & Perplexity",
        "High-Authority Digital PR & Editorial Backlink Networks",
        "Technical Speed & Core Web Vitals Optimization",
        "Local Map-Pack & Enterprise Entity Stacking"
      ]
    },
    {
      id: "funnel-engineering",
      icon: "layout-web",
      badge: "Conversion-First",
      title: "Futuristic Web & High-Converting Funnels",
      subtitle: "Ultra-fast interactive landing pages, VSL funnels, and frictionless checkout flows.",
      description: "A breathtaking website is useless if it doesn't convert. We engineer mind-blowing, lightning-fast 3D interactive web experiences and VSL landing pages engineered with behavioral psychology to maximize conversion rates.",
      metrics: "Average 32% Landing Page Conversion Lift",
      features: [
        "Futuristic 3D / Interactive Web App Development",
        "High-Converting Video Sales Letter (VSL) Funnels",
        "Multi-Step Interactive Qualification Quizzes",
        "Sub-Second Page Load Speeds (100/100 Core Web Vitals)",
        "Rigorous A/B Split Testing & Heatmap Optimization"
      ]
    }
  ],

  caseStudies: [
    {
      client: "AeroTech SaaS",
      industry: "B2B Software",
      badge: "Outsourced Sales + AI",
      metrics: {
        headline: "+430% Pipeline Growth",
        stat1: "$2.4M Added ARR",
        stat2: "18 Days Avg Close",
        stat3: "9.2x Pipeline ROI"
      },
      story: "Transformed a struggling founder-led sales process into a fully automated outbound machine with 2 dedicated Vireon closers and AI-qualified lead booking.",
      tag: "Enterprise B2B"
    },
    {
      client: "OmniLuxe Direct",
      industry: "E-Commerce & Retail",
      badge: "Performance Marketing + Reels",
      metrics: {
        headline: "5.4x Verified ROAS",
        stat1: "$1.8M Revenue in 90D",
        stat2: "42M Video Views",
        stat3: "68% CAC Reduction"
      },
      story: "Engineered a viral short-form UGC creative flywheel coupled with algorithmic Meta ad spend, scaling monthly revenues from $90K to $600K+.",
      tag: "E-Commerce"
    },
    {
      client: "Apex Wealth Advisory",
      industry: "High-Ticket Consulting",
      badge: "AI Inbound + Funnels",
      metrics: {
        headline: "140+ High-Ticket Closes",
        stat1: "$3.6M Closed Deals",
        stat2: "92% Show-Up Rate",
        stat3: "<20s Speed-to-Lead"
      },
      story: "Implemented Vireon's 24/7 AI Voice Qualification bot and high-converting VSL funnel, booking calendar slots with ultra-high-net-worth clients.",
      tag: "Financial Consulting"
    }
  ],

  faqs: [
    {
      q: "How fast can Vireon Digital launch our growth sprint?",
      a: "Our rapid-deployment protocol gets your entire outbound sales infrastructure, ad creatives, or AI automations live within 7 to 10 business days. We handle everything from domain warmup and script engineering to CRM integrations."
    },
    {
      q: "What makes Vireon different from traditional marketing agencies?",
      a: "Traditional agencies charge high retainers for vanity metrics like impressions and clicks. Vireon operates as an elite full-stack revenue partner: we combine dedicated sales closers, Hollywood-level creator video production, and cutting-edge autonomous AI systems with performance-aligned growth milestones."
    },
    {
      q: "How does the Outsourced Sales Team work?",
      a: "We deploy trained SDRs and high-ticket closers directly into your CRM. We build custom outbound lists, craft high-converting personalized email and LinkedIn campaigns, qualify incoming prospects, and conduct sales calls on your behalf under your brand."
    },
    {
      q: "Can you integrate AI automation with our existing CRM (HubSpot, GoHighLevel, etc.)?",
      a: "Yes. Our AI Growth Engineers integrate seamlessly with HubSpot, Salesforce, GoHighLevel, Zapier, Make, and custom APIs to deploy 24/7 voice bots, WhatsApp auto-responders, and intelligent lead routers without disrupting your existing workflows."
    },
    {
      q: "What is your pricing model?",
      a: "We offer customized hybrid growth sprints combining a manageable monthly management fee with performance-based incentives so our incentives are 100% aligned with your top-line revenue growth."
    }
  ]
};

// Expose globally
if (typeof window !== "undefined") {
  window.VIREON_CONFIG = VIREON_CONFIG;
}
