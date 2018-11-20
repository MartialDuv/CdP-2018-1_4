const puppeteer = require('puppeteer');
// const Server = require('../../src/server');
const port = 3000;

describe('Server', () => {
  let browser = undefined;
//  let server = undefined;
const args = [
    "--disable-setuid-sandbox",
    "--no-sandbox",
    // "--enable-features=NetworkService",
];

// const options = {
//   args,
//   headless: false,
//   ignoreHTTPSErrors: true,
//   dumpio: true,
//   ignoreSSL: true
// };

beforeEach(async () => {
  browser = await puppeteer.launch(args);

  const url = `http://localhost:3000/`;
  const page = await browser.newPage();
  await page.goto(url);

//  server = this.app.listen(port, () => resolve(port));
});

  afterEach(async () => {
   await browser.close();
  });

  it("jasmine puppeteer", async () => {
    const title = await page.title();
    expect(title).toBe('Accueil');
    // done();
  });

  afterAll(() => {
  })
});
