import React, { useState } from "react"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { useNavigate } from "react-router-dom"

const CatNew = ({ createCat }) => {
  const navigate = useNavigate()
  const [newCat, setNewCat] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: ""
  })
  const handleChange = (e) => {
    setNewCat({ ...newCat, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    createCat(newCat)
    navigate("/catindex")
  }

  return (
      <div className="form-container">
        <h1>Cat New</h1>
        <Form onSubmit={handleSubmit} className="form">
        <FormGroup>
        <Label for="name">
          Name
        </Label>
        <Input
        type="text" 
         name="name"
         data-testid="name"
         onChange={handleChange} 
        value={newCat.name}
        />
        </FormGroup>
        <FormGroup>
        <Label for="Age">
          Age
        </Label>
        <Input
        type="number" 
        data-testid="age"
        name="age" 
        onChange={handleChange} 
        value={newCat.age} 
        />
        </FormGroup>
        <FormGroup>
        <Label for="enjoys">
          Enjoys
        </Label>
        <Input
        type="text" 
        data-testid="enjoys"
        name="enjoys" 
        onChange={handleChange} 
        value={newCat.enjoys} 
        />
       </FormGroup>
        <FormGroup>
        <Label for="image">
          Image
        </Label>
        <Input
        type="text" 
        data-testid="image"
        name="image" 
        onChange={handleChange} 
        value={newCat.image} 
        />
       </FormGroup>
       <Button onClick={handleSubmit} type="submit" name="submit">
          Submit
        </Button>
        </Form>
      </div>
  )
}


export default CatNew