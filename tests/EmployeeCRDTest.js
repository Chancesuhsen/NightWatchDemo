/**
 * Create, verify and delete employee. Verfiy the Create and Delete pages
 *
 */

module.exports = {
    //'@tags': ['dev'],

    'Open Employee page and navigate to create employee' : function (browser) {
        employee = browser.page.employeePage()
        createEmployee = browser.page.createEmployeePage()
        deleteEmployee = browser.page.deleteEmployeePage()
        
        employee.navigate()
            .isLoaded()
            .create()
        createEmployee.verifyLabels()
    },

    'Fill employee details and create Employee' : function () {        
        createEmployee.fillEmployeeDetails()
        createEmployee.create()
    },
        
    'Verify most recent employee created' : function (browser, done) {
        browser.perform(function (browser, done){
            employee.getLastTableRow(browser, 7).then(function(table) {
                employee.verifyEmployeeDetails(table)
                console.log('Table Value from test: ' + table)
                done()
            })
        })
    },

    'Click delete on the last employee on the table': function(browser) {
        employee.deleteLastEmployee(browser)
        deleteEmployee.isLoaded()
        deleteEmployee.verifyEmployeeDetails()
        deleteEmployee.verifyLabels()
        deleteEmployee.clickDelete(browser)
        browser.end()
    }
};