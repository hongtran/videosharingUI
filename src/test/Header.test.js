import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import { AuthContext } from '../App';

describe('Header', () => {
    test('renders LoginForm when not logged in', () => {
        const initialState = {
            isLogined: false,
            user: null,
            token: null,
        };
        render(
            <AuthContext.Provider value={{state: initialState, dispatch: jest.fn()}}>
              <Header />
            </AuthContext.Provider>
        );
        const loginFormElement = screen.getByTestId('login-form');
        expect(loginFormElement).toBeInTheDocument();
    });

    test('renders UserAction when logged in', () => {
        const state = {
            isLogined: true,
            user: {email: 'test@example.com'},
            token: '123456',
        };
        render(
            <AuthContext.Provider value={{state, dispatch: jest.fn()}}>
                <Header />
            </AuthContext.Provider>
        );
        const userActionElement = screen.getByText(/Welcome/i);
        expect(userActionElement).toBeInTheDocument();
    });
});
