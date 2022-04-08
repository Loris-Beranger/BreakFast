// == Import
import './styles.scss';
import imageCroissant from './images/image-croisasatn.png';
import less from './images/minus.png';
import plus from './images/plus.png';
import { NavLink } from "react-router-dom";
import React, { useState } from 'react';


// == Composant
const CheckoutBasket = () => {

  

let ProductNumber = 8;
let blocProduct = [];
let blocProductPrice = [];
let Totalàpayer = 30;
// totalàpayer devrait etre une addition de tout les prix; suremnt plus simple avec l'API 100%
let price = 16
  
  
// pour chaque produit (different) on boucle l'etiquette; et les lignes de prix
  for (let i = 0; i<ProductNumber; i++){

    const [count, setCount] = useState(0);
    if (count <= -1){
      count = 0
    }
    
    blocProduct.push(
      <div className='Basket-product'>
        <img className='Basket-imgProduit' src={imageCroissant} alt="img-croissant" />
        <div className='Basket-quantity'>{count}
            <div className='math'>
              <img onClick={() => setCount(count - 1)} className='less' src={less} alt="signe moins" />
              <img onClick={() => setCount(count + 1)} className='plus' src={plus} alt="signe plus" />
            </div>
        </div>     
      </div>
    )};
    
    for (let i = 0; i<ProductNumber; i++){

      blocProductPrice.push(
        <div className='Basket-ligne'>
          <div className='Basket-productName'>petit croissant au beurre</div>
          <div className='Basket-productPrice'>{price}</div>
        </div>
      )};


  return (
    <div className='Basket-Basket'>
      <div className='Basket-products'>
        {blocProduct}
      </div>

      <div className='Basket-PriceListe'>
        <div>
        <div className='Basket-trait'>
          {blocProductPrice}
        </div>
          <div className='Basket-paye'>
            <NavLink to="/checkout" className='Basket-btnPayer'>PAYER</NavLink>
            <div className='Basket-totalPrice'>{Totalàpayer}€</div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

// == Export
export default CheckoutBasket;



//Mathys
