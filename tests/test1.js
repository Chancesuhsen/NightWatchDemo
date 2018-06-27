/**
 * Sample automated test scenario for Nightwatch.js
 *
 * > it navigates to google.com and searches for nightwatch,
 *   verifying if the term 'The Night Watch' exists in the search results
 */

module.exports = {
    '@tags': ['dev'],
  
    'demo test google' : function (client) {
      homepage = new client.page.home()
      homepage.navigate()
        .isLoaded()
        .assert.containsText('@footer','© 2018 - Magenic Technol')
        //.assert.equal('@footer.value', '© 2018 - Magenic Technologies')
        .assert.value('@footer', '© 2018 - Magenic Technologies')
        .getText('@footer', function(txt){
          assert.equal(txt, '© 2018 - Magenic Technologies')
        })
        //.expect.element('@footer').text.to.equal('© 2018 - Magenic Technologies')
        //var msg = ""
        .getText('@footer', function(msg) {
          console.log('Footer is equal to: ' + msg.value)
        })
        .api.pause();
    },
  
    // 'part two' : function(client) {
    //   client
    //     .setValue('input[type=text]', ['nightwatch', client.Keys.ENTER])
    //     .pause(1000)
    //     .assert.containsText('#main', 'Night Watch')
    //     .end();
    // }
  };