'use strict';

describe('SearchResultList', function () {
  var React = require('react/addons');
  var SearchResultList, component;

  beforeEach(function () {
    SearchResultList = require('components/SearchResultList.js');
    component = React.createElement(SearchResultList);
  });

  it('should create a new instance of SearchResultList', function () {
    expect(component).toBeDefined();
  });
});
