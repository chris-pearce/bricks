const test = process.env.NODE_ENV === 'test';

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: test ? 'commonjs' : false,
        loose: true,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-object-rest-spread',
    [
      'transform-react-remove-prop-types',
      {
        removeImport: true,
      },
    ],
    [
      'babel-plugin-module-resolver',
      {
        root: ['.'],
        alias: {
          sandbox: './sandbox',
          packages: './packages',
        },
      },
    ],
  ].filter(Boolean),
};
