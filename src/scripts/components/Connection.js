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
            isExpanded: false
        };
    },
    render         : function () {
        var style = {backgroundImage: 'url(' + this.props.data.AvatarUrl + ')'};
        if(this.props.data.Color==='greens'){
            style.borderColor = 'green';
        }
        var avatarStyle = '';
        switch (this.props.data.Proximity) {
            case 1:
                avatarStyle = 'b-avatar-border';
                break;
            case 2:
                avatarStyle = 'b-avatar-border b-avatar-border_style_dashed';
                break;
        }
        return (
            <div className="b-connection">
                <span className={avatarStyle}>
                    <span onClick={this.togglePopup}  style={style}  className="b-connection__avatar" title={this.props.data.FirstName + ' ' + this.props.data.LastName}/>
                </span>
                <span className="b-connection__name-info">{this.props.data.FirstName + ' ' + this.props.data.LastName}</span>
                <a className="b-connection__link" href={this.props.data.Link} />
        {this.state.isExpanded ?
            <div className="b-connection__details">
                <div className="b-connection__avatar-wrapper">
                    <img className="b-connection__avatar" src={this.props.avatar} alt={this.props.data.FirstName + ' ' + this.props.data.LastName} />
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
                {this.props.data.Proximity === 0 ?
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

