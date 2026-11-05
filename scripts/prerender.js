import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

async function prerender() {
  console.log('[prerender] Starting static HTML pre-render...');
  const { createServer } = await import('vite');
  const React = await import('react');
  const ReactDOMServer = await import('react-dom/server');

  const server = await createServer({
    root: rootDir,
    server: { middlewareMode: true },
    appType: 'custom',
    logLevel: 'warn',
    optimizeDeps: {
      noDiscovery: true,
    },
  });

  try {
    const { default: App } = await server.ssrLoadModule('/src/App.jsx');
    const appHtml = ReactDOMServer.renderToString(React.createElement(App));
    console.log(`[prerender] Rendered App component (${appHtml.length} characters)`);

    const distIndexPath = path.resolve(rootDir, 'dist', 'index.html');
    if (!fs.existsSync(distIndexPath)) {
      throw new Error(`dist/index.html not found at ${distIndexPath}`);
    }

    let template = fs.readFileSync(distIndexPath, 'utf8');

    // Replace empty root div or existing root contents with prerendered markup
    if (template.includes('<div id="root"></div>')) {
      template = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
    } else if (template.includes('<div id="root">')) {
      template = template.replace(
        /<div id="root">[\s\S]*?<\/div>\s*<\/body>/,
        `<div id="root">${appHtml}</div>\n  </body>`
      );
    }

    fs.writeFileSync(distIndexPath, template, 'utf8');
    console.log('[prerender] Successfully injected pre-rendered HTML into dist/index.html');
  } finally {
    await server.close();
  }
}

prerender().catch((err) => {
  console.error('[prerender] Error during pre-rendering:', err);
  process.exit(1);
});
