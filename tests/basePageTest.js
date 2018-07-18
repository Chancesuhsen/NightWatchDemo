/**
 * Verify the Navigation Menu and Base Page attributes
 *
 */

module.exports = {
    //'@tags': ['dev'],
  
    'Navigate to the Magneic Automation Home Page verify the base page content' : function (browser) {
      base = browser.page.basePage()
      home = browser.page.homePage()
      base.navigate()
        .verifyHeadingAndFooter('Automation Test Site')
        .verifyNavBarText()
      },

      'Navigate Manage Employee Page' : function (browser) {
        base.navEmployee()
        base.verifyHeadingAndFooter('Index')
    },
  };