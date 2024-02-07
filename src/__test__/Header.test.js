import { render, screen } from '@testing-library/react';
import Header from "../components/Header"
import { BrowserRouter } from "react-router-dom"


describe("<Header />", () => {
  it("renders a logo with a src and alt", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    const header = screen.getByRole("img")
    expect(header).toHaveAttribute("src", "cat-logo.png")
    expect(header).toHaveAttribute("alt", "Cat Tinder logo with outline of cat")
  })
})

export default Header
