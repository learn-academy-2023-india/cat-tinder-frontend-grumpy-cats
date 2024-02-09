import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route} from "react-router-dom";
import CatShow from "../pages/CatShow"
import mockCat from "../mockCat.js"



describe("<CatShow />", () => {
  it("renders an image", () => {
    render(
      <MemoryRouter initialEntries={["/catshow/1"]}>
        <Routes>
          <Route path="/catshow/:id" element={<CatShow cats={mockCat} />} />
        </Routes>
      </MemoryRouter>
    )
    const image = screen.getByRole("img")
    expect(image).toHaveAttribute("src", "https://img.freepik.com/premium-photo/3d-rendering-funny-tiger_183364-25983.jpg")
    expect(image).toHaveAttribute("alt", "profile of all our cats friends")
  }) 
  
  it("renders one cat", () => {
    const cat = "1"
    render(
      <MemoryRouter initialEntries={[`/catshow/${cat}`]}>
        <Routes>
          <Route path="/catshow/:id" element={<CatShow cats={mockCat} />} />
        </Routes>
      </MemoryRouter>
    )

    const name = screen.getByText(`Introducing, ${mockCat[0].name}!`)
    expect(name).toBeInTheDocument()
    const age = screen.getByText(`Age: ${mockCat[0].age}`)
    expect(age).toBeInTheDocument()
    const enjoy = screen.getByText(`Enjoys: ${mockCat[0].enjoys}`)
    expect(enjoy).toBeInTheDocument()
  })
})