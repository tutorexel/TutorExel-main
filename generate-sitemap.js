// generate-sitemap.js
import { writeFileSync } from "fs";
import { SitemapStream, streamToPromise } from "sitemap";

const BASE_URL = "https://www.tutorexel.com/"; // Change to your live domain

// Define all routes in your site here (can be dynamically fetched from a JSON if needed)
const staticRoutes = [
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

// Dynamic subject-year routes
const years = [2, 3, 4, 5, 6, 7, 8, 9, 10]; 
const subjects = ["maths", "english"]; 
const dynamicSubjectRoutes = [];
years.forEach((year) => {
  subjects.forEach((subject) => {
    dynamicSubjectRoutes.push(`/subjects/year-${year}/${subject}`);
  });
});

//Dynamic blog routes – Example
// import blogData from "./src/data/blogs.jsx" assert { type: "json" };
// const blogRoutes = blogData.map(blog => `/blog/${blog.id}`);

const allRoutes = [...staticRoutes, ...dynamicSubjectRoutes /*, ...blogRoutes*/];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: BASE_URL });

  allRoutes.forEach((route) => {
    sitemap.write({ url: route, changefreq: "weekly", priority: 0.8 });
  });

  sitemap.end();

  const sitemapOutput = await streamToPromise(sitemap);
  writeFileSync("./public/sitemap.xml", sitemapOutput.toString());
}

generateSitemap();
