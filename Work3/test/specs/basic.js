    it('Homework3', async () => {
    await browser.url('https://v5.webdriver.io/docs/api.html');
    await browser.pause(1000);
    //Introduction_xpath
    const Introduction = await $('//h3[text()="Introduction"]');
      console.log('xpath Introduction Is Displayed?: ' + await Introduction.isDisplayed());
       await browser.pause(1000);
    //Introduction_css
    const Introduction1 = await $('.navListItem.navListItemActive');
      console.log('css Introduction Is Displayed?: ' + await Introduction1.isDisplayed());
       await browser.pause(1000);
    //API_Docs_xpath
        const API_Docs = await $('//h3[text()="API Docs"]');
      console.log('xpath API_Docs Is Displayed?: ' + await API_Docs.isDisplayed());
       await browser.pause(1000);
    //API_Docs_css
      const API_Docs1 = await $("li.navListItem.navListItemActive > a.navItem");
        console.log('css API_Docs Is Displayed?: ' + await API_Docs1.isDisplayed());
         await browser.pause(1000);
    //Protocols_xpath
        const Protocols = await $('//h3[text()="Protocols"]');
        console.log('xpath Protocols Is Displayed?: ' + await Protocols.isDisplayed());
         await browser.pause(1000);
    //Protocols_css
      const Protocols1 = await $("div.navGroup > h3.navGroupCategoryTitle");
        console.log('css Protocols Is Displayed?: ' + await Protocols1.isDisplayed());
         await browser.pause(1000);
    //Webdriver_Protocol_xpath
        const Webdriver_Protocol = await $('//h3[text()="Webdriver Protocol"]');
        console.log('xpath Webdriver_Protocol Is Displayed?: ' + await Webdriver_Protocol.isDisplayed());
         await browser.pause(1000);
    //Webdriver_Protocol_css
      const Webdriver_Protocol1 = await $('li a[href="/docs/api/webdriver.html"]');
        console.log('css Webdriver_Protocol Is Displayed?: ' + await Webdriver_Protocol1.isDisplayed());
         await browser.pause(1000);
    //Appium_xpath
        const Appium = await $('//h3[text()="Appium"]');
        console.log('xpath Appium Is Displayed?: ' + await Appium.isDisplayed());
         await browser.pause(1000);
    //Appium_css
      const Appium1 = await $('li a[href="/docs/api/appium.html"]');
        console.log('css Appium Is Displayed?: ' + await Appium1.isDisplayed());
         await browser.pause(1000);
    //JSON_Wire_Protocol_xpath
        const JSON_Wire_Protocol = await $('//h3[text()="JSON Wire Protocol"]');
        console.log('xpath JSON_Wire_Protocol Is Displayed?: ' + await JSON_Wire_Protocol.isDisplayed());
         await browser.pause(1000);
    //JSON_Wire_Protocol_css
      const JSON_Wire_Protocol1 = await $('li a[href="/docs/api/jsonwp.html"]');
        console.log('css JSON_Wire_Protocol Is Displayed?: ' + await JSON_Wire_Protocol1.isDisplayed());
         await browser.pause(1000);
    //Mobile_JSON_Wire_Protocol_xpath
        const Mobile_JSON_Wire_Protocol = await $('//h3[text()="Mobile JSON Wire Protocol"]');
        console.log('xpath Mobile_JSON_Wire_Protocol Is Displayed?: ' + await Mobile_JSON_Wire_Protocol.isDisplayed());
         await browser.pause(1000);
    //Mobile_JSON_Wire_Protocol_css
      const Mobile_JSON_Wire_Protocol1 = await $('li a[href="/docs/api/mjsonwp.html"]');
        console.log('css Mobile_JSON_Wire_Protocol Is Displayed?: ' + await Mobile_JSON_Wire_Protocol1.isDisplayed());
         await browser.pause(1000);
    //Chromium_xpath
        const Chromium = await $('//h3[text()="Chromium"]');
        console.log('xpath Chromium Is Displayed?: ' + await Chromium.isDisplayed());
         await browser.pause(1000);
    //Chromium_css
      const Chromium1 = await $('li a[href="/docs/api/chromium.html"]');
        console.log('css Chromium Is Displayed?: ' + await Chromium1.isDisplayed());
         await browser.pause(1000);
    //Sauce_Labs_xpath
        const Sauce_Labs = await $('//h3[text()="Sauce_Labs"]');
        console.log('xpath Sauce_Labs Is Displayed?: ' + await Sauce_Labs.isDisplayed());
         await browser.pause(1000);
    //Sauce_Labs_css
      const Sauce_Labs1 = await $('li a[href="/docs/api/saucelabs.html"]');
        console.log('css Sauce_Labs Is Displayed?: ' + await Sauce_Labs1.isDisplayed());
         await browser.pause(1000);
    //Selenium_Standalone_xpath
        const Selenium_Standalone = await $('//h3[text()="Selenium_Standalone"]');
        console.log('xpath Selenium_Standalone Is Displayed?: ' + await Selenium_Standalone.isDisplayed());
         await browser.pause(1000);
    //Selenium_Standalone_css
      const Selenium_Standalone1 = await $('li a[href="/docs/api/selenium.html"]');
        console.log('css Selenium_Standalone Is Displayed?: ' + await Selenium_Standalone1.isDisplayed());
         await browser.pause(1000);
    //AppiumIO_xpath
        const AppiumIO = await $('//h3[text()="AppiumIO"]');
        console.log('xpath AppiumIO Is Displayed?: ' + await AppiumIO.isDisplayed());
         await browser.pause(1000);
    //AppiumIO_css
      const AppiumIO1 = await $(' a[href="http://appium.io"]');
        console.log('css AppiumIO Is Displayed?: ' + await AppiumIO1.isDisplayed());
         await browser.pause(1000);
    //v4.webdriver.io_xpath
        const webdriverio = await $('//h3[text()="v4.webdriver.io"]');
        console.log('xpath webdriverio Is Displayed?: ' + await webdriverio.isDisplayed());
         await browser.pause(1000);
    //v4.webdriver.io_css
      const webdriverio1 = await $(' a[href="http://v4.webdriver.io"]');
        console.log('css webdriverio Is Displayed?: ' + await webdriverio1.isDisplayed());
         await browser.pause(1000);
    //contribute_xpath
        const contribute = await $('//h3[text()="contribute"]');
        console.log('xpath contribute Is Displayed?: ' + await contribute.isDisplayed());
         await browser.pause(1000);
    //contribute_css
      const contribute1 = await $('li a[href="#contribute"]');
        console.log('css contribute Is Displayed?: ' + await contribute1.isDisplayed());
         await browser.pause(1000);
    //Docs_xpath
      const Docs = await $('//h3[text()="Docs"]');
        console.log('xpath Docs Is Displayed?: ' + await Docs.isDisplayed());
         await browser.pause(1000);
    //Docs_css
      const Docs1 = await $('//*[text()="Docs"]');
        console.log('css Docs Is Displayed?: ' + await Docs1.isDisplayed());
         await browser.pause(1000);
    //Getting_Started_xpath
        const Getting_Started = await $('//h3[text()="Getting Started"]');
        console.log('xpath Getting_Started Is Displayed?: ' + await Getting_Started.isDisplayed());
         await browser.pause(1000);
    //Getting_Started_css
      const Getting_Started1 = await $('a a[href="/docs/gettingstarted.html"]');
        console.log('css Getting_Started Is Displayed?: ' + await Getting_Started1.isDisplayed());
         await browser.pause(1000);
    //API_Reference_xpath
        const API_Reference = await $('//h3[text()="API Reference"]');
        console.log('xpath API_Reference Is Displayed?: ' + await API_Reference.isDisplayed());
         await browser.pause(1000);   
    //API_Reference_css
      const API_Reference1 = await $('a a[href="/docs/api.html"]');
        console.log('css API_Reference Is Displayed?: ' + await API_Reference1.isDisplayed());
         await browser.pause(1000);
    //Help_xpath
        const Help = await $('//h3[text()="Help"]');
        console.log('xpath Help Is Displayed?: ' + await Help.isDisplayed());
         await browser.pause(1000);
    //Help_css
      const Help1 = await $('a a[href="/help.html"]');
        console.log('css Help Is Displayed?: ' + await Help1.isDisplayed());
         await browser.pause(1000);
    //Community_xpath
        const Community = await $('//h3[text()="Community"]');
        console.log('xpath Community Is Displayed?: ' + await Community.isDisplayed());
          await browser.pause(1000);
    //Community_css
      const Community1 = await $('//*[text()="Community"]');
        console.log('css Community Is Displayed?: ' + await Community1.isDisplayed());
         await browser.pause(1000);
    //Stack_Overflow_xpath
        const Stack_Overflow = await $('//h3[text()="Stack Overflow"]');
        console.log('xpath Stack_Overflow Is Displayed?: ' + await Stack_Overflow.isDisplayed());
         await browser.pause(1000);
    //Stack_Overflow_css
      const Stack_Overflow1 = await $('a a[href="https://stackoverflow.com/questions/tagged/webdriver-io"]');
        console.log('css Stack_Overflow Is Displayed?: ' + await Stack_Overflow1.isDisplayed());
        await browser.pause(1000);
    //Support_Chat_xpath
        const Support_Chat = await $('//h3[text()="Support Chat"]');
        console.log('xpath Support_Chat Is Displayed?: ' + await Support_Chat.isDisplayed());
         await browser.pause(1000);
    //Support_Chat_css
      const Support_Chat1 = await $('a a[href="https://gitter.im/webdriverio/webdriverio"]');
        console.log('css Support_Chat Is Displayed?: ' + await Support_Chat1.isDisplayed());
         await browser.pause(1000);
    //Twitter_xpath
        const Twitter = await $('//h3[text()="Twitter"]');
        console.log('xpath Twitter Is Displayed?: ' + await Twitter.isDisplayed());
         await browser.pause(1000);
    //Twitter_css
      const Twitter1 = await $('a a[href="https://twitter.com/webdriverio"]');
        console.log('css Twitter Is Displayed?: ' + await Twitter1.isDisplayed());
         await browser.pause(1000);
    //More_xpath
        const More = await $('//h3[text()="More"]');
        console.log('xpath More Is Displayed?: ' + await More.isDisplayed());
         await browser.pause(1000);
    //More_css
      const More1 = await $('//*[text()="More"]');
        console.log('css More Is Displayed?: ' + await More1.isDisplayed());
         await browser.pause(1000);
    //Blog_xpath
        const Blog = await $('//h3[text()="Blog"]');
        console.log('xpath Blog Is Displayed?: ' + await Blog.isDisplayed());
         await browser.pause(1000);
    //Blog_css
      const Blog1 = await $('a a[href="/blog"]');
        console.log('css Blog Is Displayed?: ' + await Blog1.isDisplayed());
         await browser.pause(1000);
    //GitHub_xpath
        const GitHub = await $('//h3[text()="GitHub"]');
        console.log('xpath GitHub Is Displayed?: ' + await GitHub.isDisplayed());
         await browser.pause(1000);
    //GitHub_css
      const GitHub1 = await $('a a[href="https://github.com/webdriverio/webdriverio"]');
        console.log('css GitHub Is Displayed?: ' + await GitHub1.isDisplayed());
         await browser.pause(1000);
    //widget_xpath
      const widget = await $('//*[@id="footer"]/section[1]/div[3]/span//div');
        console.log('xpath widget Is Displayed?: ' + await widget.isDisplayed());
         await browser.pause(1000);
    //widget_css
        const widget1 = await $('//*[@id="footer"]/section[1]/div[3]/span');
        console.log('css widget Is Displayed?: ' + await widget1.isDisplayed());
         await browser.pause(1000);
})    

