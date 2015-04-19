'use strict';

describe('PopoverStateMixin', function () {
  var React = require('react/addons');
  var PopoverStateMixin, component;

  beforeEach(function () {
    PopoverStateMixin = require('components/PopoverStateMixin.js');
    component = React.createElement(PopoverStateMixin);
  });

  it('should create a new instance of PopoverStateMixin', function () {
    expect(component).toBeDefined();
  });
});
