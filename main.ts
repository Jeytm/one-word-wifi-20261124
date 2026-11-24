import { mkdirSync, writeFileSync } from "node:fs";

// One word for your Wi-Fi: Gaslighting.
// Full bars. "Connected." Nothing loads — and somehow
// it makes YOU feel like the problem. It swears the
// internet is fine, your phone is the crazy one.
const entry = "Gaslighting";

// Runtime guard: the gate requires exactly one word, 1-20 chars,
// no spaces, no punctuation, no extra text. Reject anything with
// leading/trailing whitespace too — the file must be the word alone.
if (entry !== entry.trim() || !/^[A-Za-z]{1,20}$/.test(entry)) {
  throw new Error(`entry must be exactly one word (1-20 letters), got: ${JSON.stringify(entry)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
