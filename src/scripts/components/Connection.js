'use strict';

var React = require('react/addons');

require('styles/Connection.css');

var Connection = React.createClass({
    toggleExpand   : function () {
        var state = this.state;
        state.isExpanded = !state.isExpanded;
        this.setState(state);
    },
    getInitialState: function () {
        return {
            isExpanded: false,
            showInvite: this.props.data.Proximity === 0,
            fullName  : this.props.data.FirstName + ' ' + this.props.data.LastName
        };
    },
    render         : function () {
        return (
            <div className="b-connection">
                <img className="b-connection__avatar" src={this.props.data.AvatarUrl} alt={this.state.fullName} title={this.state.fullName} />
                <span className="b-connection__name-info">{this.state.fullName}</span>
                <a className="b-connection__link" href={this.props.data.Link} />
        {this.state.isExpanded ?
            <div className="b-connection__details">
                <div className="b-connection__avatar-wrapper">
                    <img className="b-connection__avatar" src={this.props.avatar} alt={this.props.fullName} />
                </div>
                <div className="b-connection__link-wrapper">
                    <a className="b-connection__link" href={this.props.data.url} />
                </div>
                <div className="b-connection__details">
                    <div className="b-connection__name">
                            {this.props.data.name}
                    </div>
                    <div className="b-connection__position">
                            {this.props.data.Position}
                    </div>
                    <div className="b-connection__company">
                            {this.props.data.CompanyName}
                    </div>
                </div>
                <div className="b-connection__info">
                        {this.props.data.info}
                </div>
                {this.state.showInvite ?
                    <div className="b-connection__invite">
                        <a className="b-connection__invite-button" href={this.props.data.inviteUrl}>Invite</a>
                    </div>
                    : null}
            </div>
            : null
            }
            </div>
        );
    }
});

module.exports = Connection;

