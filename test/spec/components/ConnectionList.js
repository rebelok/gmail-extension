'use strict';

describe('ConnectionList', function () {
  var React = require('react/addons');
  var ConnectionList, component;

  beforeEach(function () {
    ConnectionList = require('components/ConnectionList.js');
    component = React.createElement(ConnectionList);
  });

  it('should create a new instance of ConnectionList', function () {
    expect(component).toBeDefined();
  });
});
