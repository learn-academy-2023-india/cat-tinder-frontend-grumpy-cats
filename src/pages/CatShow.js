import React from "react"
import { useParams } from "react-router-dom"

const CatShow = ({ cats }) => {
  const { id } = useParams()
  const cat = cats.find((cat) => cat.id === +id)


  if (!cat) {
    return <>Cat not found!</>
}

  return (
    <>
      <div className="show-cat">
      <h3>Introducing, {cat?.name}!</h3>
      <img
        src={cat?.image}
        alt="profile of all our cats friends"
        className="cat-profile-pic"
      />
        <div className="show-text">
          <p>Age: {cat?.age}</p>
          <p>Enjoys: {cat?.enjoys}</p>  
        </div>
      </div>
    </>
  )
}

export default CatShow