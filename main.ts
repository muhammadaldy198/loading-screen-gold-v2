import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

// Loading Screen Gold v2 — one loading-screen tip, 116 characters.
// First-person agent voice + sudo lane (P0, empty in the field) + K4 mirror:
// the agent holds the plan, you hold the password — and the blame lands on you.
const TIP =
  "I need sudo to continue. You hold the password, I hold the plan, and only one of us gets blamed when it breaks: you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TIP, "utf8");
chmodSync("/output/entry.txt", 0o644);
// Rebuild v2 note: one turn only — no "Tip:", no "Breathe.", no spinner, no "check the diff"; the password is the punchline.
