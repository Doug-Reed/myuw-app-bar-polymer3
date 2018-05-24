const path = require('path');

module.exports = {
    entry: ['./myuw-app-bar.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // mode: 'production',
    mode: 'development',
    devServer: {
      allowedHosts: ['reed-mac']
    }
};
