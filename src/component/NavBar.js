import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
      <>
        <h1>Mi Tiendita</h1>
        <nav className="nav">
            <a href="#" className="nav_link">link 1 </a>
            <a href="#" className="nav_link">link 2 </a>
            <a href="#" className="nav_link"><CartWidget/></a>
        </nav>
        
   </>
  )
}

export default NavBar
