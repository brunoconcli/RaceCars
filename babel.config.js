module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current"
        }
      }
    ],
    "@babel/preset-typescript"
  ],
  plugins: [
    ["module-resolver", {
      alias: {
        "@app": "./src/app",
        "@core": "./src/core",
        "@infra": "./src/infrastructure",
        "@main": "./src/main",
        "@pre": "./src/presentation"
      }
    }]
  ],
  ignore: [
    "**/*.spec.ts"
  ]
}
