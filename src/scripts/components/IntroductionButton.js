'use strict';

var React = require('react/addons'),
    IntroductionPopup = require('./IntroductionPopup'),
    strings = require('./Strings')();

require('styles/IntroductionButton.css');

var IntroductionButton = React.createClass({
    getInitialState: function getInitialState(){
      return {open:false};
    },
    close:function close(){
        this.setState({open:false});
    },
    open:function open(){
        this.setState({open:true});
    },
  render: function () {
    return (
        <div className={this.state.open ? 'b-intro b-intro_state_open': 'b-intro'} >
            <button className="b-intro__button" onClick={this.open}>Request introduction</button>

            {this.state.open ? <IntroductionPopup person={this.props.person} close={this.close}/> : null}

            </div>
      );
  }
});

module.exports = IntroductionButton;

