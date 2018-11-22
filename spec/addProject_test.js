const puppeteer = require('puppeteer');
// const Server = require('../../src/server');
const port = 3000;

describe('Server', () => {
  let browser = undefined;
  var page;
//  let server = undefined;
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

  it("Test Button", async () => {

    //await page.focus('#InputProjectName');
    await page.evaluate((ProjectName, Theme) => {
      document.querySelector('#InputProjectName').value = ProjectName;
      document.querySelector('#InputTheme').value = Theme;
      document.querySelector('#btncreaproj').click();
    }, ProjectName, Theme);

    // Wait if we get redirected to good page
    await page.waitForNavigation();
    // done();
  });

  afterAll(() => {
  })
});
