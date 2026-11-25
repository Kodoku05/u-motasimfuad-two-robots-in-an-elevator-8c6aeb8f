import { mkdirSync, writeFileSync } from "node:fs";

// Sensors and floor two establish robot logic and the delayed awkward reveal.
// The courtesy module blames the building, then "Lovely ride." keeps the small talk deadpan.
const line = "My sensors have detected a coolant leak since floor two, but my courtesy module insists it's the building. Lovely ride.";

if (line.length < 1 || line.length > 200 || line.trim().length === 0) {
  throw new Error("Entry line must be 1-200 non-whitespace characters.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
