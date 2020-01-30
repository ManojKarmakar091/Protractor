"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const cucumber_1 = require("cucumber");
var { After, Before } = require('cucumber');
var { setDefaultTimeout } = require('cucumber');
Before({ tags: "@SanityTesting" }, function () {
    protractor_1.browser.manage().window().maximize();
});
After({ tags: "@SanityTesting" }, function () {
    console.log("Test completed for Sanity Testing");
});
Before({ tags: "@SmokeTesting" }, function () {
    protractor_1.browser.manage().window().maximize();
});
After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Test is completed ");
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, "image/png");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBcUM7QUFFckMsdUNBQWtDO0FBRWxDLElBQUksRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzFDLElBQUksRUFBRSxpQkFBaUIsRUFBRSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUdoRCxNQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUMsRUFBRTtJQUVqQyxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBRXJDLENBQUMsQ0FBQyxDQUFDO0FBR0gsS0FBSyxDQUFDLEVBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFDLEVBQUU7SUFFNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBRWhELENBQUMsQ0FBQyxDQUFDO0FBRVAsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBQyxFQUFFO0lBQzVCLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDdkMsQ0FBQyxDQUFDLENBQUM7QUFFTCxLQUFLLENBQUUsVUFBZ0IsUUFBUTs7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO1FBRWpDLElBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUcsaUJBQU0sQ0FBQyxNQUFNLEVBQUM7WUFFMUMsTUFBTSxVQUFVLEdBQUksTUFBTSxvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ25ELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ3BDO0lBQ0QsQ0FBQztDQUFBLENBQUMsQ0FBQyJ9