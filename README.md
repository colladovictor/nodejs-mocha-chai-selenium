nodejs-mocha-chai-selenium

The approach of these samples is based on a clean Async/Await approach to await for a promise. This approch is based on the newest implementation of the official selenium-webdriver(webdriverjs). 

added package.json with:

npm init
{fill the form!}

see:
- npm init 
https://docs.npmjs.com/cli/init
- package.json
https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file

This is how I did the additions of my package.json;

e.g. added:

" prod depencencies:

 npm i selenium webdriver --save-prod
 npm i mocha --save-prod
 npm i chai --save-prod

 dev dependencies:
 
 npm i chai-as-promised "

# Based of: WebDriverJs Demo from Alister Scott from "WatirMelon.com".

## Pre-requisites

#### Make sure you can use NVM, otherwise install your own version of Node for your system

`nvm use`

#### Install Dependencies

`npm install`

#### To run the specs

`npm test`


