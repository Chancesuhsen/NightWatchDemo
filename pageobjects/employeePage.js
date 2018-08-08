module.exports = {
    url: function () {
        return this.api.launchUrl + '/Employees'
    },
    elements: {
        title: 'div>h2',
        create: 'div>p>a',
        table: 'table[class=table]',
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

        getNumberOfRows: function(browser) {
            return new Promise(function(resolve, reject) {
                browser.elements("css selector", 'table tr', function(result) {
                    resolve(result.value.length)
                })
            })
        },

        getTDText: function(browser, row, column) {
            return new Promise(function(resolve, reject) {
                browser.moveToElement('tr:nth-child('+ row +') > td:nth-child('+ column +')', 0, 0, function(){
                    browser.getText('tr:nth-child('+ row +') > td:nth-child('+ column +')', function(txt) {
                        resolve(txt.value)
                    })
                })
            })
        },

        getLastTableRow: function(browser, columns, done) {
            return new Promise(function(resolve, reject) {
                employee.getNumberOfRows(browser).then(function(rows){
                    var column = 1
                    var tr = new Array
                    let promises = []
                    for(let k = 1; k <= columns; k++){
                        promises.push(new Promise((resolve, reject) => {
                                employee.getTDText(browser, rows, column).then(function(txt){
                                            tr.push(txt)
                                            console.log('column value: ' + column + ' Text Value: ' + tr)
                                            resolve()
                                        })
                        })
                    )
                    column++
                    }
                    Promise.all(promises)
                    .then(() => {
                        resolve(tr)
                    })
                    .catch((e) => {
                        // handle errors here
                    });
                })
            })
        },

        // getTableRowTextArray: function(browser, columns) {
        //     return new Promise(function(resolve, reject) {
        //         employee.getNumberOfRows(browser).then(function(rows){
        //             var row = 2
        //             var column = 1
        //             var tr = new Array
        //             var table = new Array
        //             for(let k = 1, p = Promise.resolve(); k < rows; k++){
        //                 p = p.then(_ => new Promise(resolve =>
        //                     setTimeout(function () {
        //                         if (column == columns + 1){
        //                             column = column - columns
        //                             table.push(tr)
        //                             tr = new Array
        //                             row++
        //                         }
        //                         console.log('Row:' + row + 'Column: ' + column)
        //                         employee.getTDText(browser, row, column).then(function(txt){
        //                                     console.log('Current Table Value:' + table)
        //                                     tr.push(txt)
        //                                     column++
        //                                 })
        //                         resolve();
        //                     }, Math.random() * 1000)
        //                 ));
        //             }
        //         })
        //     })
        // },

        verifyEmployeeDetails(row) {
            return this
                .assert.equal(row[0], this.api.globals.employeeDetails.city)
                .assert.equal(row[1], this.api.globals.employeeDetails.department)
                .assert.equal(row[2], this.api.globals.employeeDetails.state)
                .assert.equal(row[3], this.api.globals.employeeDetails.firstName)
                .assert.equal(row[4], this.api.globals.employeeDetails.lastName)
                .assert.equal(row[5], this.api.globals.employeeDetails.address)
        },

        deleteEmployee: function(browser, row) {
            return new Promise(function(resolve, reject) {
                browser.moveToElement('tr:nth-child('+ row +')', 0, 0, function(){
                    browser.click('tr:nth-child('+ row +') a:nth-of-type(3)', function(){
                        resolve(browser.page.deleteEmployeePage())
                    })
                })
            })
        },
        
        deleteLastEmployee: function(browser){
            return new Promise(function(resolve, reject) {
                employee.getNumberOfRows(browser).then(function(row){
                    resolve(employee.deleteEmployee(browser, row))
                })
            })
        }
    }],
};