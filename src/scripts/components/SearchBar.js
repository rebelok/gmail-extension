'use strict';

require('styles/SearchBar.css');
require('styles/common.css');

var React            = require('react/addons'),
    $                = require('../vendor/jquery.js'),
    NoResult         = require('./NoResult'),
    Unauthorized     = require('./Unauthorized'),
    SearchInProgress = require('./SearchInProgress'),
    SearchResultList = require('./SearchResultList'),
    strings          = require('./Strings')(),
    log              = console.log.bind(console, strings.get('app_name') + ': ');

var SearchBar = React.createClass({
    getInitialState  : function () {
        return {data: [], isSearching: true, hasResults: false, resultsCount: 0};
    },
    componentDidMount: function () {
        $.ajax({
            url      : strings.get('search_url') + this.props.searchTerm + '&counting=true&take=3',
            dataType : 'json',
            xhrFields: {withCredentials: true},

            success: function (data) {
                var hasResults = !!data.Persons;
                var resultsCount = hasResults ? data.TotalCount : 0;
                log('data=%O,hasResults=%O,resultCount=%d', data, hasResults, resultsCount);
                this.setState({data: data, resultsCount: resultsCount, hasResults: hasResults, isSearching: false});
            }.bind(this),

            error: function (xhr, status, err) {
                this.setState({isSearching: false, hasResults: false, data: [], resultsCount: false, isUnauthorized: err.toString() == 'Unauthorized'})
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    render: function () {
        var searchBarContent;
        if (this.state.isSearching) {
            searchBarContent = <SearchInProgress />;
        } else if (this.state.hasResults) {
            searchBarContent = <SearchResultList total={this.state.resultsCount} showAllUrl={strings.get('link__more_results') + this.props.searchTerm} data={this.state.data.Persons}/>;
        } else if(this.state.isUnauthorized) {
            searchBarContent = <Unauthorized mainUrl={this.props.mainUrl}/>;
        }else {
            searchBarContent = <NoResult mainUrl={this.props.mainUrl}/>;
        }
        log('render - searchBar', searchBarContent, this.state);
        return (
            <div>
            {searchBarContent}
            </div>
        );
    }
});

module.exports = SearchBar;

