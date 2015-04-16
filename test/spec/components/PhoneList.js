'use strict';

describe('PhoneList', function () {
  var React = require('react/addons');
  var PhoneList, component;

  beforeEach(function () {
    PhoneList = require('components/PhoneList.js');
    component = React.createElement(PhoneList);
  });

  it('should create a new instance of PhoneList', function () {
    expect(component).toBeDefined();
  });
});
