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

  it("has clickable links", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    userEvent.click(screen.getByText("Meet Local Cats"))
    expect(screen.getByText("Meet Local Cats")).toBeInTheDocument()
    userEvent.click(screen.getByText("Create Cat Account"))
    expect(screen.getByText("Create Cat Account")).toBeInTheDocument()
  })
})

export default Header
