import React, { useEffect, useState } from 'react';
import Videoshareds from '../components/Videoshareds';
import Header from '../components/Header';
import '../App.css';

function HomePage() {
    return (
        <div className='container'>
            <Header/>
            <hr/>
            <Videoshareds />
        </div>
    );
}

export default HomePage;
