'use strict';

var React = require('react/addons');

require('styles/SiteLink.css');

var SiteLink = React.createClass({
  render: function () {
    return (
        <a className="b-site-link" href={this.props.url} title="Go to profile" />
      );
  }
});

module.exports = SiteLink;

