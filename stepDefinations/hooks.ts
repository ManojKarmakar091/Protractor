import { browser } from "protractor";
import { STATUS_CODES } from "http";
import { Status } from "cucumber";

var {After, Before} = require('cucumber');
var { setDefaultTimeout } = require('cucumber');


Before({tags: "@SanityTesting"}, function () {
  
browser.manage().window().maximize();

});


After({tags: "@SanityTesting"}, function () {
    
    console.log("Test completed for Sanity Testing")
    
    });

Before({tags: "@SmokeTesting"}, function () {
    browser.manage().window().maximize();
  });

After( async function (scenario) {
    console.log("Test is completed ")

    if(scenario.result.status===Status.FAILED){

    const screenshot=   await browser.takeScreenshot();
    this.attach(screenshot, "image/png");
    }
    });