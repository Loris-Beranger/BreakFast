// == Import
import './styles.scss';

import IndividualProduct from 'src/components/IndividualProduct'
import { NavLink } from "react-router-dom";
//import React, {useEffect} from 'react';
import { productData } from 'src/data/data';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { getBasket } from '../../basketFunctions';



// == Composant
const CheckoutBasket = () => {
  const shoppingBasketList = useSelector((state) => state.shoppingBasket);
  console.log(shoppingBasketList);


  return (
    <div className="Basket-Basket">
      {shoppingBasketList.length == 0 ? (
        <div className='page-basket-empty'>
          <h2 className='title-basket-empty'>Votre panier est vide</h2>
          <img src='https://us.123rf.com/450wm/rudnijvlad/rudnijvlad1612/rudnijvlad161200024/68896821-panier-en-osier-ic%C3%B4ne-symbole-de-vecteur-vide-osier-illustration-illustration-vectorielle-isol%C3%A9-sur-.jpg?ver=6' className='img-basket'/>
          <NavLink to='/' className='basket-empty-to-home'>Retourner à l'accueil</NavLink>
        </div>
      ) : (
        <div className='oui'>
          <div className="Basket-products">
            {shoppingBasketList.map((item) => (
              <IndividualProduct
                key={Math.random().toString(36).substr(2, 9)}
                id={item.id}
                img={item.picture}
                prix={item.price}
                name={item.name}
                count={item.quantity}
              />
            ))}
          </div>

          <div className="Basket-PriceListe">
            <div>
              <div className="Basket-trait">
                {shoppingBasketList.map((item) => (
                  <div className="Basket-ligne">
                    <div className="Basket-productName">{item.name}</div>
                    <div className="Basket-productPrice">
                      {Math.round((item.price * item.quantity) * 100) / 100}
                    </div>
                  </div>
                ))}
              </div>
              <div className="Basket-paye">
                <NavLink to="/checkout" className="Basket-btnPayer">
                  PAYER
                </NavLink>
                <div className="Basket-totalPrice">1€</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


// == Export
export default CheckoutBasket;



//Mathys
