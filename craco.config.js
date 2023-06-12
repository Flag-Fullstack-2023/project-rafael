const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      _api: path.resolve(__dirname, "src/api"),
      _atoms: path.resolve(__dirname, "src/components/atoms"),
      _context: path.resolve(__dirname, "src/context"),
      _molecules: path.resolve(__dirname, "src/components/molecules"),
      _organisms: path.resolve(__dirname, "src/components/organisms"),
      _pages: path.resolve(__dirname, "src/pages"),
      _theme: path.resolve(__dirname, "src/theme"),
      _utils: path.resolve(__dirname, "src/utils"),
    },
  },
};
