module.exports = {
    url: function () {
        return this.api.launchUrl + '/Static/Training1/About.html'
    },

    elements: {
        title: 'div>h2',
        logo: 'div[class=jumbotron] img',
        homeButton: 'input[id=Home]',
        aboutButton: 'input[id=About]',
        tHead: 'table[id=AboutTable] tr td',
        emailLabel: "table[id=AboutTable] tbody tr:nth-of-type(1) td:nth-of-type(1)",
        email: "table[id=AboutTable] tbody tr:nth-of-type(1) td:nth-of-type(2)",
        phoneLabel: 'table[id=AboutTable] tbody tr:nth-of-type(2) td:nth-of-type(1)',
        phone: 'table[id=AboutTable] tbody tr:nth-of-type(2) td:nth-of-type(2)',
        mapImage: 'p img'
    },

    commands: [{
        isLoaded() {
            return this
                .waitForElementPresent('@title')
                .waitForElementPresent('@logo')
        },

        verifyHeadings() {
            this.getText('@title', function(txt){
                this.assert.equal(txt.value, 'Practice Site 1')
            })
        },

        verifyLogo() {
            return this
                .getElementSize('@mapImage', function(img) {
                    this.assert.equal(img.value.width, 200)
                    this.assert.equal(img.value.height, 151)
                })
                .assert.cssProperty('@mapImage', 'border-right-color', 'rgba(0, 0, 0, 1)')
        },

        verifyMapImage() {
            return this
                .getElementSize('@logo', function(img) {
                    this.assert.equal(img.value.width, 350)
                    this.assert.equal(img.value.height, 77)
                })
        },

        verifyHomeAboutToggle() {
            return this
                .assert.cssProperty('@aboutButton', 'background-color', 'rgba(121, 190, 66, 1)')
                .assert.cssProperty('@aboutButton', 'color', 'rgba(255, 255, 255, 1)')
                .assert.cssProperty('@homeButton', 'background-color', 'rgba(238, 238, 238, 1)')
                .assert.cssProperty('@homeButton', 'color', 'rgba(0, 0, 0, 1)')
        },

        verifyContactInfo() {
            this.getText('@emailLabel', function(txt){
                    this.assert.equal(txt.value, 'Email')
            })
                .getText('@email', function(txt){
                    this.assert.equal(txt.value, 'FakeSample@faker.fake')
            })
                .getText('@phone', function(txt){
                    this.assert.equal(txt.value, '+1 (555) 555-5555')
            })
                .getText('@phoneLabel', function(txt){
                    this.assert.equal(txt.value, 'Phone')
            })
                .getText('@tHead', function(txt){
                    this.assert.equal(txt.value, 'Contact Info')
            })
        },
    }],
};