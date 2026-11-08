export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://crestsolutionsltd.com";

const whatsappNumber = "250787849403";
const whatsappMessage = encodeURIComponent(
  "Hello Crest Solutions Ltd, I would like to discuss a project.",
);

export const company = {
  legalName: "Crest Solutions Ltd",
  shortName: "Crest",
  email: "info@crestsolutionsltd.com",
  phone: "+250 787 849 403",
  whatsappNumber,
  whatsapp: `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
  phoneNote: "Direct line",
  location: "Kigali, Rwanda",
  address: "Kigali, Rwanda. Full address available on request.",
  hours: "Monday to Friday, 08:00 to 17:30 CAT",
  tagline: "Movement and structure, held to one standard.",
  description:
    "Crest Solutions Ltd is a dual-discipline company working across materials logistics and construction, from origin markets in Dubai and China to sites in East Africa and beyond.",
  hero: {
    eyebrow: "Materials logistics / Construction",
    title: "We move materials. We build places.",
    intro:
      "Crest Solutions Ltd sources, moves and builds from origin to handover, with one accountable team across East Africa.",
    primaryCta: "Start a conversation",
    secondaryCta: "See how we work",
  },
  intro:
    "Crest exists to close the gap between movement and construction. We source and consolidate materials in Dubai, China and other origin markets, move them through the East African corridor, and carry the construction and finishing works on site. Clients get one plan, one reporting rhythm and one accountable lead.",
  positioning:
    "Two disciplines, one operating standard. The planning discipline that routes materials from origin markets is applied to a residential build. The close-out rigour that finishes an apartment is applied to a movement. The client does not manage the seam.",
  stats: [
    {
      value: "02",
      label: "Divisions under one operating standard",
    },
    {
      value: "03",
      label: "Markets connected: East Africa, UAE, China",
    },
    {
      value: "01",
      label: "Accountable lead on every engagement",
    },
    {
      value: "100%",
      label: "Close-out documentation on completion",
    },
  ],
  principles: [
    {
      title: "Precision over noise",
      body: "Clear plans, accurate reporting, no theatre. The client should always know what is moving, what is standing and what happens next.",
    },
    {
      title: "Stewardship",
      body: "We treat the client's budget, site and reputation as if they were our own. Waste is a design failure, not an inevitability.",
    },
    {
      title: "Candour",
      body: "Bad news travels early. We would rather adjust the plan than pretend the plan is still working.",
    },
    {
      title: "Safety as method",
      body: "Risk is designed out before work starts, not added as a poster afterwards. Every engagement begins with a risk register.",
    },
    {
      title: "Local knowledge",
      body: "Routes, authorities, suppliers and terrain. We work where we operate, with people who know the ground.",
    },
    {
      title: "The record",
      body: "Every engagement ends with a handover file that someone else can use. If it is not written down, it is not finished.",
    },
  ],
  steps: [
    {
      title: "Read the ground",
      body: "We start with the site, the route, the season and the permit. The plan is built around real constraints, not assumptions.",
    },
    {
      title: "Design the route",
      body: "We choose the mode, the sequence and the team. Every dependency gets an owner and a date.",
    },
    {
      title: "Deploy the team",
      body: "Owned capacity and vetted partners mobilise against one schedule. One lead holds the line.",
    },
    {
      title: "Assure the handover",
      body: "We report against the plan, close out the record and stay available after the keys or the cargo change hands.",
    },
  ],
  corridor: [
    {
      city: "Dubai",
      country: "UAE",
      role: "Origin sourcing and consolidation",
      coordinates: "25°12 N / 55°16 E",
    },
    {
      city: "Guangzhou",
      country: "China",
      role: "Supplier consolidation",
      coordinates: "23°07 N / 113°15 E",
    },
    {
      city: "Mombasa",
      country: "Kenya",
      role: "Port and inbound freight",
      coordinates: "04°03 S / 39°40 E",
    },
    {
      city: "Nairobi",
      country: "Kenya",
      role: "Consolidation and line-haul",
      coordinates: "01°17 S / 36°49 E",
    },
    {
      city: "Kampala",
      country: "Uganda",
      role: "Border clearance and distribution",
      coordinates: "00°20 N / 32°34 E",
    },
    {
      city: "Kigali",
      country: "Rwanda",
      role: "Base of operations",
      coordinates: "01°56 S / 30°03 E",
    },
    {
      city: "Dar es Salaam",
      country: "Tanzania",
      role: "Southern inbound route",
      coordinates: "06°47 S / 39°12 E",
    },
  ],
  leadership: [
    {
      name: "Levis Ishimwe",
      role: "Managing Director",
      initials: "LI",
      note: "Accountable for the operating standard across both divisions.",
    },
    {
      name: "Desire Tuyisenge",
      role: "Head of Engineering",
      initials: "DT",
      note: "Leads technical delivery, engineering and construction quality.",
    },
    {
      name: "Bideri Alec",
      role: "Project Manager",
      initials: "BA",
      note: "Runs project planning, logistics coordination and handover.",
    },
  ],
  facts: [
    { label: "Legal name", value: "Crest Solutions Ltd" },
    { label: "Base", value: "Kigali, Rwanda" },
    { label: "Coverage", value: "East Africa / Dubai / China / global origins" },
    { label: "Divisions", value: "Logistics / Construction" },
    { label: "Phone", value: "+250 787 849 403" },
    { label: "Email", value: "info@crestsolutionsltd.com" },
    { label: "Registration", value: "Details available on request" },
  ],
  profile: {
    title: "Company Profile",
    edition: "2026 edition",
    intro:
      "This profile sets out who Crest Solutions Ltd is, what the company does, how it works and the standard it holds across materials logistics and construction, from origin markets to handover. Logistics coverage is not limited to the East African corridor; it can extend to other origin markets as a client's supply chain requires.",
    note:
      "Project records and team details reflect current work as of November 2026. Add verified figures, client approvals and completed photography before external distribution.",
  },
  seo: {
    home: "Crest Solutions Ltd sources, moves and builds across Dubai, China and East Africa. Materials logistics and construction under one accountable standard.",
    about:
      "Who Crest Solutions Ltd is, the team, and how the company works across materials logistics and construction.",
    projects:
      "Current Crest Solutions Ltd projects in residential construction, commercial fit-out and international materials logistics.",
    contact:
      "Start a conversation with Crest Solutions Ltd about materials logistics, construction, or both.",
    profile:
      "The Crest Solutions Ltd company profile: who we are, what we do, how we work, current projects and contact details.",
  },
};

export const contactIntent = "Start a conversation";
