import path from 'path';
import { fileURLToPath } from 'url';
import { globSync } from 'glob';
import { merge } from 'webpack-merge';
import TerserPlugin from 'terser-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import { PurgeCSSPlugin } from 'purgecss-webpack-plugin';
import baseConfig from './webpack.base.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '../..');

const prodConfig = {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 2015,          // lets Terser use modern, more compact syntax
          module: true,
          compress: {
            passes: 2,          // run the compressor twice for smaller output
            drop_console: true, // strip console.* calls in prod
            pure_funcs: ['console.debug'],
          },
          mangle: {
            safari10: true,
          },
          format: {
            comments: false,   // drop comments instead of moving to *.LICENSE.txt
          },
        },
        extractComments: false,
      }),
      new CssMinimizerPlugin({
        parallel: true,
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true },
              mergeRules: true,
              normalizeWhitespace: true,
            },
          ],
        },
      }),
    ],
  },
  plugins: [
    // NOTE: MiniCssExtractPlugin is already instantiated in webpack.base.js
    // (with contenthash enabled there for prod) — do not add a second
    // instance here, webpack-merge would concatenate them and you'd get
    // duplicate/conflicting CSS output.
    new PurgeCSSPlugin({
      paths: globSync(`${path.join(projectRoot, 'src')}/**/*`, { nodir: true }),
      // Add patterns here for any classes added dynamically at runtime
      // (e.g. via JS toggling, Vue :class bindings resolved at runtime,
      // third-party components).
      safelist: [/^is-/, /^has-/],
    }),
  ],
};

export default merge(baseConfig, prodConfig);