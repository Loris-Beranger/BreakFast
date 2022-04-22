// == Import
import FormAdress from './FormAdress';
import Slider from 'src/components/Slider/Slider.js';
import './styles.scss';
import Categories from './Categories';


// == Composant
const HomePage = () => (
  <div className="homepage">
    
    <div className="section-form-adress">
    <Slider />
    <FormAdress />
    </div>
    <Categories />
  </div>
);

// == Export
export default HomePage;
