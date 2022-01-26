const { readdirSync, unlinkSync } = require("fs");
const { resolve } = require("path");
const { exec } = require("child_process");

readdirSync(resolve(__dirname, "input")).forEach(file => {
  const input = resolve(__dirname, "input", file);
  const output = resolve(__dirname, "output", file.slice(0, file.indexOf(".")) + ".webp");
  console.log(input, output);
  // try {
  //   unlinkSync(output);
  // } catch {}

  // exec(
  //   'ffmpeg -i "' +
  //     input +
  //     "\" -vf \"scale='min(500,iw)':'min(500,ih)':force_original_aspect_ratio=increase\" -loop 0 \"" +
  //     output +
  //     '"',
  //   error => {
  //     if (error) return console.log(error);
  //     console.log(input, "->", output);
  //   }
  // );
});