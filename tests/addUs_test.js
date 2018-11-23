const puppeteer = require('puppeteer');
const faker = require('faker');
const port = 3000;

const us = {
   id: faker.name.findName(),
   difficulty: faker.name.findName(),
   description: faker.name.findName(),

};

describe('Server', () => {
  let browser = undefined;
  var page;

const args = [
    "--disable-setuid-sandbox",
    "--no-sandbox",
];

// beforeEach(async () => {
//
//   browser = await puppeteer.launch(args);
//   const url = 'http://localhost:3000/add_us';
//   page = await browser.newPage();
//   await page.goto(url);
// });
//
// it("Test add us", async () => {
//   await page.waitForSelector('.addus-form');
//   await page.click("input[type=USId]");
//   await page.type("input[type=USId]", us.id);
//   await page.click("input[type=difficulty]");
//   await page.type("input[type=difficulty]", us.difficulty);
//   await page.click("textarea[type=description]");
//   await page.type("textarea[type=description]", us.description);
//   await page.click("button[type=button]");
//
//   // Wait if we get redirected to good page
//   await page.waitForNavigation();
// });
//
//   afterAll(() => {
//   })
// });

beforeEach(function(done) {
  browser = puppeteer.launch(args);
  const url = 'http://localhost:3000/add_us';
  page = browser.newPage();
  page.goto(url);
  done();
});

it("Test add us", function(done) {
  page.waitForSelector('.addus-form');
  page.click("input[type=USId]");
  page.type("input[type=USId]", us.id);
  page.click("input[type=difficulty]");
  page.type("input[type=difficulty]", us.difficulty);
  page.click("textarea[type=description]");
  page.type("textarea[type=description]", us.description);
  page.click("button[type=button]");

  // Wait if we get redirected to good page
  page.waitForNavigation();
  done();
});
