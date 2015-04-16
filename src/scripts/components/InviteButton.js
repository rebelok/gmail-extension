'use strict';

var React = require('react/addons');

require('styles/InviteButton.css');

var InviteButton = React.createClass({
    invitePerson   : function () {
        //todo send invite
    },
    getInitialState: function () {
        return {};
    },
    render         : function () {
        return (
            <button className="b-invite-button" onClick={this.invitePerson} >Invite</button>
        );
    }
});

module.exports = InviteButton;

