import { render, screen } from '@testing-library/react';
import ReactIcon from './ReactIcon';

test('renders learn react link', () => {
  render(<ReactIcon />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
