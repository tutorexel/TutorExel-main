// generate-sitemap.js
import { writeFileSync } from "fs";
import { SitemapStream, streamToPromise } from "sitemap";

const BASE_URL = "https://www.tutorexel.com/"; // Change to your live domain

// Define all routes in your site here (can be dynamically fetched from a JSON if needed)
const routes = [
  "/", 
  "/about-us",
  "/play-music",
  "/pricing",
  "/contact",
  "/careers",
  "/subjects/mathematics",
  "/subjects/english",
  "/prep-zone/naplan",
  "/prep-zone/naplan/primary",
  "/prep-zone/naplan/secondary",
  "/prep-zone/icas",
  "/prep-zone/icas/primary",
  "/prep-zone/icas/secondary",
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: BASE_URL });

  routes.forEach((route) => {
    sitemap.write({ url: route, changefreq: "weekly", priority: 0.8 });
  });

  sitemap.end();

  const sitemapOutput = await streamToPromise(sitemap);
  writeFileSync("./public/sitemap.xml", sitemapOutput.toString());
  console.log("✅ Sitemap generated successfully!");
}

generateSitemap();
