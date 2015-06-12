/**
 * Created by AGelenava on 26.05.2015.
 */
'use strict';

require('styles/Unauthorized.css');
require('styles/common.css');

var React            = require('react/addons'),
    $                = require('../vendor/jquery.js'),
    strings          = require('./Strings')();

var Unauthorized = React.createClass({
    render         : function () {
        return (
            <div className="b-search-bar__content_empty">
                <span  className="b-no-result">You are not authorized. Please <a className="b-link" target="_blank" href={strings.get('main_url') + '/Login' } >login</a> to use service</span>
                <a className="b-link__logo" href={this.props.mainUrl}>
                    {strings.get('app_name')}
                </a>
            </div>
        );
    }
});

module.exports = Unauthorized;
