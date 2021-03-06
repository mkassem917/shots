# Vax-Track
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

This app is designed to assist people signing up for their COVID-19 vaccine. There is a sign up page for the user to input their information, including name, email, state of residence as well as verifying their age and if they are an essential worker. This information is then stored in a database. After the user is signed up, they are taken to a page that displays their state's statistics concerning COVID-19. If the user is eligible for the vaccine, there will be an embedded map with the closest vaccine clinic.


## Table of Contents

* [Directory Structure](#directory-structure) 

* [Deployed-Sites](#deployed-site)

* [Screenshots](#screenshots)

* [Installation](#installation) 
 
* [Usage](#usage) 
 
* [License](#license) 
 
* [Contribution-Guidelines](#contribution-guidelines) 
 
* [Contributors](#contributors) 
 
* [Questions](#questions) 


## Directory structure
```
SHOTS.
├── config
│   ├── config.json
│ 
├── db
│   ├── schema.sql
│   └── userseeds.sql
│
├── models
│   ├── index.js
│   └── user.js
│ 
├── node_modules
│ 
├── public
│   └── assets
│      ├── img
│      │   └── favicon.png
│      │   └── five.png
│      │   └── four.png
│      │   └── one.png
│      │   └── stopthespread.png
│      │   └── twothree.png
│      │   └── vaxynepng.png
│      │   └── zero.png
│      └── js
│      │   └── geo-location.js
│      │   └── returninguser.js
│      │   └── signup.js
│      └── stylesheets
│          └── style.css
│
├── models
│   ├── api-routes.js
│   └── html-routes.js
│   
├── views
│   └── layouts
│         └── main.handlebars
│   └── partials
│         └── map-block.handlebars
│         └── shots-block.handlebars
│   ├── index.handlebars
│   └── returninguser.handlebars
│   └── userdata.handlebars
│   └── vaccinedata.handlebars
│
├── .eslintrc.json
├── .gitignore
├── .travis.yml
├── access log
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
├── server.js
│
```
## Heroku 

[Link to Heroku App](https://vaccine-app-project2.herokuapp.com/)

## GitHub Repository 

[Link to GitHub](https://github.com/mkassem917/shots.git)

## Screenshots

![Screenshot 1](public/assets/img/sshome.png)
![Screenshot 2](public/assets/img/ssreturn.png)
![Screenshot 3](public/assets/img/ssspread.png)
![Screenshot 4](public/assets/img/ssstate.png)
![Screenshot 5](public/assets/img/ssshot.png)


## Installation
To install dependencies, run the following command(s):

npm install

## Usage

Use this app to keep tracking of people looking to get vaccinated and to stay up to day on the latest COVID-19 trends for your state.

This app also utilizes Morgan. Morgan is a http request tracker. It currently logs every http request with the status, response time, and what operating system the user utilizes. 

## License

This project is licensed under the terms of the MIT license.

## Contribution-Guidelines

If you wish to contribute. Please refer to the following guidelines:
[Contributor Covenant](https://www.contributor-covenant.org/)

## Contributors

[duffieldml](https://github.com/duffieldml)
[ross1jk](https://github.com/ross1jk) 
[mkassem917](https://github.com/mkassem917) 
[vshulman25](https://github.com/vshulman25) 

## Questions

If you have any questions regarding the repo, application, or issues you are experiencing, please email
the following:
[duffieldml@gmail.com](mailto:duffieldml@gmail.com)
