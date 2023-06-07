import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ShareForm from '../components/ShareForm';
import { AuthContext } from '../App';
import { waitFor } from '@testing-library/react';
import api from '../api';
import { act } from 'react-dom/test-utils';

describe('ShareForm', () => {
    test('should update title value when user types in the title input', async () => {
        const { getByLabelText } = render(
        <AuthContext.Provider value={{ dispatch: jest.fn() }}>
            <ShareForm />
        </AuthContext.Provider>
        );
        const titleInput = getByLabelText(/title/i);
        await act(() => {
            fireEvent.change(titleInput, { target: { value: 'test title' } });
        });
        expect(titleInput.value).toBe('test title');
    });

    test('submit form and handles successful share', async() => {
        dispatch = jest.fn();
        const mockResponse = {
            data: {
                url: 'test-url',
                title: 'test-title',
            },
        };
        api.post = jest.fn().mockResolvedValue(mockResponse);
        const { getByLabelText, getByRole } = render(
            <AuthContext.Provider value={{ dispatch }}>
                <ShareForm />
            </AuthContext.Provider>
        );
        const urlInput = getByLabelText(/url/i);
        const titleInput = getByLabelText(/title/i);
        const submitButton = getByRole('button', { name: /share/i });
        await act(() => {
            fireEvent.change(urlInput, { target: { value: 'test-url' } });
            fireEvent.change(titleInput, { target: { value: 'test-title' } });
        });
        await act(() => {
            fireEvent.click(submitButton);
        });
        await waitFor(() => expect(api.post).toHaveBeenCalledTimes(1));
    });
});
