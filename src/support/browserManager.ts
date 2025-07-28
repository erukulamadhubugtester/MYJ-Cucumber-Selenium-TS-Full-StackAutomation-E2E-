// src/support/browserManager.ts
import { Builder } from "selenium-webdriver";
import * as chrome from "selenium-webdriver/chrome";
import dotenv from "dotenv";

dotenv.config();

export async function getDriver() {
  console.log("🚀 Launching Chrome browser...");

  const options = new chrome.Options();

  options.addArguments(
    "--disable-blink-features=AutomationControlled",
    "--disable-infobars",
    "--no-sandbox",
    "--disable-gpu"
  );

  if (process.env.HEADLESS === "true") {
    options.addArguments("--headless=new");
  }

  (options as any).excludeSwitches = ["enable-automation"];

  const driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();

  await driver.manage().window().maximize();

  console.log("✅ Chrome browser launched and maximized.");
  return driver;
}
