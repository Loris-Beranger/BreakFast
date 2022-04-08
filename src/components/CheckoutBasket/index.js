// == Import
import './styles.scss';
import imageCroissant from './images/image-croisasatn.png';
import less from './images/minus.png';
import plus from './images/plus.png';
import { NavLink } from "react-router-dom";
import React, { useState } from 'react';


// == Composant
const CheckoutBasket = () => {

    const [count, setCount] = useState(0);
    if(count < 0){
      setCount(0)
    }  

  return (
    <div className='Basket-Basket'>
      <div className='Basket-products'>

        <div className='Basket-product'>
          <img className='Basket-imgProduit' src={imageCroissant} alt="img-croissant" />
          <div className='Basket-boite' >
            <div className='Basket-product-name' >croissant</div>
              <div className='Basket-quantity'>{count}
                <div className='math'>
                  <img onClick={() => setCount(count - 1)} className='less' src={less} alt="signe moins" />
                  <img onClick={() => setCount(count + 1)} className='plus' src={plus} alt="signe plus" />
                </div>
              </div>  
          </div>
             
        </div>


      </div>

      <div className='Basket-PriceListe'>
        <div>
        <div className='Basket-trait'>
          <div className='Basket-ligne'>
            <div className='Basket-productName'>petit croissant au beurre</div>
            <div className='Basket-productPrice'>8</div>
          </div>
        </div>
          <div className='Basket-paye'>
            <NavLink to="/checkout" className='Basket-btnPayer'>PAYER</NavLink>
            <div className='Basket-totalPrice'>18€</div>
          </div>
        </div>
      </div>
    </div>
    
  );};


// == Export
export default CheckoutBasket;



//Mathys
