/**
 * Sample automated test scenario for Nightwatch.js
 *
 * > it navigates to google.com and searches for nightwatch,
 *   verifying if the term 'The Night Watch' exists in the search results
 */

module.exports = {
    //'@tags': ['dev'],
  
    'demo test google' : function (client) {
      homepage = new client.page.homePage()
      homepage.navigate()
        .isLoaded()
        .verifyLogo()
        .assert.containsText('@title','Automation')
        .verify.visible('@logo')
        .getText('@title', function(txt) {
          client.assert.equal(txt.value, 'Automation Test Site')
        })
    },
  };