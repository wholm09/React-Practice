import { render, screen } from '@testing-library/react';
import Keyboard from './Keyboard';

test('renders the table', () => {
  render(<Keyboard />);

  // render table check
  const tableElement = screen.getByRole('table');
  expect(tableElement).toBeInTheDocument();
});
