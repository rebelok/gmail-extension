'use strict';

var React          = require('react/addons'),
    $              = require('../vendor/jquery.js'),
    PersonDetails  = require('./PersonDetails'),
    strings        = require('./Strings')(),
    ConnectionList = require('./ConnectionList'),
    InviteButton   = require('./InviteButton'),
    EmailList      = require('./EmailList'),
    Unauthorized   = require('./Unauthorized'),
    log            = console.log.bind(console, strings.get('app_name') + ': ');

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
            url      : strings.get('search_url') + email + '&counting=false&take=1',
            dataType : 'json',
            xhrFields: {withCredentials: true},

            success: function (data) {
                var hasResults = !!data.Persons;
                var person = data.Persons[0];
                log('data=%O,hasResults=%O,resultCount=%d', data, hasResults);
                this.setState({data: person, hasResults: hasResults, isSearching: false});
            }.bind(this),

            error: function (xhr, status, err) {
                this.setState({isSearching: false, hasResults: false, data: null, isUnauthorized: err.toString() == 'Unauthorized'})
                console.error(status, err.toString());
            }.bind(this)
        });
    },
    getEmailLink             : function (email) {
        return <a title={email} className="b-link-email" href={'mailto://' + email}>{email}</a>;
    },
    getPhoneItem             : function (phone) {
        return <span>{phone}</span>;
    },
    render                   : function () {
        var connectionTitle, isUnauthorized = this.state.isUnauthorized;
        if (this.state.data) {
            switch (this.state.data.Proximity) {
                case 1:
                    connectionTitle = <h2 className="b-connections__title">
                        You know {this.state.data.FirstName} directly
                        <br/>
                        Your shared connections are:
                    </h2>;
                    break;
                case 2:
                    connectionTitle = <h2 className="b-connections__title">
                        You know {this.state.data.FirstName} through:
                    </h2>;
                    break;
                case 0:

                    break;
            }
        }

        var content = this.state.data ?
            <div>
                <PersonDetails person={this.state.data} />
                {this.state.data.Phones && this.state.data.Phones.length ?
                    <div className="b-expandable-list">
                        <EmailList data={this.state.data.Phones} template={this.getPhoneItem}/>
                    </div>
                    : null}
                {this.state.data.Emails&&this.state.data.Emails.length ?
                    <div className="b-expandable-list">
                        <EmailList data={this.state.data.Emails} template={this.getEmailLink}/>
                    </div>
                    : null}
                <div className="b-connections__wrapper">
                    {connectionTitle}
                    <ConnectionList data={this.state.data.Connections} />
                </div>
                <div className="b-sidebar__footer">
                    <InviteButton emails={this.state.data.Emails} canInvite={this.state.data.CanInvite} />

                    <a className="b-link__logo" href={strings.get('main_url')}>
                        {strings.get('app_name')}
                    </a>
                </div>
            </div>
            :
            isUnauthorized ?

                <div>
                    <p className="b-no-result">You are not authorized.<br/> Please <a className="b-link" target="_blank"
                                                                                      href={strings.get('main_url') + '/Login' }>login</a> to use service</p>

                    <div className = "b-sidebar__footer" >
                        <a className="b-link__logo" href={strings.get('main_url')}>
                            {strings.get('app_name')}
                        </a>
                    </div >
                </div> : null

        return (content);
    }
});

module.exports = SideBar;

