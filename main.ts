// One-line office joke for make.fun bounty u-rama-melon-make-the-ai-judge-laugh-302d0825.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
const LINE = "We bought noise-cancelling headphones to focus, and now we all just nod through meetings like we understood a word.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = outDir + "/entry.txt";
writeFileSync(outFile, LINE + "\n", "utf8");
chmodSync(outFile, 0o644);
