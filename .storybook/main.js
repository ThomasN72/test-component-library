module.exports = {
  // stories: [
  //   "../stories/**/*.stories.mdx",
  //   "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  // ],
  stories: ["../**/stories.@(jsx|mdx|tsx)", "../**/*.stories.@(jsx|mdx|tsx)"],
  // addons: [
  //   "@storybook/addon-links",
  //   "@storybook/addon-essentials",
  //   "@storybook/addon-interactions",
  // ],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  // webpackFinal: async (config, { configType }) => {
  //   // Make whatever fine-grained changes you need
  //   // Return the altered config
  //   config.module.rules.push({
  //     test: /\.styl$/,
  //     loader: "style-loader!css-loader!stylus-loader",
  //   });
  //   return config;
  // },
};
