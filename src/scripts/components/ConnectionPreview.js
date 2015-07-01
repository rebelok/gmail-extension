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
            <div className={this.state.open ? 'b-connection-preview b-connection-preview__expanded' : 'b-connection-preview'}>
                <span className={avatarStyle}>
                    <span onClick={this.togglePopup} style={style} className="b-connection__avatar" title={this.props.data.FirstName + ' ' + this.props.data.LastName}>
                        {
                            this.props.data.EmptyAvatar ?
                            <span className='b-empty-initials'>{this.props.data.FirstName == null ? '':this.props.data.FirstName[0] }
                                {this.props.data.LastName == null ? '':this.props.data.LastName[0] }</span> : null
                        }
                    </span>
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

