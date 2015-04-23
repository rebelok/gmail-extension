'use strict';

var React             = require('react/addons'),
    $                 = require('../vendor/jquery'),
    Connection        = require('./Connection'),
    PopupStateMixin   = require('./PopupStateMixin'),
    ConnectionPreview = require('./ConnectionPreview'),
    strings           = require('./Strings')();

require('styles/ConnectionList.css');

var ConnectionList = React.createClass({
    mixins      : [PopupStateMixin],
    toggleExpand: function () {
        this.setPopupState(!this.state.open);
    },
    closePopup  : function () {
        this.setPopupState(false);
    },
    render      : function () {
        var connectionsShort = this.props.data.slice(0, Math.min(4, this.props.data.length)).map(function (connection) {
            return (
                <li key={connection.Id} className="b-connection-item">
                    <ConnectionPreview key={connection.Id} data={connection}/>
                </li>
            );
        });
        var connections = this.props.data.map(function (connection) {
            return (
                <li key={connection.Id} className="b-connection-item__full">
                    <Connection key={connection.Id}  data={connection} short={false}/>
                </li>
            );
        });
        return (
            <div className="b-connections">
                <ul className="b-connections-list">
                    {connectionsShort}
                </ul>
                {this.props.data.length > 4 ?
                    <div className={ this.state.open ? 'b-connections__expander b-connections__expander_expanded_yes' : 'b-connections__expander'}>
                        <button className="b-expandable-button" onClick={this.toggleExpand}/>
                        { this.state.open ?
                            <div className="b-popup">
                                <ul className="b-connections-list b-connections-list__expanded"> {connections} </ul>
                                <div className="b-connection-list__footer">
                                    <span className="b-avatar-border_double_true">
                                        <span className="b-avatar-border">
                                            <span className="b-connection__avatar"></span>
                                        </span>
                                    </span>
                                    <span className="b-avatar-border">
                                        <span className="b-connection__avatar"></span>
                                    </span>
                                    <span className="b-avatar-border b-avatar-border_style_dashed">
                                        <span className="b-connection__avatar"></span>
                                    </span>
                                    <a className="b-help-link" href={strings.get('link__circles__learnmore')}>Circles... huh?</a>
                                </div>
                            </div>
                            : null }
                    </div>
                    : null}
            </div>
        );
    }
});

module.exports = ConnectionList;

