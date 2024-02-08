import React from "react"
import catLogo from "../assets/cat-logo.png"
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <Nav className="header-nav">
      <NavItem>
        <NavLink to="/">
          <img
            src={catLogo}
            alt="Cat Tinder logo with outline of cat"
            className="cat-logo"
          />
        </NavLink>
      </NavItem>
      <div className="nav-links">
       <NavItem>
        <NavLink to="/catindex" className="nav-link">
          Meet Local Cats
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/catnew" className="nav-link">
          Create Cat Account
        </NavLink>
      </NavItem> 
      </div>
      
    </Nav>
  )
}

export default Header


// <>
    //     <header>
    //         <img
    //         src={catLogo}
    //         alt="Cat Tinder logo with outline of cat"
    //         className="cat-logo"
    //       />
    //       <p>"Come get your PURRRR on! Find that special kittyCat to share your catbed!" -Lio 
    //       </p>
    //     </header>
    // </>









