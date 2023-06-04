import React, { useEffect} from 'react';
import LoginForm from './LoginForm';
import UserAction from './UserAction';
import '../App.css';
import { AuthContext } from '../App';


function Header() {
    const {state, dispatch} = React.useContext(AuthContext);

    useEffect( () => {
        const loggedInUser = localStorage.getItem('user');
        const token = localStorage.getItem('token');
        console.log('loggedInUser:', loggedInUser);
        if (loggedInUser) {
            const user = JSON.parse(loggedInUser);
            dispatch({
                type: 'LOGIN',
                payload: {user, token, isLogined: true},
            });
        }
    }, []);
    
    return (
        <div className='header'>
            <h1>Funny Videos</h1>
            {state.isLogined ? (
                <UserAction user={state.user} />
            ) : (
            <LoginForm />
            )}
        </div>
    );
}

export default Header;
