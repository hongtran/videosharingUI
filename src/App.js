import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import Share from './views/Share';
import { connect, subscribe, disconnect } from './channels/actionCable';
import NotificationPopup from './components/NotificationPopup';
import api from './api';

export const AuthContext = React.createContext();
const initialState = {
  isLogined: false,
  user: null,
  token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      console.log('action.payload.user:', action.payload.user);
      return {
        ...state,
        isLogined: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case 'LOGOUT':
      localStorage.clear();
      return {
        ...state,
        isLogined: false,
        user: null,
        token: null,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [emailShared, setEmailShared] = useState('');
  const [titleShared, setTitleShared] = useState('');

  const handleReceivedNotification = (data) => {
    setEmailShared(data.email);
    setTitleShared(data.title);
  }

  useEffect( () => {
    if (state.token === null) {
      return;
    }
    api.defaults.headers.common['Authorization'] = 'Bearer ' + state.token;
    connect("ws://localhost:3000/cable" + "?token=" + state.token);
    subscribe({channel: 'NotificationsChannel'}, {
        connected: () => {
            console.log("connected");
        },
        received: (data) => {
            console.log(data.email + " shared " + data.title);
            handleReceivedNotification(data);
        }
    });
    return () => {
      disconnect();
    }
  }, [state.token]);

  return (
    <Router>
      {(emailShared && titleShared) ? (<NotificationPopup email={emailShared} title={titleShared} />) : null} 
      <AuthContext.Provider
        value={{
          state,
          dispatch,
        }}
      >
      <Switch>
        {/* <Route path="/videoshareds" component={Videoshareds}/> */}
        <Route exact path="/" component={HomePage}/>
        <Route path="/share" component={Share}/>
      </Switch>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
