'use strict';

var React          = require('react/addons'),
    $              = require('../vendor/jquery.js'),
    strings        = require('./Strings')(),
    log            = console.log.bind(console, strings.get('app_name') + ': ');

require('styles/FriendshipButton.css');

var FriendshipButton = React.createClass({

    getInitialState: function getInitialState() {
        return {canBeFriends: this.props.canBeFriends && this.props.Id && this.props.FriendshipRequest == null};
    },
    friendshipRequest: function () {
        this.setState({canBeFriends: false});

        $.ajax({
            url: strings.get('friendship_url') + this.props.Id,
            xhrFields: {withCredentials: true},
            type: "PUT",
            success: function () {
            }
        });
    },
    componentWillReceiveProps: function (nextProps) {
        this.setState({canBeFriends: nextProps.canBeFriends && nextProps.Id &&  nextProps.FriendshipRequest == null});
    },
    render: function () {
        var message = this.props.FriendshipRequest == null ?
            null :
            <span className='b-person-relations friendship-request-sent'>{this.props.FriendshipRequest}</span>;

        var content = this.state.canBeFriends ?
            <button className="b-invite-button__state_active" onClick={this.friendshipRequest}>Become a friends</button> :
            message

        return content;
    }
});

module.exports = FriendshipButton;
