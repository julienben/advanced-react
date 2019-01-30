// Important modules this config uses
const path = require('path');
const fs = require('fs');
const cheerio = require('cheerio');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HashedModuleIdsPlugin } = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

// Minify and optimize the index.html
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  // template: 'app/index.html',
  templateContent: templateContent(), // eslint-disable-line no-use-before-define
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    removeRedundantAttributes: true,
    useShortDoctype: true,
    removeEmptyAttributes: true,
    removeStyleLinkTypeAttributes: true,
    keepClosingSlash: true,
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true,
  },
  inject: true,
});

const hashedModuleIdsPlugin = new HashedModuleIdsPlugin({
  hashFunction: 'sha256',
  hashDigest: 'hex',
  hashDigestLength: 20,
});

module.exports = require('./webpack.base.babel')({
  mode: 'production',

  entry: path.join(process.cwd(), 'app/app.js'),

  // Utilize long-term caching by adding content hashes (not compilation hashes) to compiled assets
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          warnings: false,
          compress: {
            comparisons: false,
          },
          parse: {},
          mangle: true,
          output: {
            comments: false,
            ascii_only: true,
          },
        },
        parallel: true,
        cache: true,
        sourceMap: true,
      }),
    ],
    nodeEnv: 'production',
    sideEffects: true,
    concatenateModules: true,
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true,
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
        main: {
          chunks: 'all',
          minChunks: 2,
          reuseExistingChunk: true,
          enforce: true,
        },
      },
    },
    runtimeChunk: true,
  },

  plugins: [htmlWebpackPlugin, hashedModuleIdsPlugin],

  styleLoaders: [
    {
      loader: 'style-loader',
    },
    {
      loader: 'css-loader',
      options: {
        modules: 'local',
        importLoaders: 1,
        localIdentName: '[hash:base64:8]',
      },
    },
    {
      loader: 'postcss-loader',
    },
  ],

  performance: {
    assetFilter: assetFilename =>
      !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
  },
});

/**
 * Here we can dynamically add any analytics code to the HTML content on build
 */
function templateContent() {
  const html = fs
    .readFileSync(path.resolve(process.cwd(), 'app/index.html'))
    .toString();
  const $ = cheerio.load(html);

  return $.html().toString();
}
