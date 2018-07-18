module.exports = {
    url: function () {
        return this.api.launchUrl + ''
    },
    elements: {
        logo: 'div>img',
        title: 'div>h2',
        horizontalRule: 'div>hr'

    },
    commands: [{
        isLoaded() {
            return this
                .waitForElementPresent('@logo')
                .waitForElementPresent('@title')
                .waitForElementPresent('@horizontalRule')
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