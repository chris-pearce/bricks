const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const replace = require('rollup-plugin-replace');
const commonjs = require('rollup-plugin-commonjs');
const { uglify } = require('rollup-plugin-uglify');
const { camelCase, upperFirst } = require('lodash');

const extensions = ['.ts', '.tsx', '.js', '.jsx', '.json'];
const sharedPlugins = [
  babel({
    extensions,
    exclude: ['node_modules/**', '../../node_modules/**'],
  }),
  resolve(),
];
const umdPlugins = umd =>
  umd && [
    commonjs({ include: /node_modules/ }),
    uglify(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ];

const createConfig = ({ output, umd = false, pkg } = {}) => ({
  input: 'src/index.js',
  output,
  external: [
    ...Object.keys(umd ? {} : pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [...sharedPlugins, umdPlugins(umd)],
});

const config = pkg => [
  createConfig({
    pkg,
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
  }),
  createConfig({
    pkg,
    umd: true,
    output: {
      file: pkg.umd,
      format: 'umd',
      globals: {
        bricks: 'Bricks',
        react: 'React',
        'react-dom': 'ReactDOM',
      },
      name: upperFirst(camelCase(pkg.name)),
    },
  }),
];

module.exports = config;
