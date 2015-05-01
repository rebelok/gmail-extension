'use strict';

var React         = require('react/addons'),
    InviteButton  = require('./InviteButton'),
    PersonDetails = require('./PersonDetails')
    ;

require('styles/PersonPopup.css');

var PersonPopup = React.createClass({
    render: function () {
        var personInfo, canInvite = this.props.person.canInvite;
        switch (this.props.person.Proximity) {
            case 1:
                personInfo = <div className="b-person-popup__info"><span>You know {this.props.person.FirstName}  directly.</span></div>;
                canInvite = false;
                break;
            case 2:
                personInfo = <div className="b-person-popup__info"><span>Very frequent interactions. <br/> You can rely on introduction</span></div>;
                break;
            case 0:

                break;
        }

        return (
            <div className="b-person-popup">
                <PersonDetails person={this.props.person} />

                    {personInfo}
                {
                    canInvite ?
                    <div className="b-person-popup__footer">
                        <InviteButton emails={this.props.person.Emails} canInvite={this.props.person.canInvite} />
                    </div>
                    : null
                }
            </div>
        );
    }
});

module.exports = PersonPopup;

