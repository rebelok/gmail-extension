'use strict';

describe('SearchResultHeader', function () {
  var React = require('react/addons');
  var SearchResultHeader, component;

  beforeEach(function () {
    SearchResultHeader = require('components/SearchResultHeader.js');
    component = React.createElement(SearchResultHeader);
  });

  it('should create a new instance of SearchResultHeader', function () {
    expect(component).toBeDefined();
  });
});
