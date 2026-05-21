import { mkdir, copyFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const src = resolve(here, "../src/styles/themes");
const out = resolve(here, "../dist/themes");

await mkdir(out, { recursive: true });
for (const name of ["glass.css", "solid.css", "soft.css", "midnight.css"]) {
  await copyFile(`${src}/${name}`, `${out}/${name}`);
}
console.log("Copied 4 theme presets to dist/themes/");
