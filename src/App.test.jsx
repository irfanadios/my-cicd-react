import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

test('Memastikan judul muncul di layar', () => {
  render(<App />);
  const linkElement = screen.getByText(/CI\/CD Workshop/i);
  expect(linkElement).toBeInTheDocument();
});