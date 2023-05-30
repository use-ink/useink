import { defineConfig } from "tsup";

export default defineConfig({
  dts: true,
  format: ["cjs", "esm"],
  entry: {
    index: "src/index.ts",
    core: "src/index.ts",
    chains: "src/chains/index.ts",
    notifications: "src/notifications/index.ts",
    utils: "src/utils/index.ts",
  },
});
