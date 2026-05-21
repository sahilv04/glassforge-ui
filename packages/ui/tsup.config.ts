import { defineConfig } from "tsup";
import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    client: "src/client.ts",
    "tailwind-preset": "src/tailwind-preset.ts",
  },
  format: ["esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  external: ["react", "react-dom"],
  async onSuccess() {
    const clientFile = resolve("dist/client.js");
    try {
      const contents = await readFile(clientFile, "utf8");
      if (!contents.startsWith('"use client"')) {
        await writeFile(clientFile, `"use client";\n${contents}`);
      }
    } catch {
      // dist/client.js may not exist on partial builds
    }
  },
});
