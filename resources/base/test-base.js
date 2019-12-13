var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var firefox = require('selenium-webdriver/firefox');
 
var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .setFirefoxOptions( /* … */)
    .setChromeOptions( /* … */)
    .build();