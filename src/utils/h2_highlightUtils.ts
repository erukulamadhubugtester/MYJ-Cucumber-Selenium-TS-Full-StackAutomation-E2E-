import { WebDriver, WebElement } from "selenium-webdriver";

/**
 * Scrolls an element to the center of the screen and highlights it.
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
    // Scroll element into center view
    await driver.executeScript(
      "arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });",
      element
    );

    // Apply highlight
    await driver.executeScript(
      "arguments[0].style.border='3px solid red';", //  arguments[0].style.transition='border 0.3s ease-in-out'; arguments[0].style.backgroundColor='yellow';",
      element
    );

    console.log("✅ Element highlighted.");

    // Optional: Pause briefly for visibility (can remove if not needed)
    await driver.sleep(800);
  } catch (err) {
    console.error("❌ Failed to highlight element:", err);
  }
}
