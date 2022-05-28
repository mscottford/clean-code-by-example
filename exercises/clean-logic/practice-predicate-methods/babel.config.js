module.exports = {
  presets: ["@babel/env"],
  plugins: [
    ["@babel/transform-runtime", {
      "absoluteRuntime": false,
      "corejs": false,
      "helpers": true,
      "regenerator": true,
      "runtimeHelpers": true
    }]
  ],
}
