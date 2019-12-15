// const assert = require('assert');
// const webdriver = require('selenium-webdriver');
// const chrome = require('chromedriver');
// const {Builder, By, Key, until} = require('selenium-webdriver');
// // const test = require('selenium-webdriver/testing');
// const mochaTimeOut = 30000; //ms
 
// // var By = require('selenium-webdriver').By,
// //           until = require('selenium-webdriver').until,
// //           firefox = require('selenium-webdriver/firefox'),
// //           test = require('selenium-webdriver/testing');

// // var firefox = require('selenium-webdriver/firefox');

// describe('test - specs sample test', async function() {
//   this.timeout(mochaTimeOut);

//   it('test 1 - specs',async function() {
//     const driver = await new webdriver.Builder()
//     .forBrowser('chrome')
//     .setFirefoxOptions( /* … */)
//     .setChromeOptions( /* … */)
//     .build();

//     await driver.get('https://google.com');
//     let hplogopresent = await driver.findElement(By.id('SIvCob')).getText();
//     await driver.findElement(By.css('.gLFyf')).sendKeys('This is a fake test dude!');
//     // change this equal code, if the country is changed
//     assert.equal(hplogopresent, 'Google angeboten auf: English Français Italiano Rumantsch' , "Google offers appear!");
    
//     await driver.quit();
//   });
// });