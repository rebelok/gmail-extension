'use strict';

var React = require('react/addons'),
    strings = require('./Strings')();

require('styles/Avatar.css');

var Avatar = React.createClass({
    render: function () {
        return (
            <div className="b-avatar">
                {
                    <a target="_blank" href={strings.get('main_url') + '/person/index/' + this.props.id}>
                        <img className={this.props.big ? 'b-avatar__image_size_big' : 'b-avatar__image'}
                             src={this.props.url} alt={this.props.fullName} title={this.props.fullName}/>
                    </a>
                }
            </div>
        );
    }
});

module.exports = Avatar;

