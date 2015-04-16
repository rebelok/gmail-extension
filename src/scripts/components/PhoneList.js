'use strict';

var React = require('react/addons');

require('styles/PhoneList.css');

var PhoneList = React.createClass({
    toggleExpand   : function () {
        var state = this.state;
        state.isExpanded = !state.isExpanded;
        this.setState(state);
    },
    getInitialState: function () {
        return {expanded: false, isExpandable: this.props.data.length > 1};
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
                {this.state.isExpandable ?
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

