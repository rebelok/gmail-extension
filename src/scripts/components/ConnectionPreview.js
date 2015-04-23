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
        var style = {backgroundImage: 'url('+this.props.data.AvatarUrl+')'};
        return (
            <div className={this.state.open ? 'b-connection-preview b-connection-preview__expanded' : 'b-connection-preview'}>
                <span className="b-avatar-border">
                    <span onClick={this.togglePopup} style={style} className="b-connection__avatar" title={this.props.data.FirstName + ' ' + this.props.data.LastName}/>
                </span>
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

