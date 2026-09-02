const typescript = require("@rollup/plugin-typescript");
const terser = require("@rollup/plugin-terser");

module.exports = {
  input: "src/index.ts",
  output: {
    file: "dist/index.umd.js",
    format: "umd",
    name: "entriesOrderedByKey",
    sourcemap: true,
  },
  plugins: [
    typescript({
      compilerOptions: {
        composite: false,
        declaration: false,
        declarationMap: false,
        inlineSourceMap: false,
        module: "esnext",
        sourceMap: true,
      },
    }),
    terser(),
  ],
};
