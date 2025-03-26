class ProductPage {
    constructor(page) {
        this.page = page;
    }

    async getProductsLabel() {
        return await this.page.$eval('.title', el => el.textContent);
    }
}

module.exports = ProductPage;
