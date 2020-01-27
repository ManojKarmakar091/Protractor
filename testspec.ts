
import { browser, element, by, By, $, $$, ExpectedConditions } from 'protractor';
import { calculator } from './pageObjects/calculator';
import { angularHomePage } from './pageObjects/angularHomePage';


describe('angularjs homepage todo list', () => {
  it('should add a todo', async () => {

    let calc = new calculator();

    browser.get('https://juliemr.github.io/protractor-demo/');

    await calc.firstEditBox.sendKeys("3")
    await calc.secondEditBox.sendKeys("5")
    await calc.go.click();
    calc.getResult.getText().then((text) => {

      console.log(text);

    })
  });

  it('Angular home page title validation', async () => {
    let ah = new angularHomePage()

    await browser.get('https://angularjs.org/')
    await ah.angularLink.click()
    await ah.search.sendKeys("hello")

  })

});