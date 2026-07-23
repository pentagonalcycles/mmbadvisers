export type TimelineItem = {
  year: string;
  detail: string;
  dialImage?: string;
  chartImage?: string;
};

export type SiteContent = {
  heroTitle: string;
  heroSubtitle: string;
  valuePoints: string[];
  timeline: TimelineItem[];
  disclaimer: string;
};


export const siteContent: SiteContent = {
  heroTitle: "Protecting Capital Against Market Meltdowns",
  heroSubtitle:
    "MMB Advisers provides TP Dates CP (Turning Point Dates for Capital Protection), an ex-ante risk management overlay powered by machine learning and AI, designed to help institutional investors mitigate severe drawdowns without liquidating core holdings.",
  valuePoints: [
    "Early-warning windows for elevated crash risk",
    "Limited intervention hedge overlay, up to three times per year",
    "Custom daily or weekly reports integrated with existing workflows"
  ],
  timeline: [
    {
      year: "2020",
      detail:
        "High-risk period flagged ex-ante around the COVID crash window to support fast protection decisions.",
      dialImage: "/images/Dial2020.png",
      chartImage: "/images/Dial2020Chart.png",
    },
    {
      year: "2022",
      detail:
        "Captured key stress windows while documenting model limits transparently for governance.",
      dialImage: "/images/Dial2022.png",
      chartImage: "/images/Dial2022Chart.png",
    },
    {
      year: "2025",
      detail:
        "Identified two principal clusters, including February-April and late-October to November.",
      dialImage: "/images/Dial2025.png",
      chartImage: "/images/Dial2025Chart.png",
    },
    {
      year: "2026 Q1",
      detail:
        "Candidate TP dates highlighted in advance to prepare portfolio protection actions.",
      dialImage: "/images/Dial2026.png",
      chartImage: "/images/Dial2026Chart.png",
    }
  ],
  disclaimer:
    "MMB Advisers is not FCA registered and does not provide regulated investment advice. Nothing on this website is a recommendation to enter specific trades, buy or sell any instrument, or take any particular investment action. Past observations are not a guarantee of future outcomes."
};
