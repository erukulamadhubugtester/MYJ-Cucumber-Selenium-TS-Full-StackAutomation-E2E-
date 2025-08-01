import { By, until } from "selenium-webdriver";
import { highlightElement } from "../utils/h2_highlightUtils";
import { handleProfilePopupIfPresent } from "../utils/h1_popupHandler";

export class UserHomePage {
  constructor(private driver: any) {}

  async handleProfilePopupIfPresent() {
    try {
      console.log("🔍 Checking for profile popup...");
      await handleProfilePopupIfPresent(this.driver);
      console.log("✅ Profile popup handled (if shown).");
    } catch (error) {
      console.error("❌ Failed to handle profile popup:", error);
    }
  }

  async isConnectionMessageDisplayed(expectedText: string): Promise<boolean> {
    const xpath = `//h1[contains(text(),"${expectedText}")]`;
    try {
      console.log(`🔍 Locating connection message: "${expectedText}"`);
      await this.driver.wait(until.elementLocated(By.xpath(xpath)), 10000);
      const heading = await this.driver.findElement(By.xpath(xpath));
      await this.driver.wait(until.elementIsVisible(heading), 5000);
      await highlightElement(this.driver, heading);
      console.log("✅ Connection message displayed.");
      return await heading.isDisplayed();
    } catch (error) {
      console.error(`❌ Could not find connection message: "${expectedText}"`);
      console.error(error);
      return false;
    }
  }
}

export class Dropdowns_check_home_Page {
  constructor(private driver: any) {}

  async isAgeOptionVisible(range: string): Promise<boolean> {
    const xpath = `//div[contains(@class,'text-center') and normalize-space()='${range}']`;
    try {
      console.log(`🔍 Checking age range dropdown for: "${range}"`);
      const option = await this.driver.findElement(By.xpath(xpath));
      await highlightElement(this.driver, option);
      console.log(`✅ Age range "${range}" is visible.`);
      return await option.isDisplayed();
    } catch (error) {
      console.error(`❌ Age range "${range}" not visible.`);
      console.error(error);
      return false;
    }
  }

  async isEducationDropdownDisplayed(): Promise<boolean> {
    const xpath =
      "//div[contains(@class,'select__control')]//div[text()='Education']";
    try {
      console.log("🔍 Checking Education dropdown...");
      const dropdown = await this.driver.findElement(By.xpath(xpath));
      await highlightElement(this.driver, dropdown);
      console.log("✅ Education dropdown is visible.");
      return await dropdown.isDisplayed();
    } catch (error) {
      console.error("❌ Education dropdown not found.");
      console.error(error);
      return false;
    }
  }

  async isProfessionInputDisplayed(): Promise<boolean> {
    const xpath = "//input[@placeholder='Enter Profession']";
    try {
      console.log("🔍 Checking profession input field...");
      const input = await this.driver.findElement(By.xpath(xpath));
      await highlightElement(this.driver, input);
      console.log("✅ Profession input field is visible.");
      return await input.isDisplayed();
    } catch (error) {
      console.error("❌ Profession input field not found.");
      console.error(error);
      return false;
    }
  }

  async isFindButtonDisplayed(): Promise<boolean> {
    const xpath = "//button[normalize-space()='Find']";
    try {
      console.log("🔍 Checking Find button...");
      const button = await this.driver.findElement(By.xpath(xpath));
      await highlightElement(this.driver, button);
      console.log("✅ Find button is visible.");
      return await button.isDisplayed();
    } catch (error) {
      console.error("❌ Find button not found.");
      console.error(error);
      return false;
    }
  }
}

export class Profiles_which_match_your_preferences {
  constructor(private driver: any) {}

  // ✅ Updated XPath to locate the exact h2 title element
  async getTitleElement(): Promise<any> {
    const xpath = "//h2[contains(normalize-space(), 'Profiles which match')]";
    await this.driver.wait(until.elementLocated(By.xpath(xpath)), 10000);
    const element = await this.driver.findElement(By.xpath(xpath));
    await this.driver.wait(until.elementIsVisible(element), 5000);
    return element;
  }

  async getTitleText(): Promise<string> {
    const element = await this.getTitleElement();
    const text = await element.getText();
    console.log("📋 [getTitleText] Actual title text:", text);
    return text;
  }

  async highlightElement(element: any): Promise<void> {
    await this.driver.executeScript(
      "arguments[0].style.border='3px solid red';",
      element
    );
  }
}
