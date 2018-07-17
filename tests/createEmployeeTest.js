/**
 * Create an Employee on the Manage Employee Create New page
 *
 * > Navigate to the Manage Employee Page Verify page 
 *   verifying if the term 'The Night Watch' exists in the search results
 */

module.exports = {
    //'@tags': ['dev'],
  
    'Open Employee page and navigate to create employee' : function (browser) {
      employee = browser.page.employeePage()
      createEmployee = browser.page.createEmployeePage()
      
      employee.navigate()
        .isLoaded()
        .create()
    },

    'Verfiy the create Employee Page' : function (browser) {        
        createEmployee.getEmployeeLabels()
        createEmployee.verifyLabels()
    },

    'Fill the Employee Details' : function (browser) {        
        createEmployee.fillEmployeeDetails()
    },

    'Click Create - Navigate back to Manage Employees': function(browser) {
        createEmployee.create()
    }
  };