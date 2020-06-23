const puppeteer = require('puppeteer');
const {sleep} = require('./src/utils');
const {getPage, querySelectorAllInRange} = require('./src/puppiscraper')

let URL =  `https://es.investing.com/crypto/currencies`;



const main = async () => {
  const page = await getPage(URL); // create a page browser instance with chromium

  while (true) {
    const selector = `td[class='price js-currency-price'] > a`;
    // const times = 3;

    const data = await querySelectorAllInRange(page, selector, 3) // scraper function
    const data2 = await querySelectorAllInRange(page, selector, 2) // scraper function
    
    console.log(data);
    console.log(data2);
    await sleep(1500)
  }
  // await browser.close();
};

main();