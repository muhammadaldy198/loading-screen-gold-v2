// Pick: sudo lane — agent denied, error trusted. 87 chars.
// Duel: builder 13W-0L vs v1 + neighbours #41-#51 + lucky-kestrel-62 + Step 9 + confident-build.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const TIP = "Tip: the agent asked for sudo and got a lecture. The error asked and got your password.";
const target = "/output/entry.txt";
mkdirSync("/output", { recursive: true });
writeFileSync(target, TIP, "utf8");
chmodSync(target, 0o644);
