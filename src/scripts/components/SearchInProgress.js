'use strict';

var React = require('react/addons'),
    Strings = require('./Strings')()
    ;

require('styles/SearchInProgress.css');

var SearchInProgress = React.createClass({
    render: function () {
        return (
            <div className="b-search-bar__content_searching_yes">
                <span className="b-searching">
                {Strings.get('searching')}
                </span>
            </div>
        );
    }
});

module.exports = SearchInProgress;

