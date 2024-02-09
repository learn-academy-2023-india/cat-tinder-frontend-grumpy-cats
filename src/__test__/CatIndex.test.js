import { render, screen } from "@testing-library/react"
import CatIndex from "../pages/CatIndex"
import { BrowserRouter } from "react-router-dom"
import mockCat from "../mockCat.js"

describe("<CatIndex />", () => {
  it("renders all cat cards", () => {
    render(
      <BrowserRouter>
        <CatIndex cats={mockCat} />
      </BrowserRouter>
    )
    
    mockCat.forEach((cat) => {
      const catName = screen.getByText(cat.name)
      const catAge = screen.getByText(`Age: ${cat.age}`)
      expect(catName).toBeInTheDocument()
      expect(catAge).toBeInTheDocument()
    })
  })

  it("each card renders an image", () => {
    render(
      <BrowserRouter>
        <CatIndex cats={mockCat} />
      </BrowserRouter>
    )
  
    mockCat.forEach((cat) => {
      const catImage = screen.getByAltText(`profile of a cat named ${cat.name}`)
      expect(catImage).toHaveAttribute("src", cat.image)
    })
  })
})