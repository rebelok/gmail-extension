'use strict';

var React         = require('react/addons'),
    $             = require('../vendor/jquery.js'),
    PersonDetails = require('./PersonDetails'),
    Strings       = require('./Strings')(),
    log           = console.log.bind(console, Strings.get('app_name') + ': ');

require('styles/SideBar.css');

var SideBar = React.createClass({
    getInitialState          : function () {
        return {};
    },
    componentDidMount        : function () {
        this.update(this.props.email)
    },
    componentWillReceiveProps: function (nextProps) {
        if (this.props.email !== nextProps.email) {
            this.update(nextProps.email)
        }
    },
    update                   : function (email) {
        $.ajax({
            url      : Strings.get('search_url') + email,
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
                console.error(status, err.toString());
            }.bind(this)
        });
    },
    render                   : function () {
        console.log('render');
        return (
            this.state.data ? <PersonDetails person={this.state.data} /> : null
        );
    }
});

module.exports = SideBar;

