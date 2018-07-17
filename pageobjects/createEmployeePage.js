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
            var elements = document.querySelectorAll("#StateID>Option");
            Array.prototype.forEach.call(elements, function(item) {
            var elem = item;
            if(elem.text==option) {
                console.log(elem.value)}
            }); 
        },

        generateEmployeeDetails() {
            employeeDetails = {
            'firstName': 'Chance',//faker.name.firstName(),
            'lastName': 'Suhsen', //faker.name.lastName(),
            'address': '1600 Utica Ave. S', //faker.fake("{{address.streetAddress}} {{address.streetSuffix}}"),
            'city': 'Saint Louis Park', //faker.address.city(),
            'state': 'California',
            'stateOption': '4',
            'department': 'BA',
            'departmentOption': '7'
            }
            
            return employeeDetails;
        },

        getEmployeeLabels() {
            console.log("getlabels")
            employeeLabels = {
            'firstName': 'First Name',
            'lastName': 'Last Name', 
            'address': 'Address',
            'state': 'State',
            'city': 'City',
            'department': 'Department',
            }
            
            return employeeLabels;
        },

        verifyLabels() {
            this.getText('@firstNameLabel', function(txt){
                    this.assert.equal(txt.value, employeeLabels.firstName)
            })
                .getText('@lastNameLabel', function(txt){
                    this.assert.equal(txt.value, employeeLabels.lastName)
            })
                .getText('@addressLabel', function(txt){
                    this.assert.equal(txt.value, employeeLabels.address)
            })
                .getText('@stateLabel', function(txt){
                    this.assert.equal(txt.value, employeeLabels.state)
            })
                .getText('@cityLabel', function(txt){
                    this.assert.equal(txt.value, employeeLabels.city)
            })
                .getText('@departmentLabel', function(txt){
                    this.assert.equal(txt.value, employeeLabels.department)
            })
        },

        fillEmployeeDetails() {
            var employeeDetails = this.generateEmployeeDetails()
            this.setValue('@firstNameInput',employeeDetails.firstName)
            .api.pause(400)
            this.setValue('@lastNameInput',employeeDetails.lastName)
            .api.pause(400)
            this.setValue('@addressInput', employeeDetails.address)
            .api.pause(400)
            this.setValue('@cityInput',employeeDetails.city)
            .api.pause(400)
            this.click('@stateDropdown')
            this.waitForElementPresent('@stateOptions')
            this.click('select[id=StateID]>option:nth-of-type('+employeeDetails.stateOption+')')
            this.click('@stateDropdown')
            //.api.pause(5000)
        }
    }],
};