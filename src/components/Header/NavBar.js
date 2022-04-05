// == Import
import './styles.scss';
import BreakFastLogo from './images/breakfast-logo-light.png';
import { NavLink } from 'react-router-dom';

// == Composant
const NavBar = () => {
  

  return (
    <nav className="navbar">
      <ul className="list-navbar">
        <li className="nav-link"><NavLink to='/blog'/>Accueil</li>
        <li className="nav-link link-formulas">
          <div>
            <NavLink to="/formulas" className="link-component">Formules</NavLink>
            <div className="dropdown-content">
                <ul>
                  <li><NavLink to='/account'/>P'tit dej en amoureux</li>
                  <li><NavLink to='/account'/>Formules entreprise</li>
                  <li><NavLink to='/account'/>Anniversaire</li>
                </ul>
              </div>
          </div></li>
        <li className="nav-link"><NavLink to='/blog'/>Blog</li>
        <li className="nav-link"><NavLink to='/about'/>A propos</li>
        <li className="nav-link"><NavLink to='/contact'/>Contact</li>
      </ul>
    </nav>
  );
}

// == Export
export default NavBar;
