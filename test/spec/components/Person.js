'use strict';

describe('Person', function () {
  var React = require('react/addons');
  var Person, component;

  beforeEach(function () {
    Person = require('components/Person.js');
    component = React.createElement(Person);
  });

  it('should create a new instance of Person', function () {
    expect(component).toBeDefined();
  });
});
