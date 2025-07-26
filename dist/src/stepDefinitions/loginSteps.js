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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const selenium_webdriver_1 = require("selenium-webdriver");
const browserManager_1 = require("../support/browserManager");
const assert_1 = __importDefault(require("assert"));
(0, cucumber_1.Given)("I am on the landing page", () => __awaiter(void 0, void 0, void 0, function* () {
    yield browserManager_1.driver.get("https://uat2.makeyourjodi.com/"); // Replace with actual URL
}));
(0, cucumber_1.When)("I click on the login link", () => __awaiter(void 0, void 0, void 0, function* () {
    const loginLink = yield browserManager_1.driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.css('a[href="/login"]')), 5000);
    yield loginLink.click();
}));
(0, cucumber_1.When)("I enter the phone number {string}", (phone) => __awaiter(void 0, void 0, void 0, function* () {
    const phoneInput = yield browserManager_1.driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.css('input[type="tel"]')), 5000);
    yield phoneInput.clear();
    yield phoneInput.sendKeys(phone);
}));
(0, cucumber_1.When)("I enter the password {string}", (password) => __awaiter(void 0, void 0, void 0, function* () {
    const passwordInput = yield browserManager_1.driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.css("input#password")), 5000);
    yield passwordInput.sendKeys(password);
}));
(0, cucumber_1.When)("I click on the continue button", () => __awaiter(void 0, void 0, void 0, function* () {
    const continueBtn = yield browserManager_1.driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.css("button.submit-buttonlogin")), 5000);
    yield continueBtn.click();
}));
(0, cucumber_1.Then)("I should see the homepage", () => __awaiter(void 0, void 0, void 0, function* () {
    const expectedElement = yield browserManager_1.driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.css("your-homepage-element-selector")), 10000);
    const isDisplayed = yield expectedElement.isDisplayed();
    assert_1.default.strictEqual(isDisplayed, true);
}));
