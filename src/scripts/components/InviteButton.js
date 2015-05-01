'use strict';

var React = require('react/addons'),
    strings = require('./Strings')();

require('styles/InviteButton.css');

var InviteButton = React.createClass({

        getInitialState          : function getInitialState() {
            return {canInvite: this.props.canInvite && this.props.emails};
        },
        onInvite                 : function onInvite() {
            this.setState({canInvite: false});
            $.ajax({
                url      : strings.get('link__invite_person__url'),
                type     : 'POST',
                data     : {email: this.props.emails[0]},
                xhrFields: {withCredentials: true}
            })
                .done(function () {
                    log('invite ok');
                })
                .fail(function (data, a, b, c) {
                    log('invite failed');
                    log(data);
                });
        },
        componentWillReceiveProps: function (nextProps) {
            this.setState({canInvite: nextProps.canInvite && nextProps.emails});
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

