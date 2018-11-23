const puppeteer = require('puppeteer');
const faker = require('faker');
const port = 3000;

const project = {
   name: faker.name.findName(),
   theme: faker.name.findName(),
};

describe('Server', () => {
  let browser = undefined;
  var page;

const args = [
    "--disable-setuid-sandbox",
    "--no-sandbox",
];

beforeEach(async () => {
  browser = await puppeteer.launch(args);
  const url = 'http://localhost:3000/creaproject';
  page = await browser.newPage();
  await page.goto(url);
});

  it("Test add project", async () => {

    await page.waitForSelector('.creaproject-form');
    await page.click("input[type=projectName]");
    await page.type("input[type=projectName]", project.name);
    await page.click("input[type=theme]");
    await page.type("input[type=theme]", project.theme);
    await page.click("button[type=button]");
    // Wait if we get redirected to good page
    await page.waitForNavigation();
    // done();
  });

  afterAll(() => {
  })
});
