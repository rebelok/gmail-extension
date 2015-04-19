'use strict';

var React   = require('react/addons'),
    InfoBar = require('./InfoBar'),
    strings = require('./Strings')();

require('styles/OutsideNetHeader.css');

var OutsideNetHeader = React.createClass({
    render: function () {
        return (
            <div className="b-outside-net-header">
                <h2 className="b-outside-net-header__title">Showing contacts outside you network ({this.props.count})</h2>
                <InfoBar />
            </div>
        );
    }
});

module.exports = OutsideNetHeader;

