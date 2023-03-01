import { defineConfig } from "vite";
import path = require("path");

export default defineConfig({
  resolve: {
    alias: {
      src: path.resolve("src/"),
    },
  },
});
