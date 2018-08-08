module.exports = {
    url: function () {
        return this.api.launchUrl + '/Static/Training2/HomePage.html'
    },

    elements: {
        title: 'div>h2',
        logo: 'img',
        subTitle: 'p[id=WelcomeMessage]',
        homeButton: 'input[id=Home]',
        howButton: 'input[id=HowWork]',
        asyncButton: 'input[id=Async]',
        aboutButton: 'input[id=About]',
        p1: "div p:nth-of-type(1)",
        p2: "div p:nth-of-type(2)",
        p3: "div p:nth-of-type(3)",
        p4: "div p:nth-of-type(4)",
        p5: "div p:nth-of-type(5)",
        p6: "div p:nth-of-type(6)"
    },

    commands: [{
        isLoaded() {
            return this
                .waitForElementPresent('@title')
                .waitForElementPresent('@logo')
        },

        verifyHeadings() {
            this.getText('@title', function(txt){
                this.assert.equal(txt.value, 'Practice Site 2')
            })
            .getText('@subTitle', function(txt){
                this.assert.equal(txt.value, 'Welcome Home')
            })
        },

        verifyLogo() {
            return this
                .getElementSize('@logo', function(img) {
                    this.assert.equal(img.value.width, 350)
                    this.assert.equal(img.value.height, 77)
                })
        },

        verifyPageToggle() {
            return this
                .assert.cssProperty('@homeButton', 'background-color', 'rgba(121, 190, 66, 1)')
                .assert.cssProperty('@homeButton', 'color', 'rgba(255, 255, 255, 1)')
                .assert.cssProperty('@howButton', 'background-color', 'rgba(238, 238, 238, 1)')
                .assert.cssProperty('@howButton', 'color', 'rgba(0, 0, 0, 1)')
                .assert.cssProperty('@asyncButton', 'background-color', 'rgba(238, 238, 238, 1)')
                .assert.cssProperty('@asyncButton', 'color', 'rgba(0, 0, 0, 1)')
                .assert.cssProperty('@aboutButton', 'background-color', 'rgba(238, 238, 238, 1)')
                .assert.cssProperty('@aboutButton', 'color', 'rgba(0, 0, 0, 1)')
        },

        verifyP() {
            this.getText('@p1', function(txt){
                    this.assert.equal(txt.value, 'We blah blah blah')
            })
                .getText('@p2', function(txt){
                    this.assert.equal(txt.value, 'Lorem ipsum dui lorem fringilla massa habitant etiam quam,' + 
                    ' suscipit libero viverra cubilia tempus nullam ultrices conubia hac, ut luctus mi molestie' + 
                    ' nulla lorem bibendum odio consequat nisi ullamcorper.')
            })
                .getText('@p3', function(txt){
                    this.assert.equal(txt.value, 'Justo euismod tortor eget pellentesque ad varius arcu sapien' + 
                    ' dui ornare luctus nec, praesent ut praesent etiam pellentesque metus senectus tincidunt netus proin faucibus.')
            })
                .getText('@p4', function(txt){
                    this.assert.equal(txt.value, 'Suscipit blandit class est porttitor netus semper aenean ' + 
                    'cubilia adipiscing, feugiat nunc tortor nostra nulla habitant placerat maecenas nam ' + 
                    'vivamus consequat nam fermentum ac risus blandit neque.')
            })
                .getText('@p5', function(txt){
                    this.assert.equal(txt.value, 'Curabitur sodales metus hac dapibus nec mauris nisl, massa' 
                    + ' ac quam ultrices adipiscing sem, libero potenti inceptos accumsan imperdiet curabitur.')
            })
                .getText('@p6', function(txt){
                    this.assert.equal(txt.value, 'Senectus fusce ultricies nullam tincidunt placerat id etiam' + 
                    ' est non, dictumst aliquam tristique tincidunt pellentesque blandit duis cubilia fringilla,' + 
                    ' aenean ut ultrices potenti congue odio sit eros.')
            })
        },
    }],
};