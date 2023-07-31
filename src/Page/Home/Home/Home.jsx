import React from 'react';
import Banner from '../Banner/Banner';
import HomeBegin from '../HomeBegin/HomeBegin';
import LatestProject from '../LatestProject/LatestProject';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeBegin></HomeBegin>
            <LatestProject></LatestProject>
        </div>
    );
};

export default Home;