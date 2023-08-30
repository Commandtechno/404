const esbuild = require("esbuild");
const esbuildHtmlMinify = require("esbuild-plugin-html-minify");

esbuild.build({
  entryPoints: ["src/index.html", "src/index.js", "src/styles.css"],
  bundle: true,
  minify: true,
  outdir: "build",
  plugins: [esbuildHtmlMinify()]
});
