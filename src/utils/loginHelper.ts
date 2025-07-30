import { LoginPage } from "../pages/loginPage";

export async function performLogin(driver: any) {
  const loginPage = new LoginPage(driver);
  await loginPage.openLandingPage(process.env.BASE_URL!);
  await loginPage.clickLoginLink();
  await loginPage.enterPhoneNumber(process.env.MYJ_PHONE!);
  await loginPage.enterPassword(process.env.MYJ_PASSWORD!);
  await loginPage.clickContinue();
  const success = await loginPage.verifyLoginSuccess();
  if (!success) throw new Error("❌ Login failed");
}
