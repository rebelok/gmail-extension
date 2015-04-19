'use strict';

var React = require('react/addons');

require('styles/Avatar.css');

var Avatar = React.createClass({
    render: function () {
        return (
            <div className="b-avatar">
                <img className={this.props.big ? 'b-avatar__image_size_big' : 'b-avatar__image'} src={this.props.url} alt={this.props.fullName} title={this.props.fullName} />
            </div>
        );
    }
});

module.exports = Avatar;

