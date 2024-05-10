import { test, expect } from "@playwright/test";

const UI_URL = "http://localhost:5173/";

test("should allow the user to sign in", async ({ page }) => {
  await page.goto(UI_URL);

  await page.getByRole("link", { name: "Login" }).click();

  await expect(page.getByRole("heading", { name: "Log in to your account" })).toBeVisible();

  await page.locator("[name=email]").fill("email@example.com");

  await page.locator("[name=password]").fill("password123");

  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.getByText("Logged in successfully.")).toBeVisible();

  await expect(page.getByRole("link", { name: "My Bookings" })).toBeVisible();

  await expect(page.getByRole("link", { name: "My Hotels" })).toBeVisible();

  await expect(
    await page.$eval("button", (button) => {
      const innerIcon = button.querySelector("svg");
      return !!innerIcon;
    })
  ).toBeTruthy();
});

test("should allow user to register", async ({ page }) => {
  const testEmail = `test_register_${Math.floor(Math.random() * 9000) + 10000}@test.com`;

  await page.goto(UI_URL);

  await page.getByRole("link", { name: "Get started" }).click();

  await expect(page.getByRole("heading", { name: "Register now" })).toBeVisible();

  await page.locator("[name=firstName]").fill("Fake");

  await page.locator("[name=lastName]").fill("User");

  await page.locator("[name=email]").fill(testEmail);

  await page.locator("[name=password]").fill("password123");

  await page.locator("[name=confirmPassword]").fill("password123");

  await page.getByRole("button", { name: "Register" }).click();

  await expect(page.getByText("You have registered successfully.")).toBeVisible();

  await expect(page.getByRole("link", { name: "My Bookings" })).toBeVisible();

  await expect(page.getByRole("link", { name: "My Hotels" })).toBeVisible();

  await expect(
    await page.$eval("button", (button) => {
      const innerIcon = button.querySelector("svg");
      return !!innerIcon;
    })
  ).toBeTruthy();
});
