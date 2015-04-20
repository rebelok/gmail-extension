'use strict';

var React           = require('react/addons'),
    PopupStateMixin = require('./PopupStateMixin'),
    PersonPopup     = require('./PersonPopup');

require('styles/ConnectionPreview.css');

var ConnectionPreview = React.createClass({
    mixins     : [PopupStateMixin],
    togglePopup: function () {
        this.setPopupState(!this.state.open);
    },
    render     : function () {
        return (
            <div className="b-connection-preview">
                <img onClick={this.togglePopup} className="b-connection__avatar" src={this.props.data.AvatarUrl} alt={this.props.data.FirstName + ' ' + this.props.data.LastName} title={this.props.data.FirstName + ' ' + this.props.data.LastName}/>
                {
                    this.state.open ?
                        <div className="b-popup">
                            <PersonPopup person={this.props.data} />
                        </div>
                        : null
                    }
            </div>
        );
    }
});

module.exports = ConnectionPreview;

