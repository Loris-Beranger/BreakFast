// == Import
import './styles.scss';

import Header from '../Header';
import { Routes, Route, Link } from 'react-router-dom';
import React, { useEffect } from "react";
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
import { addToBasket, getBasket } from '../../basketFunctions';
import { refreshBasket } from '../../actions/actions';



// == Composant
const App = () => {
  const currentAdress = useSelector((state) => state.currentAdress);
  const sidebar = useSelector((state) => state.sidebar);
  const axios = require('axios');
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('ajout du panier local storage au reducer')
    const basket = getBasket();
    dispatch(refreshBasket(basket));
  }, []);

  /* PANIER */
  
  const tab =
    {
      "id": 1,
      "name": "autem",
      "price": 3.43,
      "description": "How I wonder who will put on your shoes and stockings for you now, dears? I'm sure I don't like it, yer honour, at all, as the Caterpillar took the.",
      "picture": "https:\/\/picsum.photos\/id\/1\/200\/300",
      "bakery": {
        "name": "Erika Okuneva",
        "address": "62156 Schamberger Common\nMrazview, TN 12256",
        "profile_img": "https:\/\/picsum.photos\/id\/15\/200\/300",
        "phone_number": 753514692,
        "rating": 2,
        "status": 0,
        "delivery_fees": 3.02,
        "delivery_time": 24
      },
      "tag": [],
      "category": {
        "id": 7,
        "name": "bonbons"
      }
    }
  const tab2 = 
    {
      "id": 2,
      "name": "fugiat",
      "price": 4,
      "description": "I hadn't to bring but one; Bill's got the other--Bill! fetch it back!' 'And who are THESE?' said the King, 'and don't be nervous, or I'll have you.",
      "picture": "https:\/\/picsum.photos\/id\/2\/200\/300",
      "bakery": {
        "name": "Erika Okuneva",
        "address": "62156 Schamberger Common\nMrazview, TN 12256",
        "profile_img": "https:\/\/picsum.photos\/id\/15\/200\/300",
        "phone_number": 753514692,
        "rating": 2,
        "status": 0,
        "delivery_fees": 3.02,
        "delivery_time": 24
      },
      "tag": [],
      "category": {
        "id": 7,
        "name": "bonbons"
      }
    }
  /* const action = addToBasket(tab);
  dispatch(action);
  const action2 = addToBasket(tab2);
  dispatch(action2); */
 
    addToBasket(tab)
  
  
  /* ------- */

  useEffect(() => {
    /* axios.get('http://anthonyouzhene-server.eddi.cloud/projet-04-break-fast-back/public/api/bakery')
    .then(function (response) {
     console.log(response);
     const action = setBakeryList(response.data);
     dispatch(action);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    }) */

    /* axios
      .post("http://anthonyouzhene-server.eddi.cloud/projet-04-break-fast-back/public/index.php/api/login_check", {
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": "admin@breakfast.com",
	          "password": "admin"
          })
      })
      .then((response) => {
        console.log(response); // ici l'api me répond directement un object contenant le jeton dans une propriété token
      }); */
      
   
  }, [])

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
