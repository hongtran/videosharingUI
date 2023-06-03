import React from 'react';
import { AuthContext } from '../App';
import { disconnect } from '../channels/actionCable';
import {useHistory} from 'react-router-dom'

const UserAction = ({user}) => {
    const { dispatch } = React.useContext(AuthContext);
    const handleLogout = () => {
        dispatch({
            type: 'LOGOUT',
        });
        disconnect();
    };
    let history = useHistory();
    return (
        <div className='user-actions'>
            <p>Welcome {user.email} </p>
            <a href="/videosharingUI/share">Share a movie</a>
            <button onClick={() => history.push('/videosharingUI/share')}>Share a movie</button>
            <button type="submit" onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default UserAction;
