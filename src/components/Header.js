import React, { useEffect, useState } from 'react';
import LoginForm from './LoginForm';
import UserAction from './UserAction';
import '../App.css';

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({});

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        console.log('loggedInUser:', loggedInUser);
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUser({});
        localStorage.clear();
    };

    const handleLogin = (user) => {
        setIsLoggedIn(true);
        setUser(user);
    };

    
    return (
        <div className='header'>
            <h1>Funny Videos</h1>
            {isLoggedIn ? (
                <UserAction user={user} onLogout={handleLogout} />
            ) : (
            <LoginForm onLogin={handleLogin} />
            )}
        </div>
    );
}

export default Header;
