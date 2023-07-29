# Employee Tracker

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

Employee Tracker is a command-line application that enables business owners to view and manage their company's departments, roles, and employees. This application was developed using Node.js, Inquirer, and MySQL.

As a business owner, you can organize and plan your business by easily interacting with the information stored in the database. You can view all departments, roles, and employees, add a department, add a role, add an employee, and update an employee role.

## Table of Contents

1. [Installation](#Installation)
2. [Usage](#Usage)

## Installation

To install the necessary dependencies, run the following command:

```
npm install
```

this will install the following dependencies:
MySQL2
Inquirer
dotenv

after installing the packages you will then need to create a .env file in the root directory of the application. Inside the .env file you will need to add the following:

```

MYSQL_PW=yourpassword
```

you will then need to run the schema.sql file in MySQL Workbench to create the database and tables. After creating the database and tables you will then need to run the seed.sql file in MySQL Workbench to populate the tables with data.


## Usage

here is a link to the video demonstrating the application's functionality:

[Video Walkthrough](https://drive.google.com/file/d/1sTm-5Z27K9DvNg9s_rM9RTCMnntqlT2g/view)



