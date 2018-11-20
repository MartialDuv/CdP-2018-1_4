const puppeteer = require('puppeteer');
// const Server = require('../../src/server');
const port = 3000;

describe('Server', () => {
  let browser = undefined;
//  let server = undefined;
const args = [
    "--disable-setuid-sandbox",
    "--no-sandbox",
  ];
  const options = {
    args,
    headless: true,
    ignoreHTTPSErrors: true,
    dumpio: true,
    //   ignoreSSL: true
  };

  beforeEach(async () => {
    browser = await puppeteer.launch(options);

    const url = `http://localhost:3000/`;
    const page = await browser.newPage();
    await page.goto(url);

  //  server = this.app.listen(port, () => resolve(port));
  });

  // afterEach(async () => {
  //   if (browser) await browser.close();
  //   if (server) await server.stop();
  // });

  it("jasmine puppeteer", async () => {
    const title = await page.title();
    expect(title).toBe('Accueil');
    done();
  });

  afterAll(() => {
  })  
});
