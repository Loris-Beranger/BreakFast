// == Import
import './styles.scss';
import BreakFastLogo from './images/breakfast-logo-light.png';
import { NavLink } from 'react-router-dom';
import * as BsIcons from "react-icons/bs";

// == Composant
const NavBarDesktop = () => {
  

  return (
    <nav className="navbar navbar-mobile">
      <div className="wrapper-menu">
        <h2 className="title-side-menu">BreakFast</h2>
        <BsIcons.BsXLg className="icon-close"/>
      </div>
      <ul className="list-navbar">
        <li><NavLink to='/' className="nav-link">Accueil</NavLink></li>
        <li><NavLink to='/formulas' className="nav-link">Formules</NavLink></li>
        <li><NavLink to='/blog' className="nav-link">Blog</NavLink></li>
        <li><NavLink to='/about' className="nav-link">A propos</NavLink></li>
        <li><NavLink to='/contact' className="nav-link">Contact</NavLink></li>
      </ul>
      <div className="box-account">
        <BsIcons.BsPersonCircle className="icon-account"/>
        <BsIcons.BsBoxArrowRight className="icon-logout"/>
      </div>
    </nav>
  );
}

// == Export
export default NavBarDesktop;
