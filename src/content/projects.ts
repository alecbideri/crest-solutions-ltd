import { images, type SiteImage } from "./images";

export type ProjectSector = "Logistics" | "Construction" | "Integrated";

export type Project = {
  slug: string;
  index: string;
  title: string;
  sector: ProjectSector;
  location: string;
  year: string;
  scope: string;
  summary: string;
  image: SiteImage;
  imageAlt: string;
  client: string;
  duration: string;
  services: string[];
  brief: string;
  approach: string;
  outcome: string;
  placeholder: boolean;
  recordNote?: string;
};

export const projects: Project[] = [
  {
    slug: "meraki-new-residence",
    index: "01",
    title: "Meraki New Residence",
    sector: "Integrated",
    location: "Kibagabaga, Kigali",
    year: "2025 to 2026",
    scope: "Materials logistics / fit-out / construction finishing",
    summary:
      "Material supply and construction finishing for the Meraki residence in Kibagabaga.",
    image: images.meraki,
    imageAlt:
      "The completed Meraki Residence in Kibagabaga, a white apartment building with balconies and a covered entrance.",
    client: "Private developer",
    duration: "2025 to 2026",
    services: [
      "Origin sourcing",
      "Freight and customs",
      "Site logistics",
      "Fit-out and finishing",
    ],
    brief:
      "A new residential apartment building needed its imported finishes and fittings delivered from origin to site while the finishing programme was already running. The client wanted one team to hold both the materials and the finishing works.",
    approach:
      "We consolidated the material schedule in Dubai and China, matched deliveries to the finishing sequence and received the goods at site. The same team carried the fit-out and construction finishing, including joinery, partitions, ceilings and final fixtures.",
    outcome:
      "The residence was completed with a single material register, a coordinated finishing programme and a close-out file for the client.",
    placeholder: false,
    recordNote: "Project facts and photography supplied by the Crest project team.",
  },
  {
    slug: "ohana-residence",
    index: "02",
    title: "Ohana Residence",
    sector: "Integrated",
    location: "Nyarutarama, Kigali",
    year: "2025 to 2026",
    scope: "Materials logistics / fit-out / construction finishing",
    summary:
      "Imported materials and construction finishing for the Ohana residence in Nyarutarama.",
    image: images.ohana,
    imageAlt:
      "The completed Ohana Residence in Nyarutarama, a white apartment building with dark-framed windows and balconies.",
    client: "Private developer",
    duration: "2025 to 2026",
    services: [
      "Origin sourcing",
      "Freight and customs",
      "Site delivery",
      "Fit-out and finishing",
    ],
    brief:
      "The Ohana residence needed imported finishes and fittings coordinated with the final construction works. The site team needed deliveries called off against the finishing sequence, not a single bulk drop.",
    approach:
      "We ran the order schedule from origin, consolidated the shipments and cleared them into Kigali. Deliveries were called off by floor and by trade, while the finishing team worked through the apartments.",
    outcome:
      "The apartment building was finished and handed over with a coordinated material record and a complete finishing schedule.",
    placeholder: false,
    recordNote: "Project facts and photography supplied by the Crest project team.",
  },
  {
    slug: "rg-market-plaza",
    index: "03",
    title: "RG Market Plaza",
    sector: "Construction",
    location: "Kigali, Rwanda",
    year: "2025 to 2026",
    scope: "Fit-out / construction finishing",
    summary:
      "Fit-out and construction finishing for the RG Market Plaza commercial building.",
    image: images.rg,
    imageAlt:
      "The RG Market Plaza building in Kigali, a multi-storey commercial block with glass and cream facades.",
    client: "RG Market Plaza",
    duration: "2025 to 2026",
    services: [
      "Commercial fit-out",
      "Partitions and ceilings",
      "Joinery",
      "Final finishes",
    ],
    brief:
      "A commercial building with active ground-floor trading needed its interior fit-out and finishing completed without disrupting the tenants below.",
    approach:
      "We planned deliveries around trading hours, completed the partitions, ceilings and joinery, and finished the units in phases so the building could keep operating.",
    outcome:
      "The fit-out was completed and handed over with a phased close-out record for each unit.",
    placeholder: false,
    recordNote: "Project facts and photography supplied by the Crest project team.",
  },
  {
    slug: "international-materials-programme",
    index: "04",
    title: "International Materials Programme",
    sector: "Logistics",
    location: "Dubai and China to Kigali",
    year: "2025 to 2026",
    scope: "Origin consolidation / freight / customs / site delivery",
    summary:
      "Sourcing, consolidation and delivery of finishes and fittings from Dubai and China to residential and commercial sites in Kigali.",
    image: images.materials,
    imageAlt:
      "Top-down view of a container terminal with stacked containers and gantry cranes.",
    client: "Crest project portfolio",
    duration: "2025 to 2026",
    services: [
      "Origin consolidation",
      "Freight forwarding",
      "Customs clearance",
      "Site delivery",
    ],
    brief:
      "Three Crest projects needed imported finishes, fittings and specialist materials from suppliers in Dubai and China. The sites needed the goods in sequence, not in one shipment.",
    approach:
      "We consolidated at origin, checked quantities and finishes before shipment, booked sea and air freight, and managed clearance into Kigali. Deliveries were called off against each site's finishing programme.",
    outcome:
      "Materials reached the three sites against the finishing sequence, with one register covering origin, freight, clearance and site receipt.",
    placeholder: false,
    recordNote:
      "This record covers the shared materials programme for the Crest residential and RG Market Plaza projects.",
  },
];

export const sectors: ProjectSector[] = ["Logistics", "Construction", "Integrated"];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
