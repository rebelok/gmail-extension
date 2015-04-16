'use strict';

describe('SearchBar', function () {
  var React = require('react/addons');
  var SearchBar, component;

  beforeEach(function () {
    SearchBar = require('components/SearchBar.js');
    component = React.createElement(SearchBar);
  });

  it('should create a new instance of SearchBar', function () {
    expect(component).toBeDefined();
  });
});
