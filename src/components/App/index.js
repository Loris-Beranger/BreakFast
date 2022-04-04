// == Import
import { Routes, Route, Link } from 'react-router-dom';

import React from "react";
import ReactDOM from "react-dom";
import Rating from './StarRatingComponent';

import HomePage from 'src/components/HomePage';
import BakeryList from 'src/components/BakeryList';
import CheckoutBasket from 'src/components/CheckoutBasket';

import './styles.scss';

// == Composant
class App extends React.Component {

  render() {
    const { rating } = this.state;

    return (
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bakerylist" element={<BakeryList />} />
          <Route path="/yi" element={<CheckoutBasket />} />
        </Routes>

        <StarRatingComponent
          name="rate2"
          editing={false}
          renderStarIcon={() => <span></span>}
          starCount={10}
          value={8}
        />

      </div>
    );
  }
}

// == Export
export default App;
ReactDOM.render(
  <App />,
  document.getElementById("app")
);
