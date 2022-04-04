// == Import
import './styles.scss';


// == Composant
const Header = () => (
  <header className="header">
    <div className="headerbox">
      <img />
      <h1>Votre petit dek en un clic</h1>
      <div className="box-buttons">
        <img />
        <img />
      </div>
      <nav className="menu-nav">
        <ul className="nav-list">
          <li><a>Accueil</a></li>
          <li><a>Formules</a></li>
          <li><a>Blog</a></li>
          <li><a>A propos</a></li>
          <li><a>Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

// == Export
export default Header;
