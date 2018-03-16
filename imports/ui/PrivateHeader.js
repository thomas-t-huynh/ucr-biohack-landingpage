import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Link } from 'react-router';

const PrivateHeader = (props) => {
    const onLogout = () => {
        Accounts.logout();
    }

    return (
        <div className="header__bg">
            <div className="header">
                <Link className="header__link" to="/">Home</Link>
                <Link className="header__link" to="/">Sponsorship</Link>
                <Link className="header__link" to="/">Application</Link>
                <Link className="header__link" to="/">Contact</Link>
                <button className="button button--logout" onClick={() => {
                    Accounts.logout()
                }}>Logout</button>
            </div>
        </div>
    );
}
 

PrivateHeader.propTypes = {
    title: React.PropTypes.string.isRequired
}

export default PrivateHeader;