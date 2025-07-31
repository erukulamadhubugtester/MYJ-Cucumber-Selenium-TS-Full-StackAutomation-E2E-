import { By, WebDriver } from "selenium-webdriver";
import { highlightElement } from "../utils/h2_highlightUtils";
import { handleProfilePopupIfPresent } from "../utils/h1_popupHandler";

export class UserHomePage {
  constructor(private driver: any) {}

  async handleProfilePopupIfPresent() {
    await handleProfilePopupIfPresent(this.driver);
  }

  async isConnectionMessageDisplayed(expectedText: string): Promise<boolean> {
    const heading = await this.driver.findElement(
      By.xpath(`//h1[contains(text(),'${expectedText}')]`)
    );
    await highlightElement(this.driver, heading);
    return await heading.isDisplayed();
  }
}

export class Dropdowns_check_home_Page {
  constructor(private driver: any) {}

  async isAgeOptionVisible(range: string): Promise<boolean> {
    const option = await this.driver.findElement(
      By.xpath(
        `//div[contains(@class,'text-center') and normalize-space()='${range}']`
      )
    );
    await highlightElement(this.driver, option);
    return await option.isDisplayed();
  }

  async isEducationDropdownDisplayed(): Promise<boolean> {
    const dropdown = await this.driver.findElement(
      By.xpath(
        "//div[contains(@class,'select__control')]//div[text()='Education']"
      )
    );
    await highlightElement(this.driver, dropdown);
    return await dropdown.isDisplayed();
  }

  async isProfessionInputDisplayed(): Promise<boolean> {
    const input = await this.driver.findElement(
      By.xpath("//input[@placeholder='Enter Profession']")
    );
    await highlightElement(this.driver, input);
    return await input.isDisplayed();
  }

  async isFindButtonDisplayed(): Promise<boolean> {
    const button = await this.driver.findElement(
      By.xpath("//button[normalize-space()='Find']")
    );
    await highlightElement(this.driver, button);
    return await button.isDisplayed();
  }
}
