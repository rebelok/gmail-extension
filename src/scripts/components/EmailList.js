'use strict';

var React           = require('react/addons'),
    PopupStateMixin = require('./PopupStateMixin');

require('styles/EmailList.css');

var EmailList = React.createClass({
    mixins      : [PopupStateMixin],
    toggleExpand: function () {
        this.setPopupState(!this.state.open);
    },
    render      : function () {
        var generateListItem = function (listItem) {
            return (
                <li title={listItem}  className="b-email-item">
                        {this.props.template(listItem)}
                </li>
            );
        }.bind(this);
        var list = this.props.data.map(generateListItem);
        return (
            <div className="b-info-row">
                <div title={this.props.data[0]} className="b-main-item">
                        {this.props.template(this.props.data[0])}
                </div>

                {this.props.data.length > 1 ?
                    <div className={this.state.open ? 'b-expander b-expander__expanded' : 'b-expander' }>
                        <button className="b-expandable-button" onClick={this.toggleExpand}/>
                        { this.state.open ? <div className="b-popup">
                            <ul className="b-list"> {list} </ul>
                        </div> : null }
                    </div>
                    : null}
            </div>
        );
    }
});

module.exports = EmailList;

