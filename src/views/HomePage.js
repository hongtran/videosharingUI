import React from 'react';
import Videoshareds from '../components/Videoshareds';
import Header from '../components/Header';
import { AuthContext } from '../App';

function HomePage() {
    const { state } = React.useContext(AuthContext);
    return (
        <div className='container'>
            <Header/>
            <hr/>
            {state.isLogined ? <Videoshareds /> : <h3>Welcome</h3>}
        </div>
    );
}

export default HomePage;
