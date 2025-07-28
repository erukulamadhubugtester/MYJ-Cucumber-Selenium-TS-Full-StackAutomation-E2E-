import { Given, When, Then } from "@cucumber/cucumber";
import { By, until } from "selenium-webdriver";
import assert from "assert";
import dotenv from "dotenv";
import { highlightElement } from "../utils/h2_highlightUtils";

// Load environment variables from .env
dotenv.config();

Given("I am on the landing page", { timeout: 20000 }, async function () {
  await this.driver.get(process.env.BASE_URL!);
  await this.driver.wait(
    until.elementLocated(By.css("a[href='/login']")),
    10000
  );
});

When("I click on the login link", async function () {
  const loginLink = await this.driver.wait(
    until.elementLocated(By.css('a[href="/login"]')),
    15000
  );
  await loginLink.click();
});

When("I enter the phone number {string}", async function (label: string) {
  const phone = label === "<secure>" ? process.env.MYJ_PHONE : label;
  if (!phone) throw new Error("Phone number is undefined or missing from .env");

  const phoneInput = await this.driver.wait(
    until.elementLocated(By.css('input[type="tel"]')),
    5000
  );
  await highlightElement(this.driver, phoneInput);
  await phoneInput.clear();
  await phoneInput.sendKeys(phone);
});

When("I enter the password {string}", async function (label: string) {
  const password = label === "<secure>" ? process.env.MYJ_PASSWORD : label;
  if (!password) throw new Error("Password is undefined or missing from .env");

  const passwordInput = await this.driver.wait(
    until.elementLocated(By.css("input#password")),
    5000
  );
  await passwordInput.sendKeys(password);
});

When("I click on the continue button", async function () {
  const continueBtn = await this.driver.wait(
    until.elementLocated(By.css("button.submit-buttonlogin")),
    5000
  );
  await highlightElement(this.driver, continueBtn);
  await continueBtn.click();
});

Then(
  "I should see the homepage or profile popup",
  { timeout: 20000 },
  async function () {
    try {
      // Try to find profile popup
      await this.driver.sleep(2000); // brief pause to allow popup

      const popupHeader = await this.driver.findElement(
        By.css("h2.text-2xl.sm\\:text-3xl.font-bold")
      );
      await highlightElement(this.driver, popupHeader);

      if (await popupHeader.isDisplayed()) {
        const headerText = await popupHeader.getText();
        assert.ok(
          headerText.toLowerCase().includes("profile"),
          "Popup does not contain expected text"
        );
        await highlightElement(this.driver, headerText);

        // Optional: Check upload and skip buttons
        const uploadBtn = await this.driver.findElement(
          By.xpath("//button[contains(text(),'Upload Profile Picture')]")
        );
        const skipBtn = await this.driver.findElement(
          By.xpath("//button[contains(text(),'Skip for Now')]")
        );

        assert.ok(await uploadBtn.isDisplayed(), "Upload button missing");
        assert.ok(await skipBtn.isDisplayed(), "Skip button missing");

        console.log("✅ Profile popup displayed and verified.");
        return;
      }
    } catch (popupErr) {
      console.warn("⚠️ Popup not found. Verifying homepage instead...");
    }

    // Fallback: check homepage banner
    const homeBanner = await this.driver.wait(
      until.elementLocated(By.css('img[alt="banner"]')),
      5000
    );
    const isBannerVisible = await homeBanner.isDisplayed();
    assert.ok(isBannerVisible, "Homepage banner not visible");
    console.log("✅ Homepage banner verified.");
  }
);
