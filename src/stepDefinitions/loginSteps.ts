import { Given, When, Then } from "@cucumber/cucumber";
import { By, until } from "selenium-webdriver";
import { driver } from "../support/browserManager";
import assert from "assert";

Given("I am on the landing page", { timeout: 20000 }, async function () {
  await this.driver.get("https://makeyourjodi.com"); // Replace with real URL
  await this.driver.wait(
    until.elementLocated(By.css("a[href='/login']")),
    10000
  ); // Adjust selector
});

When("I click on the login link", async () => {
  const loginLink = await driver.wait(
    until.elementLocated(By.css('a[href="/login"]')),
    5000
  );
  await loginLink.click();
});

When("I enter the phone number {string}", async (phone: string) => {
  const phoneInput = await driver.wait(
    until.elementLocated(By.css('input[type="tel"]')),
    5000
  );
  await phoneInput.clear();
  await phoneInput.sendKeys(phone);
});

When("I enter the password {string}", async (password: string) => {
  const passwordInput = await driver.wait(
    until.elementLocated(By.css("input#password")),
    5000
  );
  await passwordInput.sendKeys(password);
});

When("I click on the continue button", async () => {
  const continueBtn = await driver.wait(
    until.elementLocated(By.css("button.submit-buttonlogin")),
    5000
  );
  await continueBtn.click();
});

Then("I should see the homepage", { timeout: 20000 }, async () => {
  const expectedElement = await driver.wait(
    until.elementLocated(By.css('img[alt="banner"]')),
    10000
  );

  const isDisplayed = await expectedElement.isDisplayed();
  assert.strictEqual(isDisplayed, true);
});
