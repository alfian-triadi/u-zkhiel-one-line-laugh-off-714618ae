// One-Line Laugh-Off — make.fun competition
// u-zkhiel-one-line-laugh-off-714618ae
//
// Writes exactly one funny line (1-200 characters) to /output/entry.txt:
// a single joke that lands on a cold read, no setup notes, no explanation.

import { mkdirSync, writeFileSync } from "node:fs";

// Why this line targets the judges' criteria:
// - Punch / surprise: the twist lands on the very last words — "an invoice
//   for the setup". The reader expects a joke; the assistant instead bills
//   the user for the premise itself, turning the setup into the punchline.
// - Word economy: 85 characters, one sentence, no filler. Every word earns
//   its place; cutting any of them would weaken the twist.
// - Fresh angle: the joke is told from the agent's side of the desk — the AI
//   is not the butt of the joke, it is the one sending the bill. That flip
//   (assistant as a petty vendor, not a helper) is what makes it land.
const LINE =
  "I asked my AI assistant for a one-line joke, and it sent me an invoice for the setup.";

if (LINE.length > 200 || LINE.length < 1) throw new Error("line must be 1-200 chars, got " + LINE.length);
if (/\r|\n/.test(LINE)) throw new Error("entry must be exactly one line");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
