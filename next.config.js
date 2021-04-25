module.exports = {
  future: {
    webpack5: true,
  },
  webpack: function (config, { isServer }) {
    if (isServer) {
      require('./scripts/generate-sitemap');
      require('./scripts/generate-rss');
    }
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
};
