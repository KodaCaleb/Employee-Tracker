const inquirer = require('inquirer');
const db = require('../db/connection');

async function viewAllDepartments() {
    const [departments] = await db.query('SELECT * FROM department');
    console.log(departments);
}

async function viewAllRoles() {
    const [roles] = await db.query('SELECT * FROM role');
    console.log(roles);
}

async function viewAllEmployees() {
    const [employees] = await db.query('SELECT * FROM employee');
    console.log(employees);
}

async function addADepartment() {
  const { departmentName } = await inquirer.prompt({
      type: "input",
      name: "departmentName",
      message: "Enter a new department name:",
  });
  await db.query('INSERT INTO department (table_name) VALUES (?)', departmentName);
}


async function addARole() {
    const { roleTitle, roleSalary, roleDepartment } = await inquirer.prompt([
        {
            type: "input",
            name: "roleTitle",
            message: "Add a new role title:",
        },
        {
            type: "input",
            name: "roleSalary",
            message: "Enter a salary:",
        },
        {
            type: "input",
            name: "roleDepartment",
            message: "Add a department ID for this role:",
        },
    ]);
    await db.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [roleTitle, roleSalary, roleDepartment]);
}

async function addAnEmployee() {
    const { firstName, lastName, role, manager } = await inquirer.prompt([
        {
            type: "input",
            name: "firstName",
            message: "Enter the employee's first name:",
        },
        {
            type: "input",
            name: "lastName",
            message: "Enter the employee's last name:",
        },
        {
            type: "input",
            name: "role",
            message: "Enter the employee's role ID:",
        },
        {
            type: "input",
            name: "manager",
            message: "Enter the employee's manager ID (leave blank if none):",
        },
    ]);
    await db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [firstName, lastName, role, manager || null]);
}

async function updateEmployeeRole() {
    const { employeeId, newRole } = await inquirer.prompt([
        {
            type: "input",
            name: "employeeId",
            message: "Enter the ID of the employee whose role you want to update:",
        },
        {
            type: "input",
            name: "newRole",
            message: "Enter the new role ID for this employee:",
        },
    ]);
    await db.query('UPDATE employee SET role_id = ? WHERE id = ?', [newRole, employeeId]);
}

module.exports = {
    viewAllDepartments,
    viewAllRoles,
    viewAllEmployees,
    addADepartment,
    addARole,
    addAnEmployee,
    updateEmployeeRole,
};
