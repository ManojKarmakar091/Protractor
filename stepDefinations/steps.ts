import { Given, When, Then } from "cucumber";
import { calculator } from '../pageObjects/calculator';
import { browser } from "protractor";
import { angularHomePage } from '../pageObjects/angularHomePage';
import chai from "chai"
var expect = chai.expect;
let calc = new calculator();
let ah = new angularHomePage()

Given('I will navigate to calc site', async ()=> {
    
   await browser.get('https://juliemr.github.io/protractor-demo/');
  });

  Given('I will navigate to {string} page', async(string)=> {
    
    if(string=="calc")
    {
        await browser.get('https://juliemr.github.io/protractor-demo/');
    }
    else if(string=="Angularjs")
    {
        await browser.get('https://angularjs.org/')
    }
  });

  When('I clicked on header link',  async()=> {
   
    await ah.angularLink.click()
  });

  When('you will navigate to angular page', async ()=> {
   
    console.log("Navigated to new page")
  });

  Then('you will enter {string} on search box', async (string)=> {
    
    await ah.search.sendKeys(string)
  });



  When('I will add two numbers {string} and {string}', async (string, string2)=> {
   
    
    await calc.firstEditBox.sendKeys(string)
    await calc.secondEditBox.sendKeys(string2)
  });

  Then('the output displayed should be {string}', async (string)=> {
   
    await calc.go.click();
   await calc.getResult.getText().then((text) => {

    expect(text).to.equal(string);

    })
  });

  

  