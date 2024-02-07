import React from "react"
import catLogo from "../assets/cat-logo.png"
const Header = () => {
  return (
    <>
        <header>
            <img
            src={catLogo}
            alt="Cat Tinder logo with outline of cat"
            className="cat-logo"
          />
          <p>"Come get your PURRRR on! Find that special kittyCat to share your catbed!" -Lio 
          </p>
        </header>
    </>
  )
}

export default Header