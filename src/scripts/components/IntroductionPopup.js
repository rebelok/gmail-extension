'use strict';

var React           = require('react/addons'),
    PersonDetails = require('./PersonDetails');

require('styles/IntroductionPopup.css');

var IntroductionPopup = React.createClass({
    sendRequest: function sendRequest(){
        console.log('request sent');
        this.props.close();
    },
    render: function () {
        return (
            <div className="b-intro-popup">
                <div className="b-popup">
                    <h1>Request an introduction to:</h1>
                    <PersonDetails person={this.props.person} />
                    <h2>Who should make an introduction:</h2>
                    <div className="b-people-list">

                        </div>
                    <div className="b-introduction">
                        <textarea className="b-intro__text" rel="text" />
                        </div>
                    <button className="b-action-button b-action-button_color_blue" onClick={this.sendRequest} >Request an introduction</button>
                    <button className="b-action-button" onClick={this.props.close} >Cancel</button>
                </div>
            </div>
        );
    }
});

module.exports = IntroductionPopup;

