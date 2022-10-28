const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
    
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js", // using [name] will create files name in entry object. ex: bundle
  },
};
