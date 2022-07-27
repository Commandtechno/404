const { resolve } = require("path");
const { cpSync } = require("fs");

cpSync(resolve(__dirname, "..", "assets"), resolve(__dirname, "..", "build", "assets"), {
  recursive: true
});