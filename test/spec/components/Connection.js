'use strict';

describe('Connection', function () {
  var React = require('react/addons');
  var Connection, component;

  beforeEach(function () {
    Connection = require('components/Connection.js');
    component = React.createElement(Connection);
  });

  it('should create a new instance of Connection', function () {
    expect(component).toBeDefined();
  });
});
