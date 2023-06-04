import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginForm from '../components/LoginForm';
import { AuthContext } from '../App';

describe('LoginForm', () => {
  test('should update email value when user types in the email input', () => {
    const { getByLabelText } = render(
      <AuthContext.Provider value={{ dispatch: jest.fn() }}>
        <LoginForm />
      </AuthContext.Provider>
    );
    const emailInput = getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'hong@example.com' } });
    expect(emailInput.value).toBe('hong@example.com');
  });
})
