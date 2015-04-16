'use strict';

var React             = require('react/addons'),
    $                 = require('../vendor/jquery'),
    Connection        = require('./Connection'),
    ConnectionPreview = require('./ConnectionPreview');

require('styles/ConnectionList.css');


var ConnectionList = React.createClass({
    isNodeInRoot           : function (node, root) {
        while (node) {
            if (node === root) {
                return true;
            }
            node = node.parentNode;
        }

        return false;
    },
    setDropdownState       : function (newState, onStateChangeComplete) {
        if (newState) {
            this.bindRootCloseHandlers();
        } else {
            this.unbindRootCloseHandlers();
        }
        var state = this.state;
        state.isExpanded = newState;
        this.setState(state, onStateChangeComplete);
    },
    handleDocumentKeyUp    : function (e) {
        if (e.keyCode === 27) {
            this.setDropdownState(false);
        }
    },
    handleDocumentClick    : function (e) {
        // If the click originated from within this component
        // don't do anything.
        if (this.isNodeInRoot(e.target, React.findDOMNode(this))) {
            return;
        }

        this.setDropdownState(false);
    },
    bindRootCloseHandlers  : function () {
        document.addEventListener('click', this.handleDocumentClick);
        document.addEventListener('keyup', this.handleDocumentKeyUp);
    },
    unbindRootCloseHandlers: function () {
        document.removeEventListener('click', this.handleDocumentClick);
        document.removeEventListener('keyup', this.handleDocumentKeyUp);
    },
    componentWillUnmount   : function () {
        this.unbindRootCloseHandlers();
    },
    toggleExpand           : function () {
        this.setDropdownState(!this.state.isExpanded);
    },
    closePopup             : function () {
        this.setDropdownState(false);
    },
    getInitialState        : function () {
        return {isExpanded: false, isExpandable: this.props.data.length > 4};
    },
    render                 : function () {
        var connectionsShort = this.props.data.slice(0, Math.min(4, this.props.data.length)).map(function (connection) {
            return (
                <li className="b-connection-item">
                    <ConnectionPreview key={connection.Id} data={connection}/>
                </li>
            );
        });
        var connections = this.props.data.map(function (connection) {
            return (
                <li className="b-connection-item__full">
                    <Connection key={connection.Id}  data={connection} short={false}/>
                </li>
            );
        });
        return (
            <div className="b-connections">
                <ul className="b-connections-list">
                    {connectionsShort}
                </ul>
                {this.state.isExpandable ?
                    <div className={ this.state.isExpanded ? 'b-connections__expander b-connections__expander_expanded_yes' : 'b-connections__expander'}>
                        <button className="b-expandable-button" onClick={this.toggleExpand}/>
                        { this.state.isExpanded ?
                            <div className="b-popup">
                                <ul className="b-connections-list__expanded"> {connections} </ul>
                            </div>
                            : null }
                    </div>
                    : null}
            </div>
        );
    }
});

module.exports = ConnectionList;

