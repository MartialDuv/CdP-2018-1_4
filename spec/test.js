const puppeteer = require('puppeteer');
// const Server = require('../../src/server');
const port = 3000;

describe('Server', () => {
  let browser = undefined;
  let server = undefined;

  beforeEach(async () => {
    browser = await puppeteer.launch({args: ['--disable-setuid-sandbox', '--no-sandbox'], dumpio: true});
    server = this.app.listen(port, () => resolve(port));
  });

  // afterEach(async () => {
  //   if (browser) await browser.close();
  //   if (server) await server.stop();
  // });

  it('serves a homepage with a title', async () => {
    const url = `http://localhost:3000/`;
    const page = await browser.newPage();
    await page.goto(url);

    const title = await page.title();
    expect(title).toBe('Accueil');
  });
});
