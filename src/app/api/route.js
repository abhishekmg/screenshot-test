import { launch } from "puppeteer";

const takeScreenshot = async (url) => {
  // this works on my local machine
  const browser = await launch();

  const page = await browser.newPage();

  await page.goto(url, { waitUntil: "load" });

  const buffer = await page.screenshot();

  await page.close();
  await browser.close();

  return buffer;
};

export async function GET(request) {
  const buffer = await takeScreenshot(
    "https://www.npmjs.com/package/puppeteer"
  );

  return Response.json({ data: buffer });
}
