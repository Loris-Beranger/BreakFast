// == Import
import { Routes, Route, Link } from 'react-router-dom';

import React from "react";
import ReactDOM from "react-dom";

import HomePage from 'src/components/HomePage';
import BakeryList from 'src/components/BakeryList';
import CheckoutBasket from 'src/components/CheckoutBasket';

import './styles.scss';

// == Composant
const App = () => {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bakerylist" element={<BakeryList />} />
        <Route path="/yi" element={<CheckoutBasket />} />
      </Routes>
    </div>
  );
}

// == Export
export default App;
