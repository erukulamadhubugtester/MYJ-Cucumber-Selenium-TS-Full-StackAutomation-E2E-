import { WebDriver, WebElement } from "selenium-webdriver";

/**
 * Highlights an element by applying a red border using JavaScript.
 * @param driver - The Selenium WebDriver instance.
 * @param element - The WebElement to highlight.
 */
export async function highlightElement(
  driver: any,
  element: any
): Promise<void> {
  if (!driver || !element) {
    console.warn("Driver or Element not provided for highlight.");
    return;
  }

  try {
    await driver.executeScript(
      "arguments[0].style.border='3px solid red'; arguments[0].style.transition='border 0.3s ease-in-out';",
      element
    );
    console.log("✅ Element highlighted.");
  } catch (err) {
    console.error("❌ Failed to highlight element:", err);
  }
}
