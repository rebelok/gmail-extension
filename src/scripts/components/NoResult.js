'use strict';

var React   = require('react/addons'),
    Strings = require('./Strings')();

require('styles/NoResult.css');

var NoResult = React.createClass({
    render: function () {
        return (
            <div className="b-search-bar__content_empty">
                <span className="b-no-result">
                    {Strings.get('message__no_result')}
                </span>
                <a className="b-link" href={this.props.inviteAllUrl}>
                    {Strings.get('link__invite_people')}
                </a>
                <a className="b-link__logo" href={this.props.mainUrl}>
                    {Strings.get('app_name')}
                </a>
            </div>
        );
    }
});

module.exports = NoResult;

