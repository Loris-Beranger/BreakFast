// == Import
import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from 'src/actions/actions';
import { NavLink } from 'react-router-dom';
// Images
import BreakFastLogo from './images/breakfast-logo-light.png'
import ShoppingBasket from './images/basket-icon-light.png'
import CupLog from './images/cup-empty-notconnected.png'
// Composants
import NavBarDesktop from './NavBarDesktop';
import NavBarMobile from './NavBarMobile';

const Header = () => {
  // Récupère état side menu
  const sidebar = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();

  return (
    <header className="header">
      <div className="header-mobile">
        <NavBarMobile />
        <div className="header-buttons">
          <div className="box-img">
          <i className={sidebar ? 'bars icon btn-menu-burger active' : 'bars icon btn-menu-burger'} onClick={() => {
            const action  = toggleSidebar(!sidebar);
            dispatch(action);
          }}></i>
          </div>
          <div className="box-img">
          </div>
          <div className="box-img">
            <NavLink to='/basket'>
              <i className="shopping basket icon btn-basket"></i>
            </NavLink>
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
            <NavLink to='/basket' className="box-button-header nav-link">
              <img src={ShoppingBasket} className="buttons-header icon-basket" />
              <span className="span-btn">Panier</span>
            </NavLink>
            <NavLink to='/login' className="box-button-header nav-link">
              <img src={CupLog} className="buttons-header icon-cuplog" />
              <span className="span-btn">Connexion</span>
            </NavLink>
          </div>
        </div>
        <NavBarDesktop />
        
      </div>
    </header>
  );
}

// == Export
export default Header;
