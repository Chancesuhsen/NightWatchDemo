module.exports = {
    url: function () {
        return this.api.launchUrl + ''
    },
    elements: {
        logo: 'div>img',
        title: 'div>h2',
        footer: 'footer>p'
    },
    commands: [{
        isLoaded() {
            return this
                .waitForElementPresent('@logo')
                .waitForElementPresent('@title')
                .waitForElementPresent('@footer')
        },

        footerText(){
            //return this
            //.assert.element.text.to.equal
                assert.element('@footer').text.to.equal('© 2018 - Magenic Technologies')
                //.assert.element('@footer').text.to.equal('© 2018 - Magenic Technologies')
        }
    }],
};