const assert = require('assert')
const apiPage = require('../page/api.page.js');
const contributePage = require('../page/contribute.page.js')
const helpPage = require('../page/help.page.js')
const browseDocs = require('../page/isdisplayed.page.js')
describe('webdriver.io page', async () => {

    it('should demonstrate the addValue command', async () => {
        await browser.url('https://v6.webdriver.io/');
        apiPage.clickApiButton();
        await browser.pause(2000);      
        })

    it('should click contribute button', async () => {
        contributePage.clickContributeButton();
        await browser.pause(2000);      
        })


    it('should click Help button', async () => {
         helpPage.clickHelpButton();
         await browser.pause(2000);           
        })

    it('is displayed "View documents"?', async () => {
            browseDocs.browseDocsIsDisplayed();
            console.log('shto' + browseDocs)
            await browser.pause(4000);          
        })    

})