// == Import
import FormAdress from './FormAdress';
import './styles.scss';
import Categories from './Categories';
import Carrousel from 'src/components/Carrousel';

// == Composant
const HomePage = () => (
  <div className="homepage">
    <Carrousel />
    <div className="section-form-adress">
      <FormAdress />
    </div>
    <Categories />
  </div>
);

// == Export
export default HomePage;
