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
    getEmailLink: function (email) {
        return <a title={email} className="b-link-email" href={'mailto://' + email}>{email}</a>;
    },
    getPhoneItem   : function (phone) {
        return <span>{phone}</span>;
    },
    render      : function () {
        return (
            <div className="b-person-details">
                <SiteLink url={this.props.person.Link} title={this.props.person.FirstName + ' ' + this.props.person.LastName} />
                <div className="b-person-details__main">
                    <Avatar big={true} url={this.props.person.AvatarUrl} fullname={this.props.person.FirstName + ' ' + this.props.person.LastName}/>
                    <div className="b-person-details__text">
                        <div className="b-person-details__name">
                          {this.props.person.FirstName + ' ' + this.props.person.LastName}
                        </div>
                    {this.props.person.Position ?
                        <div className="b-person-details__position">
                            {this.props.person.Position}
                        </div>
                        : null}
                    {this.props.person.CompanyName ?
                        <div className="b-person-details__company">
                            {this.props.person.CompanyName}
                        </div>
                        : null}
                    </div>
                </div>
                {this.props.person.Phones.length ?
                    <div className="b-phone-list">
                        <EmailList data={this.props.person.Phones} template={this.getPhoneItem}/>
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
                    <InviteButton emails={this.props.person.Emails} canInvite={this.props.person.CanInvite} onInvite={this.props.onInvite} />

                    <a className="b-link__logo" href={this.props.mainUrl}>
                        {Strings.get('app_name')}
                    </a>
                </div>

            </div>
        );
    }
});

module.exports = PersonDetails;

