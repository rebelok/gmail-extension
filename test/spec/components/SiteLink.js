'use strict';

describe('SiteLink', function () {
  var React = require('react/addons');
  var SiteLink, component;

  beforeEach(function () {
    SiteLink = require('components/SiteLink.js');
    component = React.createElement(SiteLink);
  });

  it('should create a new instance of SiteLink', function () {
    expect(component).toBeDefined();
  });
});
