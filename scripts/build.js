const fs = require('fs-extra');
const { execSync } = require('child_process');
const log = require('./logs');

process.on('unhandledRejection', err => {
  throw err;
});

const exec = (command, extraEnv) =>
  execSync(command, {
    stdio: 'inherit',
    env: Object.assign({}, process.env, extraEnv),
  });

log.default('Cleaning packages');
fs.emptyDirSync('lib');
log.success('Packages cleaned');

log.default('Compiling packages');
exec('rollup -c');
log.success('Packages compiled');

log.default('Copying files');
fs.copySync('index.d.ts', 'lib/index.d.ts');
exec('copyfiles -f "./src/*.css" lib');
log.success('Files copied');
