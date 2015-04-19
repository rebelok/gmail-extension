'use strict';

var React           = require('react/addons'),
    TransitionGroup = React.addons.CSSTransitionGroup,
    strings         = require('./Strings')();

require('styles/InfoBar.css');

var InfoBar = React.createClass({
        getInitialState  : function () {
            return {
                mounted   : false,
                shouldHide: !!localStorage.getItem('linkInviteLearnmoreShown')
            };
        },
        componentDidMount: function () {
            setTimeout(function () {
                this.setState({mounted: true});
            }.bind(this), 2000);
        },
        close            : function () {
            localStorage.setItem('linkInviteLearnmoreShown', 1);
            this.setState({shouldHide: true});
        },
        render           : function () {
            var content;
            if (this.state.mounted) {
                content = !this.state.shouldHide ?
                    <div key="infobar" className="b-info-bar">
                        <span>The more contacts you will invite the broader network and the more information you have</span>
                        <a className="b-link" href={strings.get('link__invite__learnmore')}>Learn more</a>
                        <button className="b-close" onClick={this.close}/>
                    </div>
                    : <span key="noInfobar"/>;
            }
            return (
                <div>
                    <TransitionGroup transitionName="appear">
                        {content}
                    </TransitionGroup>
                </div>
            );
        }
    })
    ;

module.exports = InfoBar;

