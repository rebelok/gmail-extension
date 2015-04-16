'use strict';

var React   = require('react/addons'),
    strings = require('./Strings')();

require('styles/NoResult.css');

var NoResult = React.createClass({
    render: function () {
        return (
            <div className="b-search-bar__content_empty">
                <span className="b-no-result">
                    {strings.get('message__no_result')}
                </span>
                <a className="b-link" href={strings.get('link__invite_people__url')}>
                    {strings.get('link__invite_people__text')}
                </a>
                <a className="b-link__logo" href={this.props.mainUrl}>
                    {strings.get('app_name')}
                </a>
            </div>
        );
    }
});

module.exports = NoResult;

