// src/support/world.ts
import { setWorldConstructor, World } from "@cucumber/cucumber";
import { WebDriver } from "selenium-webdriver";

export class CustomWorld extends World {
  driver!: any;

  constructor(options: any) {
    super(options);
  }

  setDriver(driver: any) {
    this.driver = driver;
  }

  getDriver(): any {
    return this.driver;
  }
}

setWorldConstructor(CustomWorld);
