'use strict';

var React          = require('react/addons'),
    Avatar         = require('./Avatar'),
    ConnectionList = require('./ConnectionList'),
    InviteButton   = require('./InviteButton'),
    SiteLink       = require('./SiteLink'),
    Strings        = require('./Strings')(),
    EmailList      = require('./EmailList');


require('styles/PersonDetails.css');

var PersonDetails = React.createClass({
    getInitialState: function () {
        return {fullName: this.props.person.FirstName + ' ' + this.props.person.LastName}
    },
    getEmailLink   : function (email) {
        return <a title={email} className="b-link-email" href={'mailto://' + email}>{email}</a>;
    },
    render         : function () {
        var avatarStyle = {
            backgroundImage: 'url(' + this.props.person.AvatarUrl + ')'
        };
        return (
            <div className="b-person-details">
                <div className="b-avatar-big" style={avatarStyle}/>
                <SiteLink url={this.props.person.Link} title={this.state.fullName} />
                <div className="b-person-name__wrapper">
                    <span className="b-person-name">
                    {this.state.fullName}
                    </span>
                </div>
                <InviteButton />
                <div className="b-position">
                    {this.props.person.Position}
                </div>
                <div className="b-company">
                    {this.props.person.CompanyName}
                </div>
            {this.props.person.Phones.length ?
                <div className="b-phone-list">
                    <EmailList data={this.props.person.Phones} />
                </div>
                : null}
            {this.props.person.Emails.length ?
                <div className="b-email-list">
                    <EmailList data={this.props.person.Emails} template={this.getEmailLink}/>
                </div>
                : null}
                <div className="b-connections__wrapper">
                    <h2 className="b-connections__title">
                    You know {this.props.person.FirstName} through
                    </h2>
                    <ConnectionList data={this.props.person.Connections} />
                </div>
                <div className="b-sidebar__footer">
                    <a className="b-link__logo" href={this.props.mainUrl}>
                        {Strings.get('app_name')}
                    </a>
                </div>

            </div>
        );
    }
});

module.exports = PersonDetails;

