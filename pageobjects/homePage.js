module.exports = {
    url: function () {
        return this.api.launchUrl + ''
    },
    elements: {
        logo: 'div>img',
        title: 'div>h2',
    },
    commands: [{
        isLoaded() {
            return this
                .waitForElementPresent('@logo')
                .waitForElementPresent('@title')
        },
    }],
};