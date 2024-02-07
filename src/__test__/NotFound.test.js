import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import NotFound from "../pages/NotFound"

describe("<NotFound />", () => {
    it("renders a gif with a src and alt", () => {
      render(
        <BrowserRouter>
          <NotFound />
        </BrowserRouter>
      )
      const header = screen.getByRole("img")
      expect(header).toHaveAttribute("src", "wtfcat.gif")
      expect(header).toHaveAttribute("alt", "Gif not found")
    })
  })