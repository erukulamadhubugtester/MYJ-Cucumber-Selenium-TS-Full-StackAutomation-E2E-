import { Before, After, Status, AfterStep } from "@cucumber/cucumber";
import fs from "fs-extra";
import { getDriver } from "./browserManager";
import { handleProfilePopupIfPresent } from "../utils/h1_popupHandler";
import { setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(60 * 1000); // ⏰ Set default timeout to 60 seconds

Before(async function () {
  this.driver = await getDriver();
  // await handleProfilePopupIfPresent(this.driver); // Check only once at start
});

After(async function (scenario) {
  try {
    if (scenario.result?.status === Status.FAILED && this.driver) {
      console.log("❌ [After] Scenario failed. Capturing screenshot...");
      const screenshot = await this.driver.takeScreenshot();
      const filepath = `reports/screenshots/${Date.now()}.png`;
      fs.writeFileSync(filepath, screenshot, "base64");
      this.attach(screenshot, "image/png");
    }
  } catch (err) {
    if (err instanceof Error) {
      console.warn("⚠️ [After] Error during screenshot capture:", err.message);
    } else {
      console.warn("⚠️ [After] Unknown error during screenshot capture:", err);
    }
  } finally {
    if (this.driver) {
      console.log("🧹 [After] Quitting browser session...");
      try {
        await this.driver.quit();
      } catch (quitErr) {
        if (quitErr instanceof Error) {
          console.warn("⚠️ [After] Error during driver quit:", quitErr.message);
        } else {
          console.warn("⚠️ [After] Unknown error during driver quit:", quitErr);
        }
      }
      this.driver = null;
    }
  }
});

AfterStep(async function () {
  if (this.driver && typeof this.driver.getSession === "function") {
    try {
      const session = await this.driver.getSession();
      if (session) {
        await handleProfilePopupIfPresent(this.driver);
      }
    } catch (err) {
      if (err instanceof Error) {
        console.warn(
          "⚠️ [AfterStep] Skipping popup handler due to session error:",
          err.message
        );
      } else {
        console.warn("⚠️ [AfterStep] Unknown error during popup handler:", err);
      }
    }
  } else {
    console.warn("⚠️ [AfterStep] Driver session invalid or not available.");
  }
});
