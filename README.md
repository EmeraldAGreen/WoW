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
  
## Installation
You will need to use the following packages: 
[express-handlebars](https://www.npmjs.com/package/express-handlebars) package to implement Handlebars.js for your Views 
[MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect to a MySQL database for Models [express.js](https://www.npmjs.com/package/express) to handle the API for our Controllers.
[dotenv package](https://www.npmjs.com/package/dotenv) to use environment variables
[bcrypt package](https://www.npmjs.com/package/bcrypt) to hash passwords
[express-session](https://www.npmjs.com/package/express-session) and [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) packages to add authentication.

**Note**: The [express-session](https://www.npmjs.com/package/express-session) package stores the session data on the client in a cookie. When you are idle on the site for more than a set time, the cookie will expire and you will be required to log in again to start a new session. This is the default behavior and you do not have to do anything to your application other than implement the npm package.

## Usage
GIVEN a CMS-style workout site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing workout posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing workout posts that include the post title and the date created
WHEN I click on an existing workout post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any workout posts I have already created and the option to add a new workout post
WHEN I click on the button to add a new workout post
THEN I am prompted to enter both a title and contents for my workout post
WHEN I click on the button to create a new workout post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new workout post
WHEN I click on one of my existing workouts in the dashboard
THEN I am able to delete or update my workout and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

## License
This project is licensed under  ISC.
Read more about [ISC](https://opensource.org/licenses/ISC).

## Questions
Find us Github: 
[Emerald Green](https://github.com/EmeraldAGreen)
[Ted Lopus](https://github.com/tedlopus)
[Kevin Durant](https://github.com/kevindur4nt)
[David Warner](https://github.com/1dhwarner)
