'use strict';

var React          = require('react/addons'),
    Avatar         = require('./Avatar'),
    SiteLink       = require('./SiteLink');

require('styles/PersonDetails.css');

var PersonDetails = React.createClass({

    render      : function () {
        return (
            <div className="b-person-details">
                <SiteLink url={this.props.person.Link} title={this.props.person.FirstName + ' ' + this.props.person.LastName} />
                <div className="b-person-details__main">
                    <Avatar big={true} url={this.props.person.AvatarUrl} fullname={this.props.person.FirstName + ' ' + this.props.person.LastName}/>
                    <div className="b-person-details__text">
                        <div className="b-person-details__name">
                          {this.props.person.FirstName + ' ' + this.props.person.LastName}
                        </div>
                    {this.props.person.Position ?
                        <div className="b-person-details__position">
                            {this.props.person.Position}
                        </div>
                        : null}
                    {this.props.person.CompanyName ?
                        <div className="b-person-details__company">
                            {this.props.person.CompanyName}
                        </div>
                        : null}
                    </div>
                </div>


            </div>
        );
    }
});

module.exports = PersonDetails;

