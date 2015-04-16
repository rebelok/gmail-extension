'use strict';

describe('LogoImage', function () {
  var React = require('react/addons');
  var LogoImage, component;

  beforeEach(function () {
    LogoImage = require('components/LogoImage.js');
    component = React.createElement(LogoImage);
  });

  it('should create a new instance of LogoImage', function () {
    expect(component).toBeDefined();
  });
});
