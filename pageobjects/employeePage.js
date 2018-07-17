module.exports = {
    url: function () {
        return this.api.launchUrl + '/Employees'
    },
    elements: {
        title: 'div>h2',
        create: 'div>p>a',
        table: 'table',
        tableRow: 'tbody>tr'
    },
    commands: [{
        isLoaded() {
            return this
                .waitForElementPresent('@title')
                .waitForElementPresent('@create')
                .waitForElementPresent('@table')
        },
        create() {
            this.click('@create')
            return this.api.page.createEmployeePage()
                .isLoaded()

        },
    }],
};