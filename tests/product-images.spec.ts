import { expect, test } from "@playwright/test";

const baseUrl =
  process.env.PRODUCT_TEST_URL ??
  "http://127.0.0.1:4173/nhom07_thietbiyte/products/";

test("product catalog images load across pagination", async ({ page }) => {
  const failedImages: string[] = [];

  page.on("response", (response) => {
    const url = response.url();

    if (response.status() >= 400 && /\.(webp|png|jpe?g|svg)(\?|$)/i.test(url)) {
      failedImages.push(`${response.status()} ${url}`);
    }
  });

  page.on("console", (message) => {
    if (message.type() === "error") {
      const text = message.text();

      if (/Failed to load resource|404/.test(text)) {
        failedImages.push(text);
      }
    }
  });

  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await expect(page.getByRole("heading", { name: "Danh sách thiết bị y tế" })).toBeVisible();

  await expect
    .poll(() => page.locator("section article img").evaluateAll((images) => images.length))
    .toBeGreaterThanOrEqual(6);

  await page.getByRole("button", { name: "2" }).click();
  await page.waitForLoadState("networkidle");
  await expect(page.getByRole("link", { name: /Kim luồn tĩnh mạch Braun 22G/ }).first()).toBeVisible();

  const brokenImages = await page.locator("section article img").evaluateAll((images) =>
    images
      .filter((image) => image instanceof HTMLImageElement && image.naturalWidth === 0)
      .filter((image) => (image as HTMLImageElement).complete)
      .map((image) => (image as HTMLImageElement).src),
  );

  expect([...failedImages, ...brokenImages]).toEqual([]);
});
