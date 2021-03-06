const puppeteer = require('puppeteer');
const port = 3000;

describe('Server', () => {
  let browser = undefined;
  var page;
const args = [
    "--disable-setuid-sandbox",
    "--no-sandbox",
];

beforeEach(async () => {
  browser = await puppeteer.launch(args);
  const url = 'http://localhost:3000/';
  page = await browser.newPage();
  await page.goto(url);
});

  it("Test Title", async () => {
    const title = await page.title();
    expect(title).toBe('Accueil');
  });

  afterAll(() => {
  })
});
