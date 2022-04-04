// == Import
import './styles.scss';
import FormAdresse from 'src/components/FormAdresse';
import Header from '../Header';


// == Composant
const App = () => (
  <div className="app">
    <Header />
    <FormAdresse />
  </div>
);

// == Export
export default App;
