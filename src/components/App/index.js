// == Import
import './styles.scss';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from 'src/components/HomePage';
import BakeryList from 'src/components/BakeryList';
import CheckoutBasket from 'src/components/CheckoutBasket';
import reactDom from 'react-dom';


// == Composant
const App = () => (
  <div className="app">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/bakerylist" element={<BakeryList />} />
      <Route path="/yi" element={<CheckoutBasket />} />
    </Routes>
    
  </div>
);

// == Export
export default App;
