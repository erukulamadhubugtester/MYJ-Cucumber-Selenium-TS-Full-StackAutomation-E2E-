import { Given, When, Then } from "@cucumber/cucumber";
import dotenv from "dotenv";
import { LoginPage } from "../pages/loginPage";
import assert from "assert";

dotenv.config();

let loginPage: LoginPage;

Given("I am on the landing page", async function () {
  loginPage = new LoginPage(this.driver);
  await loginPage.openLandingPage(process.env.BASE_URL!);
});

When("I click on the login link", async function () {
  await loginPage.clickLoginLink();
});

When("I enter the phone number {string}", async function (label: string) {
  const phone = label === "<secure>" ? process.env.MYJ_PHONE : label;
  if (!phone) throw new Error("Phone number missing");
  await loginPage.enterPhoneNumber(phone);
});

When("I enter the password {string}", async function (label: string) {
  const password = label === "<secure>" ? process.env.MYJ_PASSWORD : label;
  if (!password) throw new Error("Password missing");
  await loginPage.enterPassword(password);
});

When("I click on the continue button", async function () {
  await loginPage.clickContinue();
});

Then("I should see the homepage or profile popup", async function () {
  const isLoggedIn = await loginPage.verifyLoginSuccess();
  assert.strictEqual(isLoggedIn, true, "Login failed: no popup or banner");
});
