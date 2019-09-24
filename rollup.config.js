import babel from 'rollup-plugin-babel';
import riot  from 'rollup-plugin-riot'
import rimraf from "rimraf";
import resolve from 'rollup-plugin-node-resolve';

rimraf.sync("dist");

export default {
  input: "src/main.js",
  output: {
    file: "dist/js/app.js",
    format: "iife"
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    riot()
  ]
}