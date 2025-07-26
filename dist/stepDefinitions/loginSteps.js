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
const cucumber_1 = require("@cucumber/cucumber");
const selenium_webdriver_1 = require("selenium-webdriver");
const testConfig_1 = require("../../config/testConfig"); // if your step file is inside src/steps
(0, cucumber_1.Given)("I am on the login page", function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield this.driver.get(`${testConfig_1.config.baseUrl}/login`);
    });
});
(0, cucumber_1.When)("I enter valid credentials", function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield this.driver.findElement(selenium_webdriver_1.By.id("email")).sendKeys("test@example.com");
        yield this.driver.findElement(selenium_webdriver_1.By.id("password")).sendKeys("password123");
        yield this.driver.findElement(selenium_webdriver_1.By.id("loginButton")).click();
    });
});
(0, cucumber_1.Then)("I should see the homepage", function () {
    return __awaiter(this, void 0, void 0, function* () {
        const title = yield this.driver.getTitle();
        if (!title.includes("Home")) {
            throw new Error("Home page not loaded.");
        }
    });
});
