// == Import
import './styles.scss';

// == Composant
const Header = () => (
  <header className="header">
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
  </header>
);

// == Export
export default Header;
