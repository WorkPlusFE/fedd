const inquirer = require('inquirer');

function consolePrompt(message, choices) {
  const question = {
    message,
    choices,
    type: 'list',
    name: 'repo',
  };
  return inquirer
    .prompt([ question ])
    .then((answers) => {
      return answers.repo;
    });
};

module.exports = consolePrompt;
