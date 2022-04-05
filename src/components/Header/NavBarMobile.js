// == Import
import './styles.scss';
import BreakFastLogo from './images/breakfast-logo-light.png';
import { NavLink } from 'react-router-dom';

// == Composant
const NavBarDesktop = () => {
  

  return (
    <nav className="navbar navbar-mobile">
      <ul className="list-navbar">
        <li><NavLink to='/' className="nav-link">Accueil</NavLink></li>
        <li><NavLink to='/formulas' className="nav-link">Formules</NavLink></li>
        <li><NavLink to='/blog' className="nav-link">Blog</NavLink></li>
        <li><NavLink to='/about' className="nav-link">A propos</NavLink></li>
        <li><NavLink to='/contact' className="nav-link">Contact</NavLink></li>
      </ul>
    </nav>
  );
}

// == Export
export default NavBarDesktop;
