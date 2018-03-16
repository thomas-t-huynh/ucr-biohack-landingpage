import React from 'react';
import PrivateHeader from './PrivateHeader';
import LandingPage from './LandingPage';
import Footer from './Footer';


export default Dashboard = () => (
    <div>
        <PrivateHeader title="Meteor plate" />
        <div className="page-content">
            <LandingPage />
        </div>
        <Footer />
    </div>
);