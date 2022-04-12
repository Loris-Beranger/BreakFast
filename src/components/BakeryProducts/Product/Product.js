import './styles.scss';

import { NavLink } from "react-router-dom";
import croissant from './images/Pains-au-chocolat-brioché3.jpg';
import less from './images/minus.png';
import plus from './images/plus.png';
import React, { useState } from 'react';

const Product = () => {

  const [count, setCount] = useState(0);
  if (count < 0) {
    setCount(0)
  }

  return (

      <li className="bakery-product">
        <img className="bakery-product_img" src={croissant} alt="croissant" />
        <div className='bakery-product-info'>
          <div>
            <h2 className="bakery-product_name">Pain au chocolat</h2>
            <p className="bakery-product_price">1.10€</p>
          </div>
          <div className='bakery-product-quantity'>{count}
        <div className='bakery-math'>
                <img onClick={() => setCount(count - 1)} className='less' src={less} alt="signe moins" />
                <img onClick={() => setCount(count + 1)} className='plus' src={plus} alt="signe plus" />
              </div>
        </div>
        </div>
        
        <div>
          <NavLink to="/basket" className='bakery-add-to-basket'>Ajouter au panier</NavLink>
        </div>
      </li>
  );
}

export default Product;
