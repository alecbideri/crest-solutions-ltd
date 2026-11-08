import { images, type SiteImage } from "./images";

export type DivisionId = "logistics" | "construction";

export type Division = {
  id: DivisionId;
  index: string;
  name: string;
  shortName: string;
  headline: string;
  summary: string;
  description: string;
  image: SiteImage;
  imageAlt: string;
  link: string;
  services: { title: string; body: string }[];
  capabilities: string[];
};

export const divisions: Division[] = [
  {
    id: "logistics",
    index: "02",
    name: "Logistics",
    shortName: "Logistics",
    headline: "Things that arrive.",
    summary:
      "Freight, materials and equipment coordinated end to end, from origin markets to the site gate.",
    description:
      "Crest Logistics moves cargo, construction materials and project equipment from origin markets in Dubai, China and beyond to sites across East Africa. We plan the route, hold the documentation, manage the carriers and stay on the movement until it is closed out.",
    image: images.logistics,
    imageAlt:
      "Aerial view of a container terminal with stacked containers and ship-to-shore cranes.",
    link: "/divisions/logistics",
    services: [
      {
        title: "Origin sourcing and consolidation",
        body: "Supplier coordination, quality checks and consolidated shipments from Dubai, China and other markets.",
      },
      {
        title: "Freight forwarding and customs",
        body: "Sea, air and road freight, documentation and clearance into Rwanda.",
      },
      {
        title: "Project cargo and heavy lift",
        body: "Abnormal loads, route surveys, permits, escorts and site reception.",
      },
      {
        title: "Construction materials supply",
        body: "Cement, steel, finishes, fittings and specialist materials, scheduled to site.",
      },
      {
        title: "Equipment sourcing and mobilisation",
        body: "Plant, tools and specialist equipment moved from origin to site.",
      },
      {
        title: "Warehousing and distribution",
        body: "Bonded and open storage, inventory control, pick-and-pack and regional replenishment.",
      },
      {
        title: "Last-mile and site delivery",
        body: "Delivery windows, offloading and proof of receipt tied to the construction programme.",
      },
      {
        title: "Supplier and site coordination",
        body: "Order tracking, call-off schedules and one material register across the programme.",
      },
    ],
    capabilities: [
      "Origin sourcing",
      "Freight forwarding",
      "Project cargo",
      "Materials supply",
      "Warehousing",
      "Site delivery",
    ],
  },
  {
    id: "construction",
    index: "01",
    name: "Construction",
    shortName: "Construction",
    headline: "Things that stand.",
    summary:
      "Residential, commercial, fit-out and finishing works delivered by a team that plans for the ground it is building on.",
    description:
      "Crest Construction takes on residential, commercial, fit-out and finishing works where the site is complex, the programme is tight and the client needs one team from survey to close-out. We build and finish with the end of the asset in mind: maintainable, documented and ready to use.",
    image: images.construction,
    imageAlt:
      "Concrete bridge piers and deck structure seen from below in strong perspective.",
    link: "/divisions/construction",
    services: [
      {
        title: "Residential apartments",
        body: "New-build apartments and residential finishing from structure to handover.",
      },
      {
        title: "Commercial and retail fit-out",
        body: "Shopfronts, restaurants, offices and market spaces, finished to the tenant's brief.",
      },
      {
        title: "Construction finishing",
        body: "Joinery, partitions, ceilings, tiling, painting and final fixtures.",
      },
      {
        title: "Civil works and earthworks",
        body: "Site clearance, cut and fill, drainage, access and ground improvement.",
      },
      {
        title: "Structural frames and envelopes",
        body: "Reinforced concrete, steel and masonry structures, waterproofing and cladding.",
      },
      {
        title: "Infrastructure and external works",
        body: "Roads, parking, retaining walls, utilities and landscaping.",
      },
      {
        title: "Project management",
        body: "Programme control, procurement, inspections, snagging and handover files.",
      },
      {
        title: "Start-to-finish delivery",
        body: "One team from material sourcing and site preparation through to finishing and close-out.",
      },
    ],
    capabilities: [
      "Residential build",
      "Commercial fit-out",
      "Finishing",
      "Civil works",
      "Structural frames",
      "Project management",
    ],
  },
];

export const divisionById = {
  logistics: divisions[0],
  construction: divisions[1],
} as const;

export const divisionsOrdered = [...divisions].sort((a, b) =>
  a.index.localeCompare(b.index),
);

export const sharedWork = [
  {
    title: "Materials to finishing",
    body: "The same team sources the finishes, moves them from origin and installs them on site. The material register and the finishing programme are one document.",
  },
  {
    title: "Residential delivery",
    body: "Apartments from structure to handover, including imported fittings, joinery and final finishes.",
  },
  {
    title: "Commercial fit-out",
    body: "Retail and market spaces finished while the building is live, with deliveries planned around trading hours.",
  },
];
