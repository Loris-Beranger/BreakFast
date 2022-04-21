// == Import
import FormAdress from './FormAdress';
import './styles.scss';
import Categories from './Categories';
import Carrousel from './Carrousel';

// == Composant
const HomePage = () => (
  <div className="homepage">
    <div className="section-form-adress">
      <Carrousel />
      <FormAdress />
    </div>
    <Categories />
  </div>
);

// == Export
export default HomePage;
