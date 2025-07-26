import { Before, After, Status } from "@cucumber/cucumber";
import { getDriver } from "./browserManager";
import fs from "fs-extra";

Before(async function () {
  this.driver = await getDriver();
});

After(async function (scenario) {
  if (scenario.result?.status === Status.FAILED && this.driver) {
    const screenshot = await this.driver.takeScreenshot();
    const filepath = `reports/screenshots/${Date.now()}.png`;
    fs.writeFileSync(filepath, screenshot, "base64");
    this.attach(screenshot, "image/png");
  }

  if (this.driver) {
    await this.driver.quit();
    this.driver = null;
  }
});
