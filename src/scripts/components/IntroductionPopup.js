'use strict';

var React         = require('react/addons'),
    PersonDetails = require('./PersonDetails'),
    $ = require('../vendor/jquery.js'),
    strings       = require('./Strings')();

require('styles/IntroductionPopup.css');

var IntroductionPopup = React.createClass({
    getInitialState: function () {
        return {value: '', canRequest: false};
    },
    sendRequest    : function sendRequest() {
        $.ajax({
            url      : strings.get('link__introduce'),
            type     : 'POST',
            data     : {
                introduceViewModel: {
                    UserId     : this.props.person.Id,
                    ToUserId   : '',
                    Description: this.state.value
                }
            },
            xhrFields: {withCredentials: true}
        }).success(function(){
            console.log('request sent');
            this.props.close();
        }.bind(this));

    },
    handleChange   : function (event) {
        this.setState({value: event.target.value, canRequest: event.target.value.length > 0});
    },
    render         : function () {
        return (
            <div className="b-intro-popup">
                <div className="b-popup">
                    <h1>Request an introduction to:</h1>
                    <PersonDetails person={this.props.person} />
                    <h2>Who should make an introduction:</h2>
                    <div className="b-people-list">

                    </div>
                    <div className="b-introduction">
                        <textarea className="b-intro__text" rel="text" value={this.state.value} onChange={this.handleChange}/>
                    </div>
                    <button className="b-action-button b-action-button_color_blue" disabled={this.state.canRequest ? null : 'disabled'} onClick={this.sendRequest} >Request an introduction</button>
                    <button className="b-action-button" onClick={this.props.close} >Cancel</button>
                </div>
            </div>
        );
    }
});

module.exports = IntroductionPopup;

