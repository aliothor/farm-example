import { defineConfig } from "@farmfe/core";

export default defineConfig({
  compilation: {
    input: {
      index: "./src/index.ts",
    },
    output: {
      targetEnv: "browser-esnext",
      format: "esm",
    },
    presetEnv: false,
    sourcemap: false,
    minify: false,
  },
});
