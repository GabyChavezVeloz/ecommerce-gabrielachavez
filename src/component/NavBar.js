import CartWidget from "./CartWidget"
import {Link , NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
      <>
        
        <nav className="nav">
          <Link to="/"><h1>Cat Shoes</h1></Link>
          <Link to="/category/cat" className="nav__link">cat</Link>
          <Link to="/category/comodos" className="nav__link">comodos</Link>
          <Link to="/category/kitty" className="nav__link">kitty</Link>

            <a href="#" className="nav_link"><CartWidget/></a>
        </nav>
        
   </>
  )
}

export default NavBar
