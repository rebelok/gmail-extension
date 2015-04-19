'use strict';

describe('InfoBar', function () {
  var React = require('react/addons');
  var InfoBar, component;

  beforeEach(function () {
    InfoBar = require('components/InfoBar.js');
    component = React.createElement(InfoBar);
  });

  it('should create a new instance of InfoBar', function () {
    expect(component).toBeDefined();
  });
});
