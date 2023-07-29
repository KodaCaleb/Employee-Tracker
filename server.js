const inquirer = require('./lib/prompts');
const dbQueries = require('./lib/queries');

const init = async () => {
  let exit = false;

  while (!exit) {
    const { action } = await inquirer.mainMenu();

    switch (action) {
      case 'View all departments':
        const departments = await dbQueries.viewAllDepartments();
        console.table(departments);
        break;
      // ... handle other actions
      case 'Exit':
        exit = true;
        break;
    }
  }
};

init();
