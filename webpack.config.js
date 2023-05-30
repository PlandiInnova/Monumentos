const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  // Resto de la configuración de Webpack...
  optimization: {
    minimize: false, // Deshabilitar la minificación
  },
  resolve: {
    fallback: {
      "fs": false,
      "path": require.resolve("path-browserify")
    }
  }
};

