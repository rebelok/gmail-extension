'use strict';

var React = require('react/addons');

function isNodeInRoot(node, root) {
    while (node) {
        if (node === root) {
            return true;
        }
        node = node.parentNode;
    }

    return false;
}

var PopupStateMixin = {
    getInitialState    : function () {
        return {open: false};
    },
    setPopupState      : function (newState, onStateChangeComplete) {
        if (newState) {
            this.bindRootCloseHandlers();
        } else {
            this.unbindRootCloseHandlers();
        }

        this.setState({open: newState}, onStateChangeComplete);
    },
    handleDocumentKeyUp: function (e) {
        if (e.keyCode === 27) {
            this.setPopupState(false);
        }
    },

    handleDocumentClick  : function (e) {
        // If the click originated from within this component
        // don't do anything.
        if (isNodeInRoot(e.target, React.findDOMNode(this))) {
            return;
        }

        this.setPopupState(false);
    },
    bindRootCloseHandlers: function () {
        document.addEventListener('click', this.handleDocumentClick);
        document.addEventListener('keyup', this.handleDocumentKeyUp);
    },

    unbindRootCloseHandlers: function () {
        document.removeEventListener('click', this.handleDocumentClick);
        document.removeEventListener('keyup', this.handleDocumentKeyUp);
    },

    componentWillUnmount() {
        this.unbindRootCloseHandlers();
    }
};

module.exports = PopupStateMixin;

