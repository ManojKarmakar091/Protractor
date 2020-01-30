import { Config } from 'protractor';

import * as reporter from 'cucumber-html-reporter'
export let config: Config = {

  //seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
    browserName: 'chrome'
  },
  specs: ['../features/demo.feature'],
  onComplete: () => {
 
 
    var options = {
      theme: 'bootstrap',
      jsonFile: './cucumberreport.json',
      output: './cucumber_report.html',
      reportSuiteAsScenarios: true,
      scenarioTimestamp: true,
      launchReport: true,
      metadata: {
        "App Version": "0.3.2",
        "Test Environment": "QA 6.42",
        "Browser": "Chrome  54.0.2840.98",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Remote"
      }
    };

    reporter.generate(options);
  },
  cucumberOpts: {
   
    //tags: "@CalculatorTesting",
    format: 'json:./cucumberreport.json',
    
    require: [
      './stepDefinations/*.js' // accepts a glob
    ]
  }
 
};