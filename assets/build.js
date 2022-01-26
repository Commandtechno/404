const { mkdirSync, readdirSync, unlinkSync } = require("fs");
const { resolve } = require("path");
const { exec } = require("child_process");

const inputDir = resolve(__dirname, "input");
const outputDir = resolve(__dirname, "output");

try {
  mkdirSync(outputDir);
} catch {}

readdirSync(inputDir).forEach(file => {
  const input = resolve(inputDir, file);
  const output = resolve(outputDir, file.slice(0, file.indexOf(".")) + ".webp");

  try {
    unlinkSync(output);
  } catch {}

  exec(
    `ffmpeg -i "${input}" -vf "scale='min(500,iw)':'min(500,ih)':force_original_aspect_ratio=increase" -loop 0 "${output}"`,
    error => {
      if (error) return console.log(error);
      console.log(input, "->", output);
    }
  );
});