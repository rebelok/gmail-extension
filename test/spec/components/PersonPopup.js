'use strict';

describe('PersonPopup', function () {
  var React = require('react/addons');
  var PersonPopup, component;

  beforeEach(function () {
    PersonPopup = require('components/PersonPopup.js');
    component = React.createElement(PersonPopup);
  });

  it('should create a new instance of PersonPopup', function () {
    expect(component).toBeDefined();
  });
});
