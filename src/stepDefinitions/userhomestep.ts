import { Given, Then } from "@cucumber/cucumber";
import { performLogin } from "../utils/loginHelper";
import { handleProfilePopupIfPresent } from "../utils/h1_popupHandler";
import { getDriver } from "../support/browserManager";
import { CustomWorld } from "../support/world"; // update path as needed
import { UserHomePage } from "../pages/userhomepage";
import { By } from "selenium-webdriver";
import { highlightElement } from "../utils/h2_highlightUtils";
Given("I am logged in", async function () {
  await performLogin(this.driver); // ✅ Pass the correct driver
});

Given("profile popup is closed if shown", async function (this: CustomWorld) {
  await handleProfilePopupIfPresent(this.driver);
});

Then(
  "I should see the {string} message",
  async function (this: CustomWorld, expectedMessage: string) {
    const heading = await this.driver.findElement(
      By.xpath(`//h1[contains(text(),"${expectedMessage}")]`)
    );

    await highlightElement(this.driver, heading);

    const isVisible = await heading.isDisplayed();
    if (!isVisible) {
      throw new Error(`Expected message "${expectedMessage}" was not visible`);
    }
  }
);
