const chrome = require('selenium-webdriver/chrome');
const { expect } = require('chai');
const screen = {
  width: 1280,
  height: 720
};
const {Builder, By, Capabilities, Key, until} = require('selenium-webdriver');


let firefox = require('selenium-webdriver/firefox');
const VERSIONS = ['65.0'];
let driver = new Builder().forBrowser('firefox')
            .withCapabilities(Capabilities.firefox().setBrowserVersion('65.0'))
            .usingServer('http://enriquetejeda.com:4444/wd/hub')
            .setFirefoxOptions(
                new firefox.Options().headless())
            .build();



describe('Test Index.html ', () => {

    it('Pagina: index.html - Seccion: Tabla Precio - Verificar Precio', async () => {


        await driver.get('http://enriquetejeda.com:8089/index.html');
        await driver.wait(until.elementLocated(By.className('phones')));
        let link = await driver.findElements({css:'.price-2'});
        text = await link.getText();
        expect(text).to.equal('$15');

    });




    after(async () => driver.quit());
});
