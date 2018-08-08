module.exports = {
    url: function () {
        return this.api.launchUrl + '/Employees/Create'
    },

    elements: {
        title: 'div>h2',
        subTitle: 'div>h4',
        firstNameLabel: 'div>label[for=EmpFirstName]',
        firstNameInput: 'input[id=EmpFirstName]',
        lastNameLabel: 'div>label[for=EmpLastName]',
        lastNameInput: 'input[id=EmpLastName]',
        addressLabel: 'div>label[for=EmpAddress]',
        addressInput: 'input[id=EmpAddress]',
        cityLabel: 'div>label[for=CityID]',
        cityInput: 'input[id=CityObj_CityName]',
        stateLabel: 'div>label[for=StateID]',
        departmentLabel: 'div>label[for=DepartmentID]',
        create: 'input[value=Create]',
        backToList: 'div>a',
        stateDropdown: 'div>select[name=StateID]',
        stateOptions: 'select[id=StateID]'
    },

    commands: [{
        isLoaded() {
            return this
                .waitForElementPresent('@title')
                .waitForElementPresent('@create')
        },

        create() {
            this.click('@create')
            return this.api.page.employeePage()
                .isLoaded()
        },

        selectState(option) {
            return this.setValue('select[id=StateID]', option)
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

        fillEmployeeDetails() {
            this.setValue('@firstNameInput', this.api.globals.employeeDetails.firstName)
            .api.pause(400)
            this.setValue('@lastNameInput', this.api.globals.employeeDetails.lastName)
            .api.pause(400)
            this.setValue('@addressInput', this.api.globals.employeeDetails.address)
            .api.pause(400)
            this.setValue('@cityInput', this.api.globals.employeeDetails.city)
            .api.pause(400)
            this.selectState(this.api.globals.employeeDetails.state)
        }
    }],
};