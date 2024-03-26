it('Homework1', async () => {
    browser.url('https://v5.webdriver.io/');     // Переход на страницу
    const apiButton = await $('[href="/docs/api.html"]');  // Поиск кнопки API
    await browser.pause(2000); 
    await apiButton.click()     // Нажатие на кнопку Api
    await browser.pause(2000);

    const currentUrl = await (browser.getUrl());            
    console.log('Current Url is ' + await currentUrl);    // Вывод в консоль https://v5.webdriver.io/docs/api.html
     
    
    const header = await $('.postHeaderTitle');
    console.log('Text is ' + await header.getText());   // Вывод в консоль API Docs

    const JSONWire = await $('//*[text()="JSONWire protocol"]');
    console.log('Text is ' + await JSONWire.getAttribute('href'));        // Вывод в консоль https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol
                                                                          
 
    const elem = $('#search_input_react');
    elem.setValue('test is')          // Вывод в инпут поле 'test is'
    await browser.pause(2000);
    let input = $('#search_input_react');
    input.addValue(' DONE!')       // Добавление в инпут поле 'DONE!'
    await browser.pause(5000);     // Пауза в конце на 5с.
})
