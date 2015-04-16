'use strict';

describe('Avatar', function () {
  var React = require('react/addons');
  var Avatar, component;

  beforeEach(function () {
    Avatar = require('components/Avatar.js');
    component = React.createElement(Avatar);
  });

  it('should create a new instance of Avatar', function () {
    expect(component).toBeDefined();
  });
});
