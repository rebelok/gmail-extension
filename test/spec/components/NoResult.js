'use strict';

describe('NoResult', function () {
  var React = require('react/addons');
  var NoResult, component;

  beforeEach(function () {
    NoResult = require('components/NoResult.js');
    component = React.createElement(NoResult);
  });

  it('should create a new instance of NoResult', function () {
    expect(component).toBeDefined();
  });
});
