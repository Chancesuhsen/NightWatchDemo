/**
 * Verify the Training Page 1 About Page
 *
 */

module.exports = {
    '@tags': ['dev'],

    'Open Training Page 1 About Page and verify content' : function (browser) {
        TPAbout = browser.page.trainingPages.trainingPage1AboutPage()

        TPAbout.navigate()
            .isLoaded()
        TPAbout.verifyHeadings()
        TPAbout.verifyLogo()
        TPAbout.verifyMapImage()
        TPAbout.verifyHomeAboutToggle()
        TPAbout.verifyContactInfo()
        browser.end()
    },

    'Open Training Page 1 Login verify content' : function (browser) {
        TPHome = browser.page.trainingPages.trainingPage1HomePage()

        TPHome.navigate()
            .isLoaded()
        TPHome.verifyHeadings()
        TPHome.verifyLogo()
        TPHome.verifyHomeAboutToggle()
        TPHome.verifyP()
        browser.end()
    },

    'Open Training Page 1 Login verify invalid cridentials error' : function (browser) {
        TPLogin = browser.page.trainingPages.trainingPage1LoginPage()

        TPLogin.navigate()
            .isLoaded()
        TPLogin.verifyHeadings()
        TPLogin.verifyLogo()
        TPLogin.invalidLogin()
        browser.end()
    },

    'Open Training Page 1 verify succesful Login' : function (browser) {
        TPLogin = browser.page.trainingPages.trainingPage1LoginPage()

        TPLogin.navigate()
            .isLoaded()
        TPLogin.login()
        browser.end()
    },
}