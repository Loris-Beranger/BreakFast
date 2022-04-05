// == Import
import './styles.scss';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from 'src/components/HomePage';
import CheckoutBasket from 'src/components/CheckoutBasket';
import Checkout from 'src/components/Checkout';
import reactDom from 'react-dom';


// == Composant
const App = () => (
  <div className="app">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/basket" element={<CheckoutBasket />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  </div>
);

// == Export
export default App;
