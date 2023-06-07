import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginForm from '../components/LoginForm';
import { AuthContext } from '../App';
import { waitFor } from '@testing-library/react';
import api from '../api';
import { act } from 'react-dom/test-utils';

describe('LoginForm', () => {
  test('should update email value when user types in the email input', () => {
    const { getByLabelText } = render(
      <AuthContext.Provider value={{ dispatch: jest.fn() }}>
        <LoginForm />
      </AuthContext.Provider>
    );
    const emailInput = getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailInput.value).toBe('test@example.com');
  });

  test('should update password value when user types in the password input', () => {
    const { getByLabelText } = render(
      <AuthContext.Provider value={{ dispatch: jest.fn() }}>
        <LoginForm />
      </AuthContext.Provider>
    );
    const passwordInput = getByLabelText(/password/i);
    fireEvent.change(passwordInput, { target: { value: 'test password' } });
    expect(passwordInput.value).toBe('test password');
  });

    jest.mock('../api', () => ({
        post: jest.fn(),
    }));

  test('submits the form and and handles successful login', async() => {
    const dispatch = jest.fn();
    const mockResponse = {
        data: {
          token: 'test-token',
          user: {
            id: 1,
            name: 'Test User',
            email: 'test@example.com',
          },
        },
      };
    api.post = jest.fn().mockResolvedValue(mockResponse);

    const { getByLabelText, getByRole } = render(
        <AuthContext.Provider value={{ dispatch }}>
            <LoginForm />
        </AuthContext.Provider>
    );
    const emailInput = getByLabelText(/email/i);
    const passwordInput = getByLabelText(/password/i);
    const submitButton = getByRole('button', { name: /login/i });
    await act(() => {
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password' } });
    });
    await act(() => {
        fireEvent.click(submitButton);
    });
    
    await waitFor(() => expect(api.post).toHaveBeenCalledTimes(1));
  });
});
