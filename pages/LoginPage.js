class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async gotoLoginPage() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.page.type('#user-name', username);
        await this.page.type('#password', password);
        await this.page.click('#login-button');
    }
}

module.exports = LoginPage;
