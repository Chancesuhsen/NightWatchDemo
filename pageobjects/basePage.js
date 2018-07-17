module.exports = {
    url: function () {
        return this.api.launchUrl + ''
    },
    elements: {
        home: 'li[id=homeButton]',
        manage: 'ul>li:nth-of-type(2)',
            employee: 'li[id=EmployeeButton]',
            departments: '#DepartmentsButton',
        automation: 'ul>li:nth-of-type(3)',
            pageElements: '#AutomationButton',
            swaggerAPI : '#SwaggerButton',
            iFrame: 'li>a[href="/Automation/iFramePage"]',
        training: 'li[id=TrainingDropdown]',
            trainingPage1: 'a[href="/Static/Training1/loginpage.html"]',
            trainingPage2: 'a[href="/Static/Training2/loginpage.html"]',
            trainingPage3: 'a[href="/Static/Training3/loginpage.html"]',
        contact: 'li[id=ContactButton]',
        heading: 'div>h2',
        footer: 'footer>p'
    },
    commands: [{
        isLoaded() {
            return this
                .waitForElementPresent('@home')
                .waitForElementPresent('@manage')
                .waitForElementPresent('@automation')
                .waitForElementPresent('@training')
                .waitForElementPresent('@contact')
        },

        navigateHome() {
            return this
                .click('@home')
                .waitForElementPresent('@footer')
                return this.api.page.homePage()
                
        },

        navEmployee() {
            return this
                .click('@manage')
                .waitForElementPresent('@employee')
                .click('@employee')
        },

        verifyNavBarText() {
            return this
                .getText('@home', function(txt) {
                    this.assert.equal(txt.value, 'Home')
                })
                .verifyManageMenuText()
                .verifyAutomationMenuText()
                .verifyTrainingMenuText()
                .getText('@contact', function(txt) {
                    this.assert.equal(txt.value, 'Contact')
                })
        },

        verifyManageMenuText() {
            return this
                .getText('@manage', function(txt) {
                    this.assert.equal(txt.value, 'Manage')
                })
                .click('@manage')
                .getText('@employee', function(employee) {
                    this.assert.equal(employee.value, 'Employee')
                })
                .getText('@departments', function(txt) {
                    this.assert.equal(txt.value, 'Departments')
                })
                .click('@manage')
        },

        verifyAutomationMenuText() {
            return this
                .getText('@automation', function(txt) {
                    this.assert.equal(txt.value, 'Automation')
                })
                .click('@automation')
                .getText('@pageElements', function(txt) {
                    this.assert.equal(txt.value, 'Page Elements')
                })
                .getText('@swaggerAPI', function(txt) {
                    this.assert.equal(txt.value, 'Swagger API')
                })
                .getText('@iFrame', function(txt) {
                    this.assert.equal(txt.value, 'iFrame')
                })
                .click('@automation')
        },

        verifyTrainingMenuText() {
            return this
                .getText('@training', function(txt) {
                    this.assert.equal(txt.value, 'Training')
                })
                .click('@training')
                .getText('@trainingPage1', function(txt) {
                    this.assert.equal(txt.value, 'Training Page 1')
                })
                .getText('@trainingPage2', function(txt) {
                    this.assert.equal(txt.value, 'Training Page 2')
                })
                .getText('@trainingPage3', function(txt) {
                    this.assert.equal(txt.value, 'Training Page 3')
                })
                .click('@training')
        },

        verifyHeading(heading) {
            return this
                .getText('@heading', function(txt){
                    this.assert.equal(txt.value, heading)
                })
        },

        verifyFooter() {
            return this
                .assert.containsText('@footer','© 2018 - Magenic Technol')
                .getText('@footer', function(msg) {
                console.log('Footer is equal to: ' + msg.value)
                })
                .getText('@footer', function(txt){
                    this.assert.equal(txt.value, '© 2018 - Magenic Technologies')
                })
        },

        verifyHeadingAndFooter(heading) {
            return this
                .verifyHeading(heading)
                .verifyFooter()
        },

    }],
};