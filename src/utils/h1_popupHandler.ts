// src/utils/handleProfilePopup.ts
import { By, until } from "selenium-webdriver";

export async function handleProfilePopupIfPresent(driver: any) {
  try {
    const popupHeader = await driver.wait(
      until.elementLocated(
        By.xpath("//h2[contains(text(),'Your profile is')]")
      ),
      5000
    );

    if (await popupHeader.isDisplayed()) {
      const closeBtn = await driver.wait(
        until.elementLocated(By.css("button[aria-label='Close modal']")),
        3000
      );

      await driver.wait(until.elementIsVisible(closeBtn), 3000);
      await driver.wait(until.elementIsEnabled(closeBtn), 3000);

      try {
        await closeBtn.click();
      } catch {
        await driver.executeScript("arguments[0].click();", closeBtn);
      }

      await driver.wait(until.stalenessOf(popupHeader), 5000);
      // console.log("✅ Popup appeared and was closed.");
    }
  } catch {
    // console.log("ℹ️ No popup shown.");
  }
}
