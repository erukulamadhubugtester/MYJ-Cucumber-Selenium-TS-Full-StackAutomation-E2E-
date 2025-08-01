import { Given, Then } from "@cucumber/cucumber";
import { performLogin } from "../utils/loginHelper";
import { handleProfilePopupIfPresent } from "../utils/h1_popupHandler";
import { CustomWorld } from "../support/world";
import {
  Dropdowns_check_home_Page,
  Profiles_which_match_your_preferences,
  UserHomePage,
} from "../pages/userhomepage";
import { expect } from "chai";
import assert from "assert";

Given("I am logged in", async function (this: CustomWorld) {
  try {
    console.log("🔐 Logging in...");
    await performLogin(this.driver);
    console.log("✅ Login successful.");
  } catch (error) {
    console.error("❌ Login failed.");
    throw error;
  }
});

Given("profile popup is closed if shown", async function (this: CustomWorld) {
  try {
    console.log("📌 Checking for profile popup...");
    await handleProfilePopupIfPresent(this.driver);
    console.log("✅ Profile popup handled.");
  } catch (error) {
    console.error("❌ Error handling profile popup.");
    throw error;
  }
});

Then(
  "I should see the {string} message",
  async function (this: CustomWorld, expectedMessage: string) {
    try {
      console.log(`🔍 Checking message: "${expectedMessage}"`);
      const page = new UserHomePage(this.driver);
      const isVisible = await page.isConnectionMessageDisplayed(
        expectedMessage
      );
      expect(isVisible, `Expected message not visible: "${expectedMessage}"`).to
        .be.true;
      console.log("✅ Message found and visible.");
    } catch (error) {
      console.error("❌ Error validating connection message.");
      throw error;
    }
  }
);

Then(
  "I should see the age range {string} in the dropdown",
  async function (this: CustomWorld, range: string) {
    try {
      console.log(`🔍 Checking age range dropdown for: "${range}"`);
      const page = new Dropdowns_check_home_Page(this.driver);
      const isVisible = await page.isAgeOptionVisible(range);
      expect(isVisible, `Age range not found: "${range}"`).to.be.true;
      console.log("✅ Age range option visible.");
    } catch (error) {
      console.error("❌ Error checking age range dropdown.");
      throw error;
    }
  }
);

Then("I should see the Education dropdown", async function (this: CustomWorld) {
  try {
    console.log("🔍 Checking Education dropdown...");
    const page = new Dropdowns_check_home_Page(this.driver);
    const isVisible = await page.isEducationDropdownDisplayed();
    expect(isVisible, "Education dropdown not visible").to.be.true;
    console.log("✅ Education dropdown is visible.");
  } catch (error) {
    console.error("❌ Error checking Education dropdown.");
    throw error;
  }
});

Then(
  "I should see the profession input field",
  async function (this: CustomWorld) {
    try {
      console.log("🔍 Checking profession input...");
      const page = new Dropdowns_check_home_Page(this.driver);
      const isVisible = await page.isProfessionInputDisplayed();
      expect(isVisible, "Profession input not visible").to.be.true;
      console.log("✅ Profession input is visible.");
    } catch (error) {
      console.error("❌ Error checking profession input.");
      throw error;
    }
  }
);

Then("I should see the Find button", async function (this: CustomWorld) {
  try {
    console.log("🔍 Checking Find button...");
    const page = new Dropdowns_check_home_Page(this.driver);
    const isVisible = await page.isFindButtonDisplayed();
    expect(isVisible, "Find button not visible").to.be.true;
    console.log("✅ Find button is visible.");
  } catch (error) {
    console.error("❌ Error checking Find button.");
    throw error;
  }
});

Then(
  "I should see and highlight the {string} title",
  async function (this: CustomWorld, expectedText: string) {
    const homePage = new Profiles_which_match_your_preferences(this.driver);
    const element = await homePage.getTitleElement();
    const actualText = await homePage.getTitleText();

    // Log before assertion
    console.log(
      `✅ Checking if "${actualText.trim()}" includes "${expectedText}"`
    );

    // Normalize whitespaces and compare
    const cleanedText = actualText.replace(/\s+/g, " ").trim();
    const cleanedExpected = expectedText.replace(/\s+/g, " ").trim();

    // Assert
    assert.ok(
      cleanedText.includes(cleanedExpected),
      `❌ Expected title: "${cleanedExpected}", but got: "${cleanedText}"`
    );

    await homePage.highlightElement(element);
    console.log("🎯 Title found and highlighted.");
  }
);
