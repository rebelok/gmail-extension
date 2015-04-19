'use strict';

var React = require('react/addons'),
    PopupStateMixin = require('./PopupStateMixin');

require('styles/PhoneList.css');

var PhoneList = React.createClass({
    mixins         : [PopupStateMixin],
    getInitialState: function () {
        return {isExpandable: this.props.data.length > 1};
    },
    render: function () {
        var phones = this.props.data.map(function (phone) {
            return (
                <li className="b-phone-item">
                    {phone}
                </li>
            );
        });
    return (
        <div className="b-phones">
            <span className="b-phone">{this.props.data[0]}</span>
                {this.props.data.length>1 ?
                    <span>
                        <button onClick={this.toggleExpand}/>
                        { this.state.isExpanded ? <ul> {phones} </ul> : null }
                    </span>
                    : null}
        </div>
      );
  }
});

module.exports = PhoneList;

