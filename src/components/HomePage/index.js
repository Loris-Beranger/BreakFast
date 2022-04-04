// == Import
import FormAdress from './FormAdress';
import './styles.scss';
import Tags from './Tags';


// == Composant
const HomePage = () => (
  <div className="homepage">
    <div className="section-form-adress">
      <FormAdress />
    </div>
    <Tags />
  </div>
);

// == Export
export default HomePage;
