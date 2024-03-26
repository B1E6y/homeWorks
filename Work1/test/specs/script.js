it('Homework1', async () => {
    browser.url('https://v5.webdriver.io/');     // ������� �� ��������
    const apiButton = await $('[href="/docs/api.html"]');  // ����� ������ API
    await browser.pause(2000); 
    await apiButton.click()     // ������� �� ������ Api
    await browser.pause(2000);

    const currentUrl = await (browser.getUrl());            
    console.log('Current Url is ' + await currentUrl);    // ����� � ������� https://v5.webdriver.io/docs/api.html
     
    
    const header = await $('.postHeaderTitle');
    console.log('Text is ' + await header.getText());   // ����� � ������� API Docs

    const JSONWire = await $('//*[text()="JSONWire protocol"]');
    console.log('Text is ' + await JSONWire.getAttribute('href'));        // ����� � ������� https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol
                                                                          
 
    const elem = $('#search_input_react');
    elem.setValue('test is')          // ����� � ����� ���� 'test is'
    await browser.pause(2000);
    let input = $('#search_input_react');
    input.addValue(' DONE!')       // ���������� � ����� ���� 'DONE!'
    await browser.pause(5000);     // ����� � ����� �� 5�.
})
