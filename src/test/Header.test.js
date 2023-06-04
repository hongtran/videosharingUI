import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import { AuthContext } from '../App';

// Mock the AuthContext module
// jest.mock('../App', () => ({
//     AuthContext: {
//         Provider:{
//             state: {
//                 isLogined: false,
//                 user: null,
//                 token: null,
//             },
//             dispatch: jest.fn(),
//       },
//     },
// }));
const initialState = {
    isLogined: false,
    user: null,
    token: null,
};

describe('Header', () => {
    test('renders LoginForm when not logged in', () => {
        render(
            <AuthContext.Provider value={{state: initialState, dispatch: jest.fn()}}>
              <Header />
            </AuthContext.Provider>
        );
        const loginFormElement = screen.getByTestId('login-form');
        expect(loginFormElement).toBeInTheDocument();
    });
});
