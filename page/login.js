exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page
        this.username_textbox = page.locator("//input[@id='username']")
        this.password_testbox = page.locator("//input[@id='password']")
        this.login_button = page.locator("//button[@class='radius']")
        this.loguot_button = page.locator("//a[@class='button secondary radius']")
    }

    async gotoLoginPage() {
        await this.page.goto('https://the-internet.herokuapp.com/login')
    }

    async login(username, password) {
        await this.username_textbox.fill(username)
        await this.password_testbox.fill(password)
        await this.login_button.click()
    }

    async logout(){
        await this.loguot_button.click()
    }


}

