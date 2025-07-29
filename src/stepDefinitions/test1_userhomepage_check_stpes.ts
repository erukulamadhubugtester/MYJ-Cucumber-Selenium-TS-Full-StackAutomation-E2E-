import { By, until } from "selenium-webdriver";
import { Given, When, Then } from "@cucumber/cucumber";
import assert from "assert";
import { highlightElement } from "../utils/h2_highlightUtils";

// // ✅ Step 1: Navigate to landing page
// Given("I am on the landing page", { timeout: 20000 }, async function () {
//   await this.driver.get(process.env.BASE_URL || "https://makeyourjodi.com");
//   await this.driver.wait(
//     until.elementLocated(By.css("a[href='/login']")),
//     10000
//   );
// });

// ✅ Step 2: Verify homepage header text
Then("I should see the homepage header text", async function () {
  const header = await this.driver.wait(
    until.elementLocated(By.css("h1.text-2xl")), // update selector based on your app
    5000
  );
  await highlightElement(this.driver, header);
  const isDisplayed = await header.isDisplayed();
  assert.strictEqual(isDisplayed, true);
  const text = await header.getText();
  console.log("✅ Header found:", text);
});

// ✅ Step 3: Highlight homepage banner
Then("highlight the homepage banner", async function () {
  const banner = await this.driver.wait(
    until.elementLocated(By.css('img[alt="banner"]')),
    5000
  );
  await highlightElement(this.driver, banner);
  const isVisible = await banner.isDisplayed();
  assert.strictEqual(isVisible, true);
  console.log("✅ Homepage banner highlighted");
});
