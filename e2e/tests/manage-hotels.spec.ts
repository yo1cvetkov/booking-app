import { expect, test } from "@playwright/test";

import path from "path";

const UI_URL = "http://localhost:5173/";

test.beforeEach(async ({ page }) => {
  await page.goto(UI_URL);

  await page.getByRole("link", { name: "Login" }).click();

  await expect(page.getByRole("heading", { name: "Log in to your account" })).toBeVisible();

  await page.locator("[name=email]").fill("email@example.com");

  await page.locator("[name=password]").fill("password123");

  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.getByText("Logged in successfully.")).toBeVisible();
});

test("should allow user to add a hotel", async ({ page }) => {
  await page.goto(`${UI_URL}my-hotels/add`);
  await page.locator('[name="name"]').fill("Test Hotel");
  await page.locator('[name="city"]').fill("Test City");
  await page.locator('[name="country"]').fill("Test Country");
  await page.locator('[name="description"]').fill("This is a description for the Test Hotel");
  await page.locator('[name="pricePerNight"]').fill("100");
  await page.selectOption('select[name="starRating"]', "3");
  await page.getByText("budget").click();
  await page.getByLabel("Free WiFi").check();
  await page.getByLabel("Parking").check();
  await page.locator('[name="countAdults"]').fill("2");
  await page.locator('[name="countChildren"]').fill("4");
  await page.setInputFiles('[name="imagesList"]', [
    path.join(__dirname, "files", "1.png"),
    path.join(__dirname, "files", "2.png"),
    path.join(__dirname, "files", "3.png"),
  ]);

  await page.getByRole("button", { name: "Add Hotel" }).click();

  await expect(page.getByText("Created my hotel.")).toBeVisible();
});
