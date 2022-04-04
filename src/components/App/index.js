// == Import
import './styles.scss';

import Header from '../Header';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from 'src/components/HomePage';
import CheckoutBasket from 'src/components/CheckoutBasket';
import reactDom from 'react-dom';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/yi" element={<CheckoutBasket />} />
    </Routes>
  </div>
);

// == Export
export default App;
