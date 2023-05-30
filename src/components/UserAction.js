import React from 'react';
import { AuthContext } from '../App';
import { disconnect } from '../channels/actionCable';

const UserAction = ({user}) => {
    const { dispatch } = React.useContext(AuthContext);
    const handleLogout = () => {
        dispatch({
            type: 'LOGOUT',
        });
        disconnect();
    };
    return (
        <div className='user-actions'>
            <p>Welcome {user.email} </p>
            <a href="/share">Share a movie</a>
            <button type="submit" onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default UserAction;
