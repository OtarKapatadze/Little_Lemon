import { render,fireEvent, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm';

test('renders the BookingForm heading', () => {
  render(<BookingForm />);
  const HeadingElement = screen.getByText();
  expect(linkElement).toBeInTheDocument();
});





// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

