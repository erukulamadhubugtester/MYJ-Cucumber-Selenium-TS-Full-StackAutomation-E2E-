// src/support/browserManager.ts
import { Builder, WebDriver } from "selenium-webdriver";
import * as chrome from "selenium-webdriver/chrome";

export let driver: any;

export async function getDriver(): Promise<any> {
  if (!driver) {
    console.log("🚀 Launching Chrome browser...");
    const options = new chrome.Options();
    options.addArguments("--disable-gpu", "--no-sandbox");

    const isHeadless = process.env.HEADLESS === "true";
    if (isHeadless) options.addArguments("--headless=new");

    driver = await new Builder()
      .forBrowser("chrome")
      .setChromeOptions(options)
      .build();

    console.log("✅ Chrome browser launched.");
  }
  return driver;
}

export async function quitDriver(): Promise<void> {
  if (driver) {
    await driver.quit();
    driver = null!;
  }
}
