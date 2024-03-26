it('Homework1', async () => {
    await browser.url('https://v7.webdriver.io/docs/api');
    await browser.pause(2000);
    //getAttribute
    const JSONWire = await $('//*[text()="JSONWire protocol"]');
    const newwind = await JSONWire.getAttribute('href');
    //newWindow
    browser.newWindow(newwind);
    await browser.pause(1000);
    //isDisplayed
    const WikiButton = await $('[href="/SeleniumHQ/selenium/wiki"]');
    isDisplayed = await WikiButton.isDisplayed();
    console.log('Is Displayed?: ' + await isDisplayed);
    await browser.pause(1000);
    //switchWindow
    browser.switchWindow('https://v7.webdriver.io/docs/api');
    await browser.pause(1000);
    //waitUntil
    browser.waitUntil(() => {
        return $('.docTitle_Oumm').getText();
    }, 2000, 'blog is not diaplayed');
    //saveScreenshot
    const elem = $('.docTitle_Oumm');
    elem.saveScreenshot('elemScreenshot.png')
    await browser.pause(1000);
    //isDisplayed
    const Twitter = await $('[href="https://twitter.com/webdriverio"]');
    isDisplayed = await Twitter.isDisplayed();
    console.log('Twittet Is Displayed?: ' + await isDisplayed);
    await browser.pause(1000);
    //isDisplayedInViewport
    let isDisplayedInViewport = await $('[href="https://twitter.com/webdriverio"]').isDisplayedInViewport();
    console.log('Twittet is displayed in ViewPort?: ' + await isDisplayedInViewport);
    await browser.pause(1000);
    //scrollIntroView()
    const scroll = await $('[href="https://twitter.com/webdriverio"]');
    await browser.pause(1000);
    await scroll.scrollIntoView();
    //isDisplayed#1
    const Twitter1 = await $('[href="https://twitter.com/webdriverio"]');
    isDisplayed1 = await Twitter1.isDisplayed();
    console.log('Twittet Is Displayed?: ' + await isDisplayed1);
    await browser.pause(1000);
    //isDisplayedInViewport#1
    let isDisplayedInViewport1 = await $('[href="https://twitter.com/webdriverio"]').isDisplayedInViewport();
    console.log('Twittet is displayed in ViewPort?: ' + await isDisplayedInViewport1);
    await browser.pause(1000);
    //isFocused before click
    const blog = await $('//div[@class="navbar__items"]/a');
    await browser.pause(1000);
    console.log('blog isFocused() before click:' + await blog.isFocused());
    await browser.pause(1000);
    //isFocused after click
    await blog.click();
    await browser.pause(1000);
    console.log('blog isFocused() after click:' + await blog.isFocused());
    await browser.pause(2000);
})

