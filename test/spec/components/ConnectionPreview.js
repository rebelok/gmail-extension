'use strict';

describe('ConnectionPreview', function () {
  var React = require('react/addons');
  var ConnectionPreview, component;

  beforeEach(function () {
    ConnectionPreview = require('components/ConnectionPreview.js');
    component = React.createElement(ConnectionPreview);
  });

  it('should create a new instance of ConnectionPreview', function () {
    expect(component).toBeDefined();
  });
});
