// == Import
import './styles.scss';

import Header from '../Header';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from 'src/components/HomePage';
import CheckoutBasket from 'src/components/CheckoutBasket';
import reactDom from 'react-dom';
import Contact from '../Contact';
import About from '../About';
import Blog from '../Blog';
import Formules from '../Formules';
import Log from '../Log';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Routes>
      <Route path="/login" element={<Log />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/yi" element={<CheckoutBasket />} />
      <Route path="/formulas" element={<Formules />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </div>
);

// == Export
export default App;
