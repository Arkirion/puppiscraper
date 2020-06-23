const puppeteer = require('puppeteer');

/**
 * Instance browser, open web page and go to an url
 * @param {string} url - Objective url to scrap
 * @return {WebPage Object} - Return web page instance
 */
const getPage = async (url) =>{
  const browser = await puppeteer.launch();
  let page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle0' });
  return page;
}


/**
 * Get a limited quantity of scraping data
 * @param {Object} pagePuppeterObject - Web page browser instance, needed to evaluate()
 * @param {string} selector - Selector string to get data we need - e.g : 'div > a'
 * @param {number} cycles - Number of times it will use querySelector, only way to set a limit of selections
 * @returns {Array of Strings} - Return scraped data 
 */
const querySelectorAllInRange = async (pagePuppeterObject, selector, cycles = 1 ) => {
  let data = await pagePuppeterObject.evaluate(async ({selector,cycles})  => {
    const dataArray = []
    for (let index = 0; index < cycles; index++) {
      let item = document.querySelectorAll(selector)[index].innerText;
      dataArray.push(item)
    }
    return dataArray;
  }, {selector,cycles});
  return data
}

/**
 * Get scraping data
 * @param {Object} pagePuppeterObject - Web page browser instance, needed to evaluate()
 * @param {string} selector - Selector string to get data we need - e.g : 'div > a'
 * @returns {string} - Return scraped data 
 */
const querySelector = async (pagePuppeterObject, selector) => {
  let data = await pagePuppeterObject.evaluate(async ({selector})  => {
    return document.querySelector(selector).innerText;
  }, {selector});

  return data
}


module.exports = {
  getPage,
  querySelector,
  querySelectorAllInRange,
}
