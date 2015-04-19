'use strict';

describe('OutsideNetHeader', function () {
  var React = require('react/addons');
  var OutsideNetHeader, component;

  beforeEach(function () {
    OutsideNetHeader = require('components/OutsideNetHeader.js');
    component = React.createElement(OutsideNetHeader);
  });

  it('should create a new instance of OutsideNetHeader', function () {
    expect(component).toBeDefined();
  });
});
