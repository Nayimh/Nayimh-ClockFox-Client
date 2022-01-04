import { render, screen } from "react-dom"

import Login from "./src/Pages/Login/Login/Login";


it("submit collectly", () => {
    render(<Login />)
    
    const linkElement = screen.getByTestId("login");
    expect(linkElement).toBeInTheDocument();
})
