'use strict';

describe('IntroductionButton', function () {
  var React = require('react/addons');
  var IntroductionButton, component;

  beforeEach(function () {
    IntroductionButton = require('components/IntroductionButton.js');
    component = React.createElement(IntroductionButton);
  });

  it('should create a new instance of IntroductionButton', function () {
    expect(component).toBeDefined();
  });
});
