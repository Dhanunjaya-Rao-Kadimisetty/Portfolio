import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distHtmlPath = path.resolve(__dirname, '..', 'dist', 'index.html');

const html = fs.readFileSync(distHtmlPath, 'utf8');

console.log('=== COMPREHENSIVE TECHNICAL SEO AUDIT OF DIST/INDEX.HTML ===\n');

// 1. Title
const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
console.log('1. Title:', titleMatch ? titleMatch[1].trim() : 'MISSING', '(' + (titleMatch ? titleMatch[1].trim().length : 0) + ' chars)');

// 2. Meta description
const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([\s\S]*?)["']/i);
console.log('2. Meta Description:', descMatch ? descMatch[1].trim() : 'MISSING', '(' + (descMatch ? descMatch[1].trim().length : 0) + ' chars)');

// 3. Canonical
const canonMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([\s\S]*?)["']/i);
console.log('3. Canonical URL:', canonMatch ? canonMatch[1] : 'MISSING');

// 4. Preload LCP
const preloadMatch = html.match(/<link[^>]*rel=["']preload["'][^>]*href=["']([\s\S]*?)["'][^>]*>/i);
console.log('4. LCP Image Preload:', preloadMatch ? preloadMatch[0] : 'MISSING');

// 5. H1
const h1s = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi) || [];
console.log('\n5. H1 Count:', h1s.length);
h1s.forEach((h, i) => console.log('   H1 #' + (i + 1) + ':', h.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()));

// 6. H2
const h2s = html.match(/<h2\b[^>]*>([\s\S]*?)<\/h2>/gi) || [];
console.log('\n6. H2 Count:', h2s.length);
h2s.forEach((h, i) => console.log('   H2 #' + (i + 1) + ':', h.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()));

// 7. H3
const h3s = html.match(/<h3\b[^>]*>([\s\S]*?)<\/h3>/gi) || [];
console.log('\n7. H3 Count:', h3s.length);
h3s.forEach((h, i) => console.log('   H3 #' + (i + 1) + ':', h.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()));

// 8. Word count
const textOnly = html
  .replace(/<script[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style[\s\S]*?<\/style>/gi, ' ')
  .replace(/<[^>]+>/g, ' ');
const words = textOnly.match(/\b[A-Za-z0-9'-]+\b/g) || [];
console.log('\n8. Total Content Words:', words.length);

// 9. Links
const linkTags = html.match(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi) || [];
console.log('\n9. Total Outgoing Links:', linkTags.length);
linkTags.forEach((l, i) => {
  const hrefMatch = l.match(/href=["']([^"']+)["']/i);
  const anchorText = l.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  console.log(`   Link #${i + 1}: [${anchorText || '(icon/image)'}] -> ${hrefMatch ? hrefMatch[1] : ''}`);
});

// 10. Images & Alt
const imgTags = html.match(/<img\b[^>]*>/gi) || [];
console.log('\n10. Total Images:', imgTags.length);
imgTags.forEach((img, i) => console.log('   Img #' + (i + 1) + ':', img));

// 11. Schema JSON-LD
const jsonLds = html.match(/<script type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi) || [];
console.log('\n11. JSON-LD Structured Data Count:', jsonLds.length);
if (jsonLds.length > 0) {
  try {
    const raw = jsonLds[0].replace(/<script[^>]*>|<\/script>/gi, '');
    const parsed = JSON.parse(raw);
    console.log('   JSON-LD Types in Graph:', parsed['@graph'] ? parsed['@graph'].map((item) => item['@type']) : 'none');
  } catch (e) {
    console.error('   JSON-LD Parse Error:', e.message);
  }
}

// 12. Robots & Verification
const robotsMatch = html.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([\s\S]*?)["']/i);
console.log('\n12. Robots Meta:', robotsMatch ? robotsMatch[1] : 'MISSING');
const gVerify = html.match(/<meta[^>]*name=["']google-site-verification["'][^>]*content=["']([\s\S]*?)["']/i);
console.log('13. Google Site Verification:', gVerify ? gVerify[1] : 'MISSING');

console.log('\n=== AUDIT COMPLETE ===');
