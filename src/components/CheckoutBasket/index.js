// == Import
import './styles.scss';

import IndividualProduct from 'src/components/IndividualProduct'
import { NavLink } from "react-router-dom";
//import React, {useEffect} from 'react';
import { productData } from 'src/data/data';
import axios from 'axios';



// == Composant
const CheckoutBasket = () => {

  

  return (
    <div className='Basket-Basket'>
      <div className='Basket-products'>

            {productData.map((item) => (
            <IndividualProduct
              key={item.id}
              img={item.img}
              prix={item.price}
              name={item.name}
            />
          ))}

      </div>

      <div className='Basket-PriceListe'>
        <div>
          <div className='Basket-trait'>
            {productData.map((item) => (
              <div className='Basket-ligne'>
                <div className='Basket-productName'>{item.name}</div>
                <div className='Basket-productPrice'>8</div>
              </div>
              ))}
          </div>
          <div className='Basket-paye'>
            <NavLink to="/checkout" className='Basket-btnPayer'>PAYER</NavLink>
            <div className='Basket-totalPrice'>€</div>
          </div>
        </div>
      </div>
    </div>
    
  );};


// == Export
export default CheckoutBasket;



//Mathys
