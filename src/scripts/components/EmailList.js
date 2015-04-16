'use strict';

var React = require('react/addons');

require('styles/EmailList.css');

var EmailList = React.createClass({
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
        return {isExpanded: false, isExpandable: this.props.data.length > 1};
    },
    render                 : function () {
        var emails = this.props.data.map(function (email) {
            return (
                this.props.template ?
                    <li className="b-email-item">
                        {this.props.template(email)}
                    </li> :
                    <li title={email} className="b-email-item">
                        {email}
                    </li>
            );
        }.bind(this));
        return (
            <div className="b-emails">
                <span title={this.props.data[0]} className="b-email">{this.props.data[0]}</span>
                {this.state.isExpandable ?
                    <div className={this.state.isExpanded ? 'b-expandable-list b-expandable-list__expanded' : 'b-expandable-list' }>
                        <button className="b-expandable-button" onClick={this.toggleExpand}/>
                        { this.state.isExpanded ? <div className="b-popup">
                            <ul className="b-list"> {emails} </ul>
                        </div> : null }
                    </div>
                    : null}
            </div>
        );
    }
});

module.exports = EmailList;

