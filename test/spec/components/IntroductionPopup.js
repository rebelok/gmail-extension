'use strict';

describe('IntroductionPopup', function () {
  var React = require('react/addons');
  var IntroductionPopup, component;

  beforeEach(function () {
    IntroductionPopup = require('components/IntroductionPopup.js');
    component = React.createElement(IntroductionPopup);
  });

  it('should create a new instance of IntroductionPopup', function () {
    expect(component).toBeDefined();
  });
});
