/**
 * Verify the Training Page 2 pages
 *
 */

module.exports = {
    //'@tags': ['dev'],

    'Open Training Page 2 Login verify loaded' : function (browser) {
        TPLogin = browser.page.trainingPage2LoginPage()

        TPLogin.navigate()
            .isLoaded()
        TPLogin.verifyHeadings()
        TPLogin.verifyLogo()
        TPLogin.invalidLogin()
        TPLogin.login()
        browser.end()
    },

    'Open Training Page 2 Home Page and verify it is loaded' : function (browser) {
        TPHome = browser.page.trainingPage2HomePage()

        TPHome.navigate()
            .isLoaded()
        TPHome.verifyHeadings()
        TPHome.verifyLogo()
        TPHome.verifyPageToggle()
        TPHome.verifyP()
        browser.end()
    }
}