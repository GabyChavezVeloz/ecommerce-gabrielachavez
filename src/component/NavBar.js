import CartWidget from "./CartWidget"
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
        
      <nav className="nav">
        <Link to="/"><h1>Cat Shoes</h1></Link>
        <Link to="/category/cat" className="nav__link">cat</Link>
        <Link to="/category/comodos" className="nav__link">comodos</Link>
        <Link to="/category/kitty" className="nav__link">kitty</Link>
        <Link to="/category/flats" className="nav__link">flats</Link>
          <CartWidget/>
      </nav>
        
   
  )
}

export default NavBar
