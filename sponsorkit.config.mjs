import { defineConfig, presets } from "sponsorkit";

export default defineConfig({
  github: {
    login: "odroe",
    type: "organization",
  },
  outputDir: ".",
  name: "sponsors",
  formats: ["svg"],
  cacheFile: "node_modules/.cache/sponsorkit.json",
  width: 800,
  tiers: [
    {
      preset: {
        ...presets.base,
        name: presets.medium.name,
      },
      title: "Sponsors",
    },
    {
      monthlyDollars: 25,
      preset: presets.medium,
      title: "Silver Sponsors",
    },
    {
      monthlyDollars: 50,
      preset: presets.large,
      title: "Gold Sponsors",
    },
    {
      monthlyDollars: 100,
      preset: presets.xl,
      title: "Platinum Sponsors",
    },
  ],
});
