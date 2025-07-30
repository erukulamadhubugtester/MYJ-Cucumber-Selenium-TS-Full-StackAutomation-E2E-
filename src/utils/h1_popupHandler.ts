// src/utils/handleProfilePopup.ts
import { By, until } from "selenium-webdriver";

export async function handleProfilePopupIfPresent(driver: any) {
  console.log("⏳ Checking for profile popup...");

  try {
    const popupHeader = await driver.wait(
      until.elementLocated(
        By.xpath("//h2[contains(text(),'Your profile is')]")
      ),
      7000
    );

    if (await popupHeader.isDisplayed()) {
      console.log("✅ Profile popup is displayed.");

      const closeBtn = await driver.wait(
        until.elementLocated(By.css("button[aria-label='Close modal']")),
        3000
      );

      await driver.wait(until.elementIsVisible(closeBtn), 3000);
      await driver.wait(until.elementIsEnabled(closeBtn), 3000);

      try {
        await closeBtn.click();
        console.log("✅ Popup closed with normal click.");
      } catch (clickErr) {
        console.warn("❗Normal click failed. Trying JavaScript click...");
        await driver.executeScript("arguments[0].click();", closeBtn);
      }

      await driver.wait(until.stalenessOf(popupHeader), 5000);
      console.log("✅ Popup fully closed and removed from DOM.");
    }
  } catch (err) {
    console.log("ℹ️ Profile popup not shown (likely 100% complete).");
  }
}
