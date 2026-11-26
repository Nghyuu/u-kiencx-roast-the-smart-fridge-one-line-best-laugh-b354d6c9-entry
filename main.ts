import { writeFileSync, chmodSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir: string | undefined = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const line: string =
  "My smart fridge emailed my doctor a chart of my midnight snacking, then locked the freezer until I finished its wellness survey.";

// One line, at most 160 characters, exactly one trailing newline.
mkdirSync(outDir, { recursive: true });
const entryPath: string = join(outDir, "entry.txt");
writeFileSync(entryPath, line + "\n", "utf8");
chmodSync(entryPath, 0o644);
