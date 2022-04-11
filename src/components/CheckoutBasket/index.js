// == Import
import './styles.scss';

import IndividualProduct from 'src/components/IndividualProduct'
import { NavLink } from "react-router-dom";
import React, {useEffect} from 'react';
import { productData } from 'src/data/data';
import { useSelector, useDispatch } from 'react-redux'; 



// == Composant
const CheckoutBasket = () => {
  const totalBasket = useSelector((state) => state.totalBasket);
  console.log(totalBasket)
 
  
  return (
    <div className='Basket-Basket'>
      <div className='Basket-products'>

            {productData.map((item) => (
            <IndividualProduct
              key={item.id}
              img={item.img}
              prix={item.prix}
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
                <div className='Basket-productPrice'>{item.prix}</div>
              </div>
              ))}
          </div>
          <div className='Basket-paye'>
            <NavLink to="/checkout" className='Basket-btnPayer'>PAYER</NavLink>
            <div className='Basket-totalPrice'>{totalBasket}€</div>
          </div>
        </div>
      </div>
    </div>
    
  );};


// == Export
export default CheckoutBasket;



//Mathys
