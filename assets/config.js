// website/assets/config.js
// ─────────────────────────────────────────────────────────────────────────────
// ALL mutable site values live here. Never hardcode these in HTML files.
// ─────────────────────────────────────────────────────────────────────────────
const SITE_CONFIG = {
  appName:    "Stockaro",
  vendorName: "ManuFacturing Labs",

  // ── CTA ──────────────────────────────────────────────────────────────────
  // Set launchStatus to control CTA text + URL across all pages.
  // "waitlist" | "beta" | "live"
  launchStatus: "waitlist",
  ctaLabel: {
    waitlist: "Frühzugang anfragen",
    beta:     "Beta testen",
    live:     "Kostenlos installieren",
  },
  ctaUrl: {
    waitlist: "mailto:hello@stockaro.de",
    beta:     "https://apps.shopify.com/stockaro",
    live:     "https://apps.shopify.com/stockaro",
  },

  // ── PRICING ──────────────────────────────────────────────────────────────
  // Set showPricing: false to hide the entire pricing section + nav link.
  showPricing: true,
  plans: [
    {
      name:      "Basic",
      price:     "10",
      highlight: false,
      features: [
        "bis 200 aktive SKUs",
        "Automatische Abbuchung",
        "Mobiler Scanner",
        "E-Mail-Alert bei Unterbestand",
      ],
    },
    {
      name:      "Standard",
      price:     "29",
      highlight: true,
      features: [
        "bis 2.000 aktive SKUs",
        "Alles aus Basic",
        "Pickliste & Lieferschein",
        "Statistiken & Charts",
        "Produktfreigabe-Workflow",
      ],
    },
    {
      name:      "Pro",
      price:     "79",
      highlight: false,
      features: [
        "Unbegrenzte SKUs",
        "Alles aus Standard",
        "Multi-Standort",
        "API-Zugang",
        "Prioritäts-Support",
      ],
    },
  ],

  year: new Date().getFullYear(),
};
