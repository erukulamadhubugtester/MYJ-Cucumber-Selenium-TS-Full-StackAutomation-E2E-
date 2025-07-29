import { By, WebDriver, until, WebElement } from "selenium-webdriver";
import { highlightElement } from "../utils/h2_highlightUtils";

export class LoginPage {
  private driver: any;

  constructor(driver: any) {
    this.driver = driver;
  }

  async openLandingPage(url: string) {
    await this.driver.get(url);
    await this.driver.wait(
      until.elementLocated(By.css("a[href='/login']")),
      15000
    );
  }

  async clickLoginLink() {
    const loginLink = await this.driver.wait(
      until.elementLocated(By.css('a[href="/login"]')),
      15000
    );
    await loginLink.click();
  }

  async enterPhoneNumber(phone: string) {
    const phoneInput = await this.driver.wait(
      until.elementLocated(By.css('input[type="tel"]')),
      15000
    );
    await highlightElement(this.driver, phoneInput);
    await phoneInput.clear();
    await phoneInput.sendKeys(phone);
  }

  async enterPassword(password: string) {
    const passwordInput = await this.driver.wait(
      until.elementLocated(By.css("input#password")),
      50000
    );
    await passwordInput.sendKeys(password);
  }

  async clickContinue() {
    const continueBtn = await this.driver.wait(
      until.elementLocated(By.css("button.submit-buttonlogin")),
      15000
    );
    await highlightElement(this.driver, continueBtn);
    await continueBtn.click();
  }

  async verifyLoginSuccess() {
    try {
      await this.driver.sleep(2000);
      const popupHeader = await this.driver.findElement(
        By.css("h2.text-2xl.sm\\:text-3xl.font-bold")
      );
      await highlightElement(this.driver, popupHeader);
      const headerText = await popupHeader.getText();

      if (headerText.toLowerCase().includes("profile")) {
        const uploadBtn = await this.driver.findElement(
          By.xpath("//button[contains(text(),'Upload Profile Picture')]")
        );
        const skipBtn = await this.driver.findElement(
          By.xpath("//button[contains(text(),'Skip for Now')]")
        );
        return uploadBtn.isDisplayed() && skipBtn.isDisplayed();
      }
    } catch (e) {
      const homeBanner = await this.driver.wait(
        until.elementLocated(By.css('img[alt="banner"]')),
        15000
      );
      return await homeBanner.isDisplayed();
    }
  }
}
