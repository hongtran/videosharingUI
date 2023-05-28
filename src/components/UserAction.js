import React, { useState } from 'react';
import '../App.css';

const UserAction = ({user, onLogout}) => {
    return (
        <div className='user-actions'>
            <p>Welcome {user.email} </p>
            <a href="/share">Share a movie</a>
            <button type="submit" onClick={onLogout}>Logout</button>
        </div>
    );
}

export default UserAction;
