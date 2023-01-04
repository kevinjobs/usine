const path = require('path');

module.exports = {
  webpack: function(config, env) {
    return config;
  },
  devServer: function(configFunction) {
    return function(proxy, allowedHost) {
      return configFunction(proxy, allowedHost);
    }
  },
  paths: function(paths, env) {
    if (env === 'development') {
      paths.appSrc = path.join(__dirname, '../../');
      return paths;
    }
  }
}
