'use strict';

var React          = require('react/addons'),
    Avatar         = require('./Avatar'),
    ConnectionList = require('./ConnectionList'),
    InviteButton   = require('./InviteButton'),
    EmailList      = require('./EmailList');

require('styles/Person.css');

var Person = React.createClass({
    getInitialState: function () {
        return {fullName: this.props.person.FirstName + ' ' + this.props.person.LastName}
    },
    getEmailLink   : function (email) {
        return <a title={email} className="b-link-email" href={'mailto://' + email}>{email}</a>;
    },
    render         : function () {
        return (
            <div className="b-person">
                <Avatar url={this.props.person.AvatarUrl} fullName={this.state.fullName} />
                <InviteButton onInvite={this.props.onInvite} emails={this.props.person.Emails} canInvite={this.props.person.CanInvite} />
                <span className="b-person-name" >
                    {this.state.fullName}
                </span>
                <span className="b-position">
                    {this.props.person.Position}
                </span>
                <span className="b-company">
                    {this.props.person.CompanyName}
                </span>
                <EmailList data={this.props.person.Emails} template={this.getEmailLink}/>
                <EmailList data={this.props.person.Phones} />
                <drop>
                    <ConnectionList data={this.props.person.Connections} />
                </drop>
            </div>
        );
    }
});

module.exports = Person;

