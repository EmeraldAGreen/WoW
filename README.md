# WoW
World of Workouts --DU Coding Camp Project 2
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

# WoW: World of Workouts

## Description
This is a content management system (CMS) style site, where users can publish their workouts, comment on other user's workouts, and view workouts. This app is deployed to Heroku and follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions) 
  
## Deployed Application Link


## Installation
You will need to use the following packages: 
[express-handlebars](https://www.npmjs.com/package/express-handlebars) package to implement Handlebars.js for your Views 
[MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect to a MySQL database for Models [express.js](https://www.npmjs.com/package/express) to handle the API for our Controllers.
[dotenv package](https://www.npmjs.com/package/dotenv) to use environment variables
[bcrypt package](https://www.npmjs.com/package/bcrypt) to hash passwords
[express-session](https://www.npmjs.com/package/express-session) and [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) packages to add authentication.

**Note**: The [express-session](https://www.npmjs.com/package/express-session) package stores the session data on the client in a cookie. When you are idle on the site for more than a set time, the cookie will expire and you will be required to log in again to start a new session. This is the default behavior and you do not have to do anything to your application other than implement the npm package.

## Usage
When you visit the site for the first time, you will be presented with the homepage. You are given the option to sign up or log in. Once you have logged in, you can view your "My workouts" tab, which includes existing workout posts if any have been posted. Using the navigation links, you can go to the "Dashboard". When you visit the "Dashboard" option, you are presented with any workout posts that have been created by other users, and the comments saved to those posts. From the dashboard, you can choose to add a new workout post, and you will be prompted to enter the title, contents, and tags for your workout. When you click "Logout", you will be signed out of the site. 

## License
This project is licensed under  ISC.
Read more about [ISC](https://opensource.org/licenses/ISC).

## Questions
Find us Github: 
[Emerald Green](https://github.com/EmeraldAGreen)

[Ted Lopus](https://github.com/tedlopus)

[Kevin Durant](https://github.com/kevindur4nt)

[David Warner](https://github.com/1dhwarner)
