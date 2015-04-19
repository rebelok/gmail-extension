'use strict';

var React = require('react/addons');

require('styles/InviteButton.css');

var InviteButton = React.createClass({
        getInitialState          : function () {
            return {canInvite: this.props.canInvite && this.props.emails};
        },
        onInvite                 : function () {
            this.setState({canInvite: false});
            this.props.onInvite.call(null, this.props.emails[0]);
            //todo move invite request here
        },
        componentWillReceiveProps: function (nextProps) {
            this.setState({canInvite: nextProps.canInvite && nextProps.b-avatar.emails});
        },
        render                   : function () {
            var content = this.state.canInvite ?
                <button className="b-invite-button__state_active" onClick={this.onInvite} >Invite</button> :
                <span className="b-invite-button__state_passive"/>;
            return (<div className="b-invite-button">{content}</div>);
        }
    })
    ;

module.exports = InviteButton;

