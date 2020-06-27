const path = require("path");

const srcPath = path.resolve(__dirname, '..', 'src');

module.exports = {
  stories: [`${srcPath}/components/**/*.stories.ts`],
  addons: [
    "@storybook/addon-actions/register",
    "@storybook/addon-a11y/register"
  ],
  webpackFinal: async (config) => {
    config.resolve.extensions.push(".ts", ".vue", ".css", ".scss", ".html");
    config.resolve.alias['@'] = srcPath;

    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../")
    });

    config.module.rules.push({
      test: /\.ts$/,
      exclude: /node_modules/,
      use: [
        {
          loader: "ts-loader",
          options: {
            appendTsSuffixTo: [/\.vue$/],
            transpileOnly: true
          }
        }
      ]
    });

    return config;
  }
};
