import { render, screen } from '@testing-library/react';
import Store from "./src/Pages/Store/Store";


test('renders store component', () => {
    render(<Store />);
    const linkElement = screen.getByText(/Buy Now/);
    expect(linkElement).toBeInTheDocument();
  });