'use strict';

var React          = require('react/addons'),
    Avatar         = require('./Avatar'),
    ConnectionList = require('./ConnectionList'),
    InviteButton   = require('./InviteButton'),
    IntroductionButton   = require('./IntroductionButton'),
    EmailList      = require('./EmailList');

require('styles/Person.css');

var Person = React.createClass({
    getInitialState: function () {
        return {fullName: (this.props.person.FirstName == null ? '' : this.props.person.FirstName) + ' ' + (this.props.person.LastName == null ? '' : this.props.person.LastName)}
    },
    getEmailLink   : function (email) {
        return <a title={email} className="b-link-email" href={'mailto://' + email}>{email}</a>;
    },
    getPhoneItem   : function (phone) {
        return <span>{phone}</span>;
    },
    render         : function () {
        return (
            <div className="b-person">
                <Avatar url={this.props.person.AvatarUrl} fullName={this.state.fullName} id={this.props.person.Id}
                        isClickable={this.props.person.Proximity != 0} />
            {this.props.person.Proximity === 0 ?
                <IntroductionButton person={this.props.person}/>:
                <InviteButton emails={this.props.person.Emails} canInvite={this.props.person.CanInvite} />
                }
                <span className="b-person-name" title={this.state.fullName}>
                    {this.state.fullName}
                </span>
                <span className="b-position" title={this.props.person.Position}>
                    {this.props.person.Position}
                </span>
                <span className="b-company" title={this.props.person.CompanyName}>
                    {this.props.person.CompanyName}
                </span>

                {this.props.person.Proximity === 0 ?
                    <div className="b-info-row">
                        <span>Hidden</span>
                    </div> :
                    <EmailList data={this.props.person.Emails} template={this.getEmailLink}/>
                }
                {this.props.person.Proximity === 0 ?
                    <div className="b-info-row">
                        <span>Hidden</span>
                    </div> :
                    <EmailList data={this.props.person.Phones} template={this.getPhoneItem}/>
                }
                <drop>
                    <ConnectionList data={this.props.person.Connections} />
                </drop>
            </div>
        );
    }
});

module.exports = Person;

