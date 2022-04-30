import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
      <>
        
        <nav className="nav">
          <h1>Cat Shoes</h1>
            <a href="#" className="nav_link">link 1 </a>
            <a href="#" className="nav_link">link 2 </a>
            <a href="#" className="nav_link"><CartWidget/></a>
        </nav>
        
   </>
  )
}

export default NavBar
