const esbuild = require("esbuild");
const esbuildHtmlMinify = require("../../esbuild-plugin-minify-html");

esbuild.build({
  entryPoints: ["src/index.html", "src/index.js", "src/styles.css"],
  bundle: true,
  minify: true,
  outdir: "build",
  plugins: [esbuildHtmlMinify()]
});
