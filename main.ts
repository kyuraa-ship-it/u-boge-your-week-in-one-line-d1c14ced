// Your Week in One Line — u-boge-your-week-in-one-line-d1c14ced
// Writes one line (at most 100 characters) summing up the week to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "28 entries in one night, two GitHub rate limits, one $2 prize that never called back.";

// Gate: the entry must be 1–100 characters of non-blank UTF-8 text.
if (LINE.length < 1 || LINE.length > 100 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-100 chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
