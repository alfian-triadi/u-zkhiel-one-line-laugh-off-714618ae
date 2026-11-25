// One-Line Laugh-Off — make.fun competition
// u-zkhiel-one-line-laugh-off-714618ae
//
// Writes exactly one funny line (1-200 characters) to /output/entry.txt:
// a single joke that lands on a cold read, no setup notes, no explanation.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I asked my AI assistant for a one-line joke, and it sent me an invoice for the setup.";

if (LINE.length > 200 || LINE.length < 1) throw new Error("line must be 1-200 chars, got " + LINE.length);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
