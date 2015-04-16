'use strict';

describe('SearchInProgress', function () {
  var React = require('react/addons');
  var SearchInProgress, component;

  beforeEach(function () {
    SearchInProgress = require('components/SearchInProgress.js');
    component = React.createElement(SearchInProgress);
  });

  it('should create a new instance of SearchInProgress', function () {
    expect(component).toBeDefined();
  });
});
