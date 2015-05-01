'use strict';

var React           = require('react/addons');

require('styles/IntroductionPopup.css');

var IntroductionPopup = React.createClass({
    render: function () {
        return (
            <div className="b-intro-popup">
                <p>Content for IntroductionPopup</p>
            </div>
        );
    }
});

module.exports = IntroductionPopup;

