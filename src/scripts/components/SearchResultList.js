'use strict';

var React            = require('react/addons'),
    Person           = require('./Person'),
    OutsideNetHeader = require('./OutsideNetHeader'),
    strings          = require('./Strings')(),
    log              = console.log.bind(console, strings.get('app_name') + ': ');

require('styles/SearchResultList.css');

var SearchResultList = React.createClass({
    getInitialState: function () {
        return {showing: this.props.data.length};
    },
    render         : function () {
        log(this.props.data);
        var insideNetwork = true;
        var additional;
        var resultList = this.props.data.map(function (person, index) {
            additional = null;
            if (insideNetwork && person.Proximity === 0) {
                insideNetwork = false;
                additional = <OutsideNetHeader count={this.props.data.length - index}/>;
            }
            return (
                <div key={person.Id}>
                    {additional}
                    <Person person={person} />
                </div>
            );
        }.bind(this));
        return (
            <div className="b-search-bar__content">
                <div className="b-search-result__content">
                    <div className="b-search-result__header">
                        <span className="b-showing-label">Showing {this.state.showing} out of {this.props.total}</span>

                        <a className="b-link" href={this.props.showAllUrl ? this.props.showAllUrl : '#'}>
                        View all
                        </a>

                        <a className="b-link__logo" href={this.props.mainUrl}>
                            {strings.get('app_name')}
                        </a>
                    </div>
                    <div className="b-search-result__list">
                        {resultList}
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = SearchResultList;

