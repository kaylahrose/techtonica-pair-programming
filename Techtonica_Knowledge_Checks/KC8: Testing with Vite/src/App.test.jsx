// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders header correctly', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Hello Techtonica!');
    expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent('This is a Gratitud List');
  });

  test('renders form component', () => {
    render(<App />);
    expect(screen.getByPlaceholderText('Enter an item')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  test('adds new item when submitted', async () => {
    render(<App />);
    
    const input = screen.getByPlaceholderText('Enter an item');
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    await userEvent.type(input, 'New test item');
    await userEvent.click(submitButton);

    expect(await screen.findByText('New test item')).toBeInTheDocument();
  });

  test('handles empty input submission', async () => {
    render(<App />);
    
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    await userEvent.click(submitButton);

    // Check if no new items were added
    expect(await screen.queryByText(/New test item/i)).not.toBeInTheDocument();
  });
});
