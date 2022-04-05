// == Import
import './styles.scss';
import BreakFastLogo from './images/breakfast-logo-light.png'
import ShoppingBasket from './images/basket-icon-light.png'
import CupLog from './images/cup-empty-notconnected.png'
import NavBar from './NavBar';

import { NavLink } from 'react-router-dom';

// == Composant
const Header = () => (
  <header className="header">
    <div className="header-mobile">
      <div className="header-buttons">
        <div className="box-img">
        <i className="bars icon btn-menu-burger"></i>
        </div>
        <div className="box-img">
        </div>
        <div className="box-img">
        <i className="shopping basket icon btn-basket"></i>
          </div>
      </div>
      <h1 className="slogan">Votre petit dej en un clic</h1>
    </div>

    <div className="header-laptop">
      <div className="header-buttons">
        <div className="box-logo-slogan">
          <img src={BreakFastLogo} className="logo-breakfast"/>
          <h1 className="slogan">Votre petit dej en un clic</h1>
        </div>
        <div className="buttons-basket-log">
          <div className="box-button-header">
            <img src={ShoppingBasket} className="buttons-header icon-basket" />
            <span className="span-btn">Panier</span>
          </div>
          <div className="box-button-header">
            <img src={CupLog} className="buttons-header icon-cuplog" />
            <span className="span-btn">Connexion</span>
            {/* <div className="dropdown-content">
              <ul>
                <li><NavLink to='/account'/>Mon compte</li>
                <li><NavLink to='/account'/>Mes commandes</li>
                <li><NavLink to='/account'/>Favoris</li>
                <li><NavLink to='/account'/>Backoffice</li>
                <li><NavLink to='/account'/>Déconnection</li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
      <NavBar />
      
    </div>
  </header>
);

// == Export
export default Header;
