import React from 'react';
import Banner from '../Banner/Banner';
import HomeBegin from '../HomeBegin/HomeBegin';
import LatestProject from '../LatestProject/LatestProject';
import Videos from '../Videos/Videos';
import Handpicked from '../Handpicked/Handpicked';
import Condos from '../Condos/Condos';
import Curated from '../Curated/Curated';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeBegin></HomeBegin>
            <LatestProject></LatestProject>
            <Videos></Videos>
            <Handpicked></Handpicked>
            <Condos></Condos>
            <Curated></Curated>
        </div>
    );
};

export default Home;