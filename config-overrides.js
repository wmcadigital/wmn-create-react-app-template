// config-overrides.js

const SassLintPlugin = require('sass-lint-webpack');

module.exports = {
  webpack(config, env) {
    if (env === 'development') {
      config.plugins.push(
        new SassLintPlugin({
          // options here
        })
      );
    }

    return config;
  },
  // jest: function(config) {
  //   // customize jest here
  //   return config;
  // },
  // devServer: function(configFunction) {
  //   return function(proxy, host) {
  //     // customize devServer config here
  //     return config;
  //   }
  // }
};
