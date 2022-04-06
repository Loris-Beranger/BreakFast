// == Import
import './styles.scss';
import BreakFastLogo from './images/breakfast-logo-light.png';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import * as BsIcons from "react-icons/bs";
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from 'src/actions/actions';

// == Composant
const NavBarMobile = () => {
  const sidebar = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();

  return (
    <nav className={sidebar ? 'navbar navbar-mobile active' : 'navbar navbar-mobile'}>
      <div className="wrapper-menu">
        <h2 className="title-side-menu">BreakFast</h2>
        <BsIcons.BsXLg className="icon-close" onClick={() => {
          const action  = toggleSidebar(!sidebar);
          dispatch(action);
        }}/>
      </div>
      <ul className="list-navbar">
        <li><NavLink to='/' className="nav-link nav-link-home" onClick={() => {
          const action  = toggleSidebar(!sidebar);
          dispatch(action);
        }}>Accueil</NavLink></li>
        <li><NavLink to='/formulas' className="nav-link nav-link-formulas" onClick={() => {
          const action  = toggleSidebar(!sidebar);
          dispatch(action);
        }}>Formules</NavLink></li>
        <li><NavLink to='/blog' className="nav-link nav-link-blog" onClick={() => {
          const action  = toggleSidebar(!sidebar);
          dispatch(action);
        }}>Blog</NavLink></li>
        <li><NavLink to='/about' className="nav-link nav-link-about" onClick={() => {
          const action  = toggleSidebar(!sidebar);
          dispatch(action);
        }}>A propos</NavLink></li>
        <li><NavLink to='/contact' className="nav-link nav-link-contact" onClick={() => {
          const action  = toggleSidebar(!sidebar);
          dispatch(action);
        }}>Contact</NavLink></li>
      </ul>
      <div className="box-account">
        <NavLink to='/login'  onClick={() => {
          const action  = toggleSidebar(!sidebar);
          dispatch(action);
        }}>
          <BsIcons.BsPersonCircle className="icon-account"/>
        </NavLink>
        <BsIcons.BsBoxArrowRight className="icon-logout"/>
      </div>
    </nav>
  );
}

// == Export
export default NavBarMobile;
