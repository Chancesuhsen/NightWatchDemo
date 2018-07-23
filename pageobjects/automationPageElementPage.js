module.exports = {
    url: function () {
        return this.api.launchUrl + '/Automation'
    },
    elements: {
        title: 'div>h2',
        showDialogButton: '#showDialog1',
            loadingImage: '#LoadingImage',
            loadingDiv: 'div[id=loading-div]',
            closeButton: '#CloseButtonShowDialog',
        showDialogButton2: '#showDialog2',
            dialogBox: 'div[class*="ui-dialog-buttons ui-draggable"]',
            dialogTitle: '#ui-id-1',
            xButton: 'div[class*=titlebar] button',
            dialogMessage1: 'div[id=dialog-message] p:nth-of-type(1)',
            dialogMessage2: 'div[id=dialog-message] p:nth-of-type(2)',
            okButton: 'div[class=ui-dialog-buttonset] button',
    },
    commands: [{
        isLoaded() {
            return this
                .waitForElementPresent('@title')
                .waitForElementPresent('@create')
                .waitForElementPresent('@table')
        },
        interactShowDialog() {
            return this
                .assert.attributeEquals('@loadingDiv', 'style', 'opacity: 1; display: none;')
                .click('@showDialogButton')
                .assert.attributeEquals('@loadingDiv', 'style', 'opacity: 1; display: block;')
                .assert.elementPresent('@loadingImage')
                .assert.elementPresent('@closeButton')
                .assert.elementPresent('@loadingDiv')
                .click('@closeButton')
                .assert.attributeEquals('@loadingDiv', 'style', 'opacity: 1; display: none;')
        },

        interactShowDialog2() {
            return this
                .click('@showDialogButton2')
                .assert.attributeContains('@dialogBox', 'style', 'display: block;')
                .assert.elementPresent('@dialogBox')
                .getText('@dialogTitle', function(txt) {
                    this.assert.equal(txt.value, 'Download complete')
                })
                .getText('@dialogMessage1', function(txt) {
                    this.assert.equal(txt.value, 'Your files have downloaded successfully into the My Downloads folder.')
                })
                .getText('@dialogMessage2', function(txt) {
                    this.assert.equal(txt.value, 'Currently using 36% of your storage space.')
                })
                .click('@showDialogButton2')
                .click('@xButton')
        },
    }],
};