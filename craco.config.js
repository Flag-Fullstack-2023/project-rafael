const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      _atoms: path.resolve(__dirname, "src/components/atoms"),
      _molecules: path.resolve(__dirname, "src/components/molecules"),
      _organisms: path.resolve(__dirname, "src/components/organisms"),
      _sections: path.resolve(__dirname, "src/components/sections"),
      _pages: path.resolve(__dirname, "src/pages"),
    },
  },
};
