'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var ChromeApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

      ChromeApp = require('components/ChromeApp.js');
    component = React.createElement(ChromeApp);
  });

  it('should create a new instance of ChromeApp', function () {
    expect(component).toBeDefined();
  });
});
