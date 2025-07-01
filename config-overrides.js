module.exports = function override(config, env) {
  config.output.filename = 'static/js/[name].[contenthash:8].js';
  config.output.chunkFilename = 'static/js/[name].[contenthash:8].chunk.js';
  return config;
};