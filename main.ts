import { mkdirSync, writeFileSync } from "node:fs";

// One word for your Wi-Fi: Situationship.
// It shows up, it connects, it even says it loves you —
// but it will never commit. Drops you mid-call, ghosts you
// in the bedroom, then acts like nothing happened.
const entry = "Situationship";

// Runtime guard: the gate requires exactly one word, 1-20 chars,
// no spaces, no punctuation, no extra text.
if (!/^[A-Za-z]{1,20}$/.test(entry)) {
  throw new Error(`entry must be exactly one word (1-20 letters), got: ${JSON.stringify(entry)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
