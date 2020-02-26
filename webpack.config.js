module.exports = {
  mode: 'development',
  module: {
    rules: [{
      test: /\.styl$/,
      use: ['style-loader', { loader: 'css-loader', }, {
        loader: 'stylus-loader',
        options: {
          use: [require('nib')()],
          import: [
            '~nib/lib/nib/index.styl',  /* OFFENDING LINE This causes the error: Failed to @extend $overlay */
            '~bulma-stylus/bulma.styl',
          ],
        }
      }]
    }]
  }
}
