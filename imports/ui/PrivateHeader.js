import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Link } from 'react-router';

const PrivateHeader = (props) => {

    const isAuthenticated = !!Meteor.userId();

    return (
        <div className="header__bg header-top">
            <div className="header">
                <Link className="header__link" to="/">Home</Link>
                <Link className="header__link" to="/sponsorship">Sponsorship</Link>
                <Link className="header__link" to="/signup">Application</Link>
                <Link className="header__link" to="/contact">Contact</Link>
            </div>
        </div>
    );
}

export default PrivateHeader;