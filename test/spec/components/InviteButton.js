'use strict';

describe('InviteButton', function () {
  var React = require('react/addons');
  var InviteButton, component;

  beforeEach(function () {
    InviteButton = require('components/InviteButton.js');
    component = React.createElement(InviteButton);
  });

  it('should create a new instance of InviteButton', function () {
    expect(component).toBeDefined();
  });
});
