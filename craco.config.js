import { resolve } from "path";

export const webpack = {
  alias: {
    _atoms: resolve(__dirname, "src/components/atoms"),
    _molecules: resolve(__dirname, "src/components/molecules"),
    _organisms: resolve(__dirname, "src/components/organisms"),
    _sections: resolve(__dirname, "src/components/sections"),
  },
};
