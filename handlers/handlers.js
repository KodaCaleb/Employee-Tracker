// handlers.js
const inquirer = require('inquirer');
const prompts = require('../prompts/prompts.js');
const db = require('../db/connection');  // import the database connection

async function handleUserInput() {
    const { choice } = await inquirer.prompt({
        name: "choice",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View All Departments",
            "View All Roles",
            "View All Employees",
            "Add a Department",
            "Add a Role",
            "Add an Employee",
            "Update an Employee Role",
            "Exit",
        ],
    });

    switch (choice) {
        case "View All Departments":
            await prompts.viewAllDepartments();
            break;
        case "View All Roles":
            await prompts.viewAllRoles();
            break;
        case "View All Employees":
            await prompts.viewAllEmployees();
            break;
        case "Add a Department":
            await prompts.addADepartment();
            break;
        case "Add a Role":
            await prompts.addARole();
            break;
        case "Add an Employee":
            await prompts.addAnEmployee();
            break;
        case "Update an Employee Role":
            await prompts.updateEmployeeRole();
            break;
        default:
            return quit();
    }
    return handleUserInput();  // Call the function recursively
}

// Function to handle quit choice
function quit() {
  db.end();  // end the database connection
  console.log("\n Goodbye!");
  process.exit();
}

async function init() {
    console.log("Welcome to the Employee Tracker");
    await handleUserInput();
}

module.exports = { init };
