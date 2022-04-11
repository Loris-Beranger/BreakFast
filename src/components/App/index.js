// == Import
import './styles.scss';

import Header from '../Header';
import { Routes, Route, Link } from 'react-router-dom';
import React from "react";
import ReactDOM from "react-dom";
import HomePage from 'src/components/HomePage';
import BakeryList from 'src/components/BakeryList';
import BakeryProducts from 'src/components/BakeryProducts';
import CheckoutBasket from 'src/components/CheckoutBasket';
import Checkout from 'src/components/Checkout';
import Contact from '../Contact';
import About from '../About';
import Blog from '../Blog';
import Formules from '../Formules';
import Log from 'src/components/Log';
import { useSelector, useDispatch } from 'react-redux';

// == Composant
const App = () => {
  const currentAdress = useSelector((state) => state.currentAdress);
  console.log(currentAdress)
  const sidebar = useSelector((state) => state.sidebar);


  return (
    <div className={!sidebar ? "app" : "app menu-active"}>
      <Header />
      <Routes>
        <Route path="/login" element={<Log />} />
        <Route path="/" element={!currentAdress ? <HomePage /> : <BakeryList />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/basket" element={<CheckoutBasket />} />
        <Route path="/formules" element={<Formules />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/bakery/list" element={<BakeryList />} /> */}
        <Route path="/bakery/list/products" element={<BakeryProducts />} />
      </Routes>
    </div>
  );
}

// == Export
export default App;
