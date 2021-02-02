import { Link } from 'react-router-dom';

import './navbar.styles.css';

const Navbar = () => {
  return(
    <div className="navbar">
      <Link to="/home" className="navbar-logo">Bookshelf - Codetest</Link>
      <ul className="navbar-links">
        <Link to="/home"><li>Home</li></Link>
        <Link to="/addBook"><li>Add book</li></Link>
      </ul>
    </div>
  )
}

export default Navbar;