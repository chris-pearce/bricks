const chalk = require('chalk');

const divider = chalk.hex('#CCCCCC')(
  '⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤\n'
);

/* eslint-disable no-console */
module.exports = {
  default: msg => console.log(divider, chalk.bold.blue(`${msg}…`)),
  error: msg =>
    console.log(chalk.bold.redBright('👎 ERROR'), msg, `\n${divider}`),
  success: msg =>
    console.log(
      chalk.bold.greenBright('👍  SUCCESS'),
      chalk.gray(msg),
      `\n${divider}`
    ),
};
