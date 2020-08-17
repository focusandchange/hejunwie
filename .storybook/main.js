const path = require("path");
module.exports = {
  // 指定您编写的故事文件
  stories: ["../src/**/*.stories.tsx"],

  // 单独的 webpack 配置
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("ts-loader"),
          options: {
            configFile: path.resolve(__dirname, "./tsconfig.json"),
          },
        },
      ],
    });

    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
};
