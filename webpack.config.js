const path = require("path");

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Adds stylus loader
  config.module.rules.push({
    test: /\.styl$/,
    loader: "style-loader!css-loader!stylus-loader",
  });

  return config;
};
