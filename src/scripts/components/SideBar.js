'use strict';

var React         = require('react/addons'),
    $             = require('../vendor/jquery.js'),
    PersonDetails = require('./PersonDetails'),
    Strings       = require('./Strings')(),
    log           = console.log.bind(console, Strings.get('app_name') + ': ');

require('styles/SideBar.css');

var SideBar = React.createClass({
    //getInitialState  : function () {
    //    return {};
    //},
    componentDidMount: function () {
        $.ajax({
            url      : Strings.get('search_url') + this.props.email,
            dataType : 'json',
            xhrFields: {withCredentials: true},

            success: function (data) {
                var hasResults = !!data.Persons;
                var person = data.Persons[0];
                log('data=%O,hasResults=%O,resultCount=%d', data, hasResults);
                this.setState({data: person, hasResults: hasResults, isSearching: false});
            }.bind(this),

            error: function (xhr, status, err) {
                this.setState({isSearching: false, hasResults: false, data: {}})
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    render           : function () {
        return (
            this.state && this.state.data ? <PersonDetails person={this.state.data} /> : null
        );
    }
});

module.exports = SideBar;

