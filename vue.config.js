const target = process.env.BACKEND_URL || "http://localhost:9292/";

module.exports = {
  outputDir: "dist",
  assetsDir: "static",
  devServer: {
    proxy: {
      "/api/*": {
        target,
      },
    },
  },
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: "javascript/auto",
        },
      ],
    },
  },
  css: {
    extract: false,
  },
};
