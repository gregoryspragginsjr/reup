import path from 'path';
import { fileURLToPath } from 'url';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import autoprefixer from 'autoprefixer';
import WebpackNotifierPlugin from 'webpack-notifier';
import SassLintPlugin from 'sass-lint-webpack';
import { VueLoaderPlugin } from 'vue-loader';
import webpack from 'webpack';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '../..');

const isProd = process.env.NODE_ENV === 'production';

export default {
  mode: 'development',

  // 'eval-source-map' in dev: fast rebuilds, full original source in devtools.
  // 'source-map' in prod: separate .map files, doesn't bloat the JS bundle
  // itself, and works with error-tracking tools (Sentry etc). Terser and
  // css-minimizer both pick this up automatically and preserve mappings
  // through minification — no extra config needed on those.
  devtool: isProd ? 'source-map' : 'eval-source-map',

  context: projectRoot,

  entry: {
    scripts: [
        './src/index.ts',
    ],
  },

  output: {
    filename: '[name].js',
    path: path.resolve(projectRoot, 'dist'),
  },

  resolve: {
    extensions: ['.ts', '.js', '.vue'],
    alias: {
      styles: path.resolve(projectRoot, 'src/styles'),
      variables: path.resolve(projectRoot, 'src/styles/global/_variables.scss'),
      typography: path.resolve(projectRoot, 'src/styles/utilities/_typography.scss'),
      images: path.resolve(projectRoot, 'src/images'),
      videos: path.resolve(projectRoot, 'src/videos'),
      components: path.resolve(projectRoot, 'src/twig/components'),
    },
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
              transpileOnly: true,
              compilerOptions: {
                sourceMap: true,
              },
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              sourceMaps: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: { 
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [autoprefixer],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                silenceDeprecations: [
                  'color-functions',
                  'global-builtin',
                  'import',
                  'legacy-js-api',
                  'mixed-decls',
                  'abs-percent',
                  'slash-div'
                ],
              }
            },
          },
        ],
      },
      {
        test: /fonts\/.*\.(eot|svg|ttf|woff|woff2|otf)$/,
        type: 'asset/resource',
        exclude: /node_modules/,
      },
      {
        test: /images\/.*\.(png|svg|jpg|gif)$/,
        type: 'asset/resource',
        exclude: /node_modules/,
      },
      {
        test: /videos\/.*\.(mp4)$/,
        type: 'asset/resource',
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      // Content-hashed filename in prod for long-term caching; plain
      // name in dev so filenames stay stable across rebuilds.
      filename: isProd ? 'styles/[name].[contenthash:8].css' : 'styles/[name].css',
    }),
    new WebpackNotifierPlugin({
      title: 'Theme',
      alwaysNotify: true,
    }),
    new SassLintPlugin(),
    new webpack.ProvidePlugin({
      ref: ['vue', 'ref'],
      computed: ['vue', 'computed'],
      onMounted: ['vue', 'onMounted'],
    }),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: JSON.stringify(true),
      __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false),
    }),
  ],
};