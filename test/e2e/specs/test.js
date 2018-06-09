// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'Add/Delete-Item/Delete-All-Items/Edit/Save Items TODO tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    // .assert.elementCount('img', 1)
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#component', 5000)
      .assert.elementPresent('#additem')
      .assert.containsText('h4', 'ADD ITEM')
      .assert.visible('input#add[type=text]')
      .setValue('input#add[type=text]', 'Hello World')
      .waitForElementVisible('button[name=btn-add]', 1000)
      .click('button[name=btn-add]')
      .pause(1000)
      .assert.containsText('#component1 > ul:nth-child(4) > li:nth-child(4) > label:nth-child(2) > span:nth-child(2)', 'Hello World')
      .assert.visible('#todo-remove-4')
      .click('#todo-remove-4')
      .assert.elementNotPresent('#component1 > ul:nth-child(4) > li:nth-child(4) > label:nth-child(2) > span:nth-child(2)')
      .pause(1000)
      .assert.visible('#todo-remove-3')
      .click('#todo-remove-3')
      .assert.elementNotPresent('#component1 > ul:nth-child(4) > li:nth-child(3) > label:nth-child(2) > span:nth-child(2)')
      .pause(1000)
      .assert.visible('#todo-remove-2')
      .click('#todo-remove-2')
      .assert.elementNotPresent('#component1 > ul:nth-child(4) > li:nth-child(2) > label:nth-child(2) > span:nth-child(2)')
      .pause(1000)
      .assert.visible('#todo-remove-1')
      .click('#todo-remove-1')
      .assert.elementNotPresent('#component1 > ul:nth-child(4) > li:nth-child(1) > label:nth-child(2) > span:nth-child(2)')
      .assert.visible('#todo-remove-0')
      .click('#todo-remove-0')
      .assert.elementNotPresent('html body div#component section#component1 ul li label span.text')
      .end()
  }
}
