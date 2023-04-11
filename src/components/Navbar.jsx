import { NavLink } from 'react-router-dom';
/* import './Navbar.css'; */

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <NavLink className="navbar__link" to="/svg_generator">
            Home
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className="navbar__link" to="/svg_generator/gallery">
           Gallery
          </NavLink>
        </li>
        {/* <li className="navbar__item">
          <NavLink className="navbar__link" to="profile">
          Profile
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
