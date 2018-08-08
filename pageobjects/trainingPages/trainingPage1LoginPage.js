module.exports = {
    url: function () {
        return this.api.launchUrl + '/Static/Training1/loginpage.html'
    },

    elements: {
        title: 'h2',
        logo: 'img',
        subTitle: 'p[style*=large]',
        usernameInput: 'input[id=UserName]',
        passwordInput: 'input[id=Password]',
        loginButton: 'button[id=Login]',
        loginError: 'p[id=LoginError]',
    },

    commands: [{
        isLoaded() {
            return this
                .waitForElementPresent('@title')
                .waitForElementPresent('@logo')
        },

        login() {
            this.setValue('@usernameInput', this.api.globals.TPCridentials.username)
            .api.pause(400)
            this.setValue('@passwordInput', this.api.globals.TPCridentials.password)
            .api.pause(400)
            this.click('@loginButton')
            return this.api.page.trainingPages.trainingPage1HomePage()
                .isLoaded()
        },

        verifyHeadings() {
            this.getText('@title', function(txt){
                this.assert.equal(txt.value, 'Practice Site 1')
            })
            .getText('@subTitle', function(txt){
                this.assert.equal(txt.value, 'Login')
            })
        },

        invalidLogin() {
            this.setValue('@usernameInput', this.api.globals.TPCridentials.invalidUsername)
            .api.pause(400)
            this.setValue('@passwordInput', this.api.globals.TPCridentials.invalidPassword)
            .api.pause(400)
            this.click('@loginButton')
            this.getText('@loginError', function(txt){
                this.assert.equal(txt.value, 'Invalid name or password')
            })
            this.clearValue('@usernameInput')
            this.clearValue('@passwordInput')
        },

        verifyLogo() {
            return this
                .getElementSize('@logo', function(img) {
                    this.assert.equal(img.value.width, 350)
                    this.assert.equal(img.value.height, 77)
                })
        }
    }],
};