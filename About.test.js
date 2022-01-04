import { render, screen } from "react-dom"
import About from "./src/Pages/Home/About/About"


test('render about component', () => {
    render(<About />)
    
    const linkElement = screen.getByTestId("about");
    expect(linkElement).toBeInTheDocument();

})