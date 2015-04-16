'use strict';

var React = require('react/addons');

require('styles/Avatar.css');

var Avatar = React.createClass({
    render: function () {
        return (
            <div className={this.props.big ? 'b-avatar-big' : 'b-avatar'}>
                <img className="b-avatar__image" src={this.props.url} alt={this.props.fullName} title={this.props.fullName} />
            </div>
        );
    }
});

module.exports = Avatar;

