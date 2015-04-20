'use strict';

var React         = require('react/addons'),
    PersonDetails = require('./PersonDetails')
    ;

require('styles/PersonPopup.css');

var PersonPopup = React.createClass({
    render: function () {
        return (
            <div className="b-person-popup">
                <PersonDetails person={this.props.person} />
            </div>
        );
    }
});

module.exports = PersonPopup;

