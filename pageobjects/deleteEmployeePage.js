module.exports = {
    url: function () {
        return this.api.launchUrl + 'Employees/Delete/'
    },

    elements: {
        title: 'div>h2',
        warning: 'div>h3',
        subTitle: 'div>h4',
        firstNameLabel: 'dl dt:nth-of-type(4)',
        firstName: 'dl dd:nth-of-type(4)',
        lastNameLabel: 'dl dt:nth-of-type(5)',
        lastName: 'dl dd:nth-of-type(5)',
        addressLabel: 'dl dt:nth-of-type(6)',
        address: 'dl dd:nth-of-type(6)',
        cityLabel: 'dl dt:nth-of-type(1)',
        city: 'dl dd:nth-of-type(1)',
        stateLabel: 'dl dt:nth-of-type(3)',
        departmentLabel: 'dl dt:nth-of-type(2)',
        department: 'dl dd:nth-of-type(2)',
        delete: 'input[type=submit]',
        backToList: 'div[class*=form] a[href="/Employees"]',
        state: 'dl dd:nth-of-type(3)'
    },

    commands: [{
        isLoaded() {
            return this
                .waitForElementPresent('@title')
                .waitForElementPresent('@delete')
        },

        create() {
            this.click('@create')
            return this.api.page.employeePage()
                .isLoaded()
        },

        selectState(option) {
            var elements = document.querySelectorAll("#StateID>Option");
            Array.prototype.forEach.call(elements, function(item) {
            var elem = item;
            if(elem.text==option) {
                console.log(elem.value)}
            }); 
        },

        verifyLabels() {
            this.getText('@firstNameLabel', function(txt){
                    this.assert.equal(txt.value, this.globals.employeeLabels.firstName)
            })
                .getText('@lastNameLabel', function(txt){
                    this.assert.equal(txt.value, this.globals.employeeLabels.lastName)
            })
                .getText('@addressLabel', function(txt){
                    this.assert.equal(txt.value, this.globals.employeeLabels.address)
            })
                .getText('@stateLabel', function(txt){
                    this.assert.equal(txt.value, this.globals.employeeLabels.state)
            })
                .getText('@cityLabel', function(txt){
                    this.assert.equal(txt.value, this.globals.employeeLabels.city)
            })
                .getText('@departmentLabel', function(txt){
                    this.assert.equal(txt.value, this.globals.employeeLabels.department)
            })
        },

        verifyEmployeeDetails() {
            this.getText('@city', function(txt){
                this.assert.equal(txt.value, this.globals.employeeDetails.city)
            })
            this.getText('@department', function(txt){
                this.assert.equal(txt.value, this.globals.employeeDetails.department)
            })
            this.getText('@state', function(txt){
                this.assert.equal(txt.value, this.globals.employeeDetails.state)
            })
            this.getText('@firstName', function(txt){
                this.assert.equal(txt.value, this.globals.employeeDetails.firstName)
            })
            this.getText('@lastName', function(txt){
                this.assert.equal(txt.value, this.globals.employeeDetails.lastName)
            })
            this.getText('@address', function(txt){
                this.assert.equal(txt.value, this.globals.employeeDetails.address)
            })
        },

        clickDelete: function(browser) {
            return new Promise(function(resolve, reject) {
                browser.click('input[type=submit]', function(){
                    resolve(browser.page.employeePage())
                })
            })
        },
    }],
};