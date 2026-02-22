const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));

  await page.goto('http://localhost:8004');
  await page.waitForSelector('#language-modal button');
  await page.click('#language-modal button');
  
  await page.waitForSelector('#team-dal');
  await page.click('#team-dal');
  
  await page.waitForSelector('#non-saints-modal button');
  await page.click('#non-saints-modal button');
  
  await page.waitForSelector('#start-modal button');
  await page.click('#start-modal button');
  
  await page.waitForSelector('#btn-start-sim');
  await page.click('#btn-start-sim');
  
  await page.waitForTimeout(5000);
  
  await browser.close();
})();
