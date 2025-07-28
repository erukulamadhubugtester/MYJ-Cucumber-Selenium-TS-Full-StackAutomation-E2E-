import { By, until, WebDriver } from "selenium-webdriver";

export async function handleProfilePopupIfPresent(driver: any) {
  try {
    // Wait max 3s for the popup header
    const popupHeader = await driver.wait(
      until.elementLocated(
        By.xpath("//h2[contains(text(),'Your profile is')]")
      ),
      3000
    );

    if (await popupHeader.isDisplayed()) {
      const percentageText = await driver.findElement(By.xpath("//svg//text"));
      const percent = await percentageText.getText();
      console.log(`🔍 Profile Completion: ${percent}`);

      const closeBtn = await driver.findElement(
        By.css("button[aria-label='Close modal']")
      );
      await closeBtn.click();
      console.log("✅ Closed profile popup.");
    }
  } catch (err) {
    // Optional: Uncomment to see when popup isn't shown
    // console.log("ℹ️ Profile popup not shown. Proceeding...");
  }
}
