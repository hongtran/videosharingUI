import React from 'react';
import Header from '../components/Header';
import ShareForm from '../components/ShareForm';

function Share() {
    return (
        <div className='container'>
            <Header/>
            <hr/>
            <ShareForm />
        </div>
    );
}

export default Share;
