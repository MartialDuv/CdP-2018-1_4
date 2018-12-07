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

let originalTimeout;
beforeEach(function() {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
});

afterEach(function() {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
});

beforeEach(async () => {
  browser = await puppeteer.launch(args);
  const url = 'http://localhost:3000/creaproject';
  page = await browser.newPage();
  await page.goto(url);
});

it("Test add project", async () => {
  await page.waitForSelector('.creaproject-form');
  await page.click("input[id=InputProjectName]");
  await page.type("input[id=InputProjectName]", project.name);
  await page.click("input[id=InputTheme]");
  await page.type("input[id=InputTheme]", project.theme);
  await page.click("button[type=button]");
  // Wait if we get redirected to good page
  await page.waitForNavigation();
});

afterAll(() => {
})
});
