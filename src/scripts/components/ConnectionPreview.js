'use strict';

var React = require('react/addons');

require('styles/ConnectionPreview.css');

var ConnectionPreview = React.createClass({
    render: function () {
        return (
            <img className="b-connection__avatar" src={this.props.data.AvatarUrl} alt={this.props.data.FirstName + ' ' + this.props.data.LastName} title={this.props.data.FirstName + ' ' + this.props.data.LastName}/>
        );
    }
});

module.exports = ConnectionPreview;

