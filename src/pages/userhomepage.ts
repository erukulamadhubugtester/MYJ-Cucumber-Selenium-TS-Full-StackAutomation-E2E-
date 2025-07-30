import { By } from "selenium-webdriver";
import { highlightElement } from "../utils/h2_highlightUtils";
import { handleProfilePopupIfPresent } from "../utils/h1_popupHandler"; // ✅ Import here

export class UserHomePage {
  constructor(private driver: any) {}

  // ✅ Just call the utility function
  async handleProfilePopupIfPresent() {
    await handleProfilePopupIfPresent(this.driver);
  }

  async isOnUserHomePage() {
    const element = await this.driver.findElement(
      By.css(".homepage-identifier")
    );
    return await element.isDisplayed();
  }

  async isConnectionMessageDisplayed(): Promise<boolean> {
    const heading = await this.driver.findElement(
      By.xpath("//h1[contains(text(),'Find the perfect connection for you')]")
    );
    await highlightElement(this.driver, heading);
    return await heading.isDisplayed();
  }
}
