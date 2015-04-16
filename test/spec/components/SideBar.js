'use strict';

describe('SideBar', function () {
  var React = require('react/addons');
  var SideBar, component;

  beforeEach(function () {
    SideBar = require('components/SideBar.js');
    component = React.createElement(SideBar);
  });

  it('should create a new instance of SideBar', function () {
    expect(component).toBeDefined();
  });
});
