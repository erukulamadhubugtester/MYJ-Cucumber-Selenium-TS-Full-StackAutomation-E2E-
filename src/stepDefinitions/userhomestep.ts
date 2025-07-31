import { Given, Then } from "@cucumber/cucumber";
import { performLogin } from "../utils/loginHelper";
import { handleProfilePopupIfPresent } from "../utils/h1_popupHandler";
import { CustomWorld } from "../support/world";
import { Dropdowns_check_home_Page, UserHomePage } from "../pages/userhomepage";
import { By } from "selenium-webdriver";
import { highlightElement } from "../utils/h2_highlightUtils";
import { expect } from "chai";
Given("I am logged in", async function () {
  await performLogin(this.driver);
});

Given("profile popup is closed if shown", async function (this: CustomWorld) {
  await handleProfilePopupIfPresent(this.driver);
});

Then(
  "I should see the {string} message",
  async function (this: CustomWorld, expectedMessage: string) {
    const page = new UserHomePage(this.driver); // ✅ Correct class
    const isVisible = await page.isConnectionMessageDisplayed(expectedMessage);
    expect(isVisible).to.be.true;
  }
);

Then(
  "I should see the age range {string} in the dropdown",
  async function (this: CustomWorld, range: string) {
    const page = new Dropdowns_check_home_Page(this.driver);
    const isVisible = await page.isAgeOptionVisible(range);
    expect(isVisible).to.be.true;
  }
);

Then("I should see the Education dropdown", async function (this: CustomWorld) {
  const page = new Dropdowns_check_home_Page(this.driver);
  const isVisible = await page.isEducationDropdownDisplayed();
  expect(isVisible).to.be.true;
});

Then(
  "I should see the profession input field",
  async function (this: CustomWorld) {
    const page = new Dropdowns_check_home_Page(this.driver);
    const isVisible = await page.isProfessionInputDisplayed();
    expect(isVisible).to.be.true;
  }
);

Then("I should see the Find button", async function (this: CustomWorld) {
  const page = new Dropdowns_check_home_Page(this.driver);
  const isVisible = await page.isFindButtonDisplayed();
  expect(isVisible).to.be.true;
});
