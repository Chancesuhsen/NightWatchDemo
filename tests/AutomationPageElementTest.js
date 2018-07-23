/**
 * Interact with the Automation Page Element page
 *
 */

module.exports = {
    '@tags': ['dev'],
  
    'Navigate to the Magneic Automation Home Page verify the base page content' : function (browser) {
      element = browser.page.automationPageElementPage()
      element.navigate()
        .interactShowDialog()
        .interactShowDialog2()
      },
  };