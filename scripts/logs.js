const chalk = require('chalk');

/* eslint-disable no-console */
module.exports = {
  default: msg => console.log(chalk.bold.blue(`${msg}…`)),
  error: msg => console.log(chalk.bold.redBright('👎 ERROR'), msg),
  success: msg =>
    console.log(chalk.bold.greenBright('👍  SUCCESS'), chalk.gray(msg)),
};
