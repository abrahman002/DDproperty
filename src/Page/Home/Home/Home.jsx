import React from 'react';
import Banner from '../Banner/Banner';
import HomeBegin from '../HomeBegin/HomeBegin';
import LatestProject from '../LatestProject/LatestProject';
import Videos from '../Videos/Videos';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeBegin></HomeBegin>
            <LatestProject></LatestProject>
            <Videos></Videos>
        </div>
    );
};

export default Home;