'use strict';

describe('PersonDetails', function () {
  var React = require('react/addons');
  var PersonDetails, component;

  beforeEach(function () {
    PersonDetails = require('components/PersonDetails.js');
    component = React.createElement(PersonDetails);
  });

  it('should create a new instance of PersonDetails', function () {
    expect(component).toBeDefined();
  });
});
