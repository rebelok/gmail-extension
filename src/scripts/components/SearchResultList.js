'use strict';

var React   = require('react/addons'),
    Person  = require('./Person'),
    Strings = require('./Strings')(),
    log     = console.log.bind(console, Strings.get('app_name') + ': ');

require('styles/SearchResultList.css');

var SearchResultList = React.createClass({
    getInitialState: function () {
        return {showing: this.props.data.length};
    },
    render         : function () {
        log(this.props.data);
        var resultList = this.props.data.map(function (person) {
            return (
                <Person person={person} />
            );
        });
        return (
            <div className="b-search-bar__content">
                <div className="b-search-result__content">
                    <div className="b-search-result__header">
                        <span className="b-showing-label">Showing {this.state.showing} out of {this.props.total}</span>

                        <a className="b-link" href={this.props.showAllUrl ? this.props.showAllUrl : '#'}>
                        View all
                        </a>

                        <a className="b-link__logo" href={this.props.mainUrl}>
                            {Strings.get('app_name')}
                        </a>
                    </div>
                    <ul className="b-search-result__list">
                        {resultList}
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = SearchResultList;

