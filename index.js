const inquirer = require('inquirer')
const fs = require('fs')

// function to initialize program
function init() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        messsage: 'A short description of your project',
      },
      {
        type: 'input',
        name: 'tableOfContents',
        message: 'Section headers to list as a table of contents?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Any special requirements/tips for installation?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Usage stipulations?',
      },
      {
        type: 'input',
        name: 'license',
        message: 'License information?',
      },
      {
        type: 'input',
        name: 'contributors',
        message: 'Other contributors?',
      },
      {
        type: 'input',
        name: 'testing',
        message: 'Test instructions?',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'GitHub account to direct questions to',
      },
    ])
    .then((data) => {
      fs.writeFile('README.md', JSON.stringify(data, null, '\t'), (err) =>
        err ? console.log(err) : console.log('Success!')
      )
  })
}

// function call to initialize program
init();
