module.exports = {
    url: function () {
        return this.api.launchUrl + ''
    },
    elements: {
        manageToggle: 'div.menu a.manuals',
        manageButton: 'div.navbar-collapse.collapse > ul > li:nth-child(2) > a'
    },
    commands: [{
        isLoaded() {
            return this
                .waitForElementPresent('@page')
        }
    }],
};