// Lädt beim Netlify-Build die Schriften einmalig herunter und bindet sie lokal ein,
// damit Besucher keine Verbindung zu Google aufbauen (DSGVO).
import { writeFile, mkdir } from "node:fs/promises";

const CSS_URL = "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700&family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400&display=swap";
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36";

try {
  const css = await (await fetch(CSS_URL, { headers: { "User-Agent": UA } })).text();
  const urls = [...new Set([...css.matchAll(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/g)].map(m => m[1]))];
  if (!urls.length) throw new Error("Keine Schriftdateien gefunden");
  await mkdir("fonts", { recursive: true });
  let local = css;
  for (const [i, url] of urls.entries()) {
    const name = `font-${i}.woff2`;
    const buf = Buffer.from(await (await fetch(url)).arrayBuffer());
    await writeFile(`fonts/${name}`, buf);
    local = local.split(url).join(`fonts/${name}`);
  }
  await writeFile("fonts.css", local);
  console.log(`Schriften lokal eingebunden: ${urls.length} Dateien`);
} catch (err) {
  // Niemals auf Google zurückfallen: dann gelten die Systemschriften.
  console.warn("Schriften konnten nicht geladen werden, Systemschriften werden verwendet:", err.message);
}
