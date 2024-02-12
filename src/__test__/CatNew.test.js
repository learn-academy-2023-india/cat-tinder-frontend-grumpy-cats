import { render, screen } from "@testing-library/react"
import CatNew from "../pages/CatNew"
import { BrowserRouter } from "react-router-dom"

describe("<CatNew />", () => {
    it("renders a button", () => {
        render(
            <BrowserRouter>
                <CatNew />
            </BrowserRouter>
         )
        const catButton = screen.getByRole('button', {
            name: /submit/i
        })
        expect(catButton).toBeInTheDocument()    
    })

    it("renders a form for a new cat", () => {
        render(
            <BrowserRouter>
                <CatNew createCat={() => {}} />
            </BrowserRouter>
        )

        const name = screen.getByTestId("name")
        expect(name).toBeInTheDocument()
        const age = screen.getByTestId("age")
        expect(age).toBeInTheDocument()
        const enjoys = screen.getByTestId("enjoys")
        expect(enjoys).toBeInTheDocument()
        const image = screen.getByTestId("image")
        expect(image).toBeInTheDocument()
        const submit = screen.getByText("Submit")
        expect(submit).toBeInTheDocument()
  })
})