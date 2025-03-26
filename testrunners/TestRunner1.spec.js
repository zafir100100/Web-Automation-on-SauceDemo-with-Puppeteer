const puppeteer = require('puppeteer');
const LoginPage = require('../pages/LoginPage');
const ProductPage = require('../pages/ProductPage');
require('dotenv').config();

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);

    try {
        await loginPage.gotoLoginPage();

        if (!(await page.title()).includes('Swag Labs')) {
            console.error('❌ Title does not match expected.');
            await browser.close();
            return;
        }

        await loginPage.login('standard_user', 'secret_sauce');

        const labelText = await productPage.getProductsLabel();
        if (labelText !== 'Products') {
            console.error('❌ Product page not loaded correctly.');
            await browser.close();
            return;
        }

        console.log('✅ Login and product page verification successful!');
    } catch (error) {
        console.error(`❌ Test failed: ${error.message}`);
    } finally {
        await browser.close();
    }
})();
