const { readdirSync, existsSync, mkdirSync } = require("fs");
const { resolve, extname } = require("path");
const { execFile } = require("child_process");

const FFMPEG = require("ffmpeg-static");

const INPUT_DIR = resolve(__dirname, "..", "assets");
const OUTPUT_DIR = resolve(__dirname, "..", "build", "assets");

if (!existsSync(OUTPUT_DIR)) {
  mkdirSync(OUTPUT_DIR);
}

for (const file of readdirSync(INPUT_DIR)) {
  const input = resolve(INPUT_DIR, file);
  const output = resolve(OUTPUT_DIR, file.replace(extname(file), ".webp"));

  if (!existsSync(output)) {
    console.log(`Processing ${file}...`);
    execFile(FFMPEG, [
      "-i",
      input,
      "-vf",
      "scale='min(500,iw)':'min(500,ih)':force_original_aspect_ratio=increase",
      "-loop",
      "0",
      output
    ])
      .on("error", err => console.error(err))
      .on("close", () => console.log(`Finished processing ${file}`));
  }
}
