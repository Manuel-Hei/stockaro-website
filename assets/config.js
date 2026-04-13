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
        "Automatische Abbuchung bei jeder Shopify-Zahlung",
        "Mobiler Scanner (Eingang, Retoure, Verlust)",
        "Eingang/Ausgang Chart mit Vorwoche-Vergleich",
        "5 KPI-Karten mit Vorperioden-Delta",
        "Top 10 meistbewegte Artikel",
        "CSV-Import & -Export",
      ],
    },
    {
      name:      "Standard",
      price:     "29",
      highlight: true,
      features: [
        "bis 500 aktive SKUs",
        "Alles aus Basic",
        "Produktfreigabe-Workflow",
        "Lieferschein-Druck & Pack-Workflow",
        "Buchungen nach Quelle (Donut-Chart)",
        "Aktivität nach Wochentag",
        "Pareto 80/20 — welche 20% SKUs erzeugen 80% der Bewegungen?",
      ],
    },
    {
      name:      "Pro",
      price:     "79",
      highlight: false,
      features: [
        "bis 10.000 aktive SKUs",
        "Alles aus Standard",
        "Bestandsverlauf pro SKU über Zeit",
        "Lagerumschlag-Rate (Schnell- vs. Langsamdreher)",
        "Prioritäts-Support",
      ],
    },
  ],

  year: new Date().getFullYear(),
};
