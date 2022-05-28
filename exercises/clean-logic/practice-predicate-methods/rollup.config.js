import pkg from "./package.json";
import commonjs from "rollup-plugin-commonjs";
import progress from "rollup-plugin-progress";
import babel from "rollup-plugin-babel";
import {
  terser
} from "rollup-plugin-terser";
import cleanup from "rollup-plugin-cleanup";
import del from "rollup-plugin-delete";

export default {
  input: "./src/index.js",
  output: [{
      file: pkg.main,
      format: "cjs"
    },
    {
      file: pkg.module,
      format: "es"
    }
  ],
  plugins: [
    progress({
      clearLines: false
    }),
    del({
      targets: [
        "lib/*"
      ]
    }),
    babel({
      exclude: "node_modules/**",
      runtimeHelpers: true
    }),
    commonjs({
      namedExports: {}
    }),
    terser(),
    cleanup()
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ]
}
