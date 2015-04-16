'use strict';

describe('EmailList', function () {
  var React = require('react/addons');
  var EmailList, component;

  beforeEach(function () {
    EmailList = require('components/EmailList.js');
    component = React.createElement(EmailList);
  });

  it('should create a new instance of EmailList', function () {
    expect(component).toBeDefined();
  });
});
