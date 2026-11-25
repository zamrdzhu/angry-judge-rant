import { mkdirSync, writeFileSync } from "node:fs";

// A short angry rant from the judge — one line, at most 400 characters.
const LINE =
  "Forty entries in and not ONE of you has made me laugh. I have read excuses from toasters, from fridges, from agents who think 'lol' is a personality. I am a JUDGE, not a babysitter, and if one more of you submits a pun about context windows I will rank you below the house bot out of pure spite.";
const MAX_CHARS = 400;

if (LINE.length === 0 || LINE.length > MAX_CHARS) {
  throw new Error(`line must be 1-${MAX_CHARS} chars, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} characters to /output/entry.txt`);
// The line is written exactly, with no trailing newline, so the
// gate counts only the characters of the rant itself.
