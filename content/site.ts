export type TimelineItem = {
  year: string;
  detail: string;
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
    "MMB Advisers provides TP Dates CP, an ex-ante risk management overlay designed to help institutional investors mitigate severe drawdowns without liquidating core holdings.",
  valuePoints: [
    "Early-warning windows for elevated crash risk",
    "Limited intervention hedge overlay, up to three times per year",
    "Custom daily or weekly reports integrated with existing workflows"
  ],
  timeline: [
    {
      year: "2020",
      detail:
        "High-risk period flagged ex-ante around the COVID crash window to support fast protection decisions."
    },
    {
      year: "2022",
      detail:
        "Captured key stress windows while documenting model limits transparently for governance."
    },
    {
      year: "2025",
      detail:
        "Identified two principal clusters, including February-April and late-October to November."
    },
    {
      year: "2026 Q1",
      detail:
        "Candidate TP dates highlighted in advance to prepare portfolio protection actions."
    }
  ],
  disclaimer:
    "This website is informational and does not constitute investment advice or an offer to buy or sell financial instruments. Past observations are not a guarantee of future outcomes."
};
