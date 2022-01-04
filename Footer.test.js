import { render, screen } from "react-dom"
import Footer from "./src/Pages/Shared/Footer/Footer";



test('render about component', () => {
    render(<Footer />)
    
    const linkElement = screen.getByTestId("All rights preserved");
    expect(linkElement).toBeInTheDocument();

})