// generate-sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'node:fs';

const sitemap = new SitemapStream({ hostname: 'https://www.extensiveacademy.org' });
const writeStream = createWriteStream('./public/sitemap.xml');

// Pipe sitemap stream to file
sitemap.pipe(writeStream);

// Define your routes
const pages = [
  { url: '/', changefreq: 'monthly', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/apply', changefreq: 'monthly', priority: 0.8 },
  { url: '/news', changefreq: 'weekly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  { url: '/academics', changefreq: 'monthly', priority: 0.7 },
  { url: '/academics/elementary', changefreq: 'monthly', priority: 0.6 },
  { url: '/academics/middle', changefreq: 'monthly', priority: 0.6 },
  { url: '/academics/high', changefreq: 'monthly', priority: 0.6 }
];

// Write each route into the sitemap stream
for (const page of pages) {
  sitemap.write(page);
}

sitemap.end();

// ✅ FIXED: Await streamToPromise on sitemap (not writeStream)
await streamToPromise(sitemap);

console.log("✅ Sitemap generated at: public/sitemap.xml");
