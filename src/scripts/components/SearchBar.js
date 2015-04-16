'use strict';

require('styles/SearchBar.css');
require('styles/common.css');

var React            = require('react/addons'),
    $                = require('../vendor/jquery.js'),
    NoResult         = require('./NoResult'),
    SearchInProgress = require('./SearchInProgress'),
    SearchResultList = require('./SearchResultList'),
    Strings = require('./Strings')(),
    log              = console.log.bind(console, Strings.get('app_name')+': ');

var SearchBar = React.createClass({
    getInitialState  : function () {
        return {data: [], isSearching: true, hasResults: false, resultsCount: 0};
    },
    componentDidMount: function () {
        $.ajax({
            url      : Strings.get('search_url') + this.props.searchTerm,
            dataType : 'json',
            xhrFields: {withCredentials: true},

            success: function (data) {
                var hasResults = !!data.Persons;
                var resultsCount = hasResults ? data.TotalCount : 0;
                log('data=%O,hasResults=%O,resultCount=%d', data, hasResults, resultsCount);
                this.setState({data: data, resultsCount: resultsCount, hasResults: hasResults, isSearching: false});
            }.bind(this),

            error: function (xhr, status, err) {
                this.setState({isSearching: false, hasResults: false, data: [], resultsCount: false})
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },


    render: function () {
        var searchBarContent;
        if (this.state.isSearching) {
            searchBarContent = <SearchInProgress />;
        } else if (this.state.hasResults) {
            searchBarContent = <SearchResultList total={this.state.resultsCount} mainUrl={this.props.mainUrl} showAllUrl={this.props.showAllUrl} data={this.state.data.Persons}/>;
        } else {
            searchBarContent = <NoResult mainUrl={this.props.mainUrl} inviteAllUrl={this.props.inviteAllUrl}/>;
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

