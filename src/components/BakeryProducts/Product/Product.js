import './styles.scss';

import { NavLink } from "react-router-dom";
import croissant from './images/Pains-au-chocolat-brioché3.jpg';


const Product = () => {


  return (
    <li className="product">
      <img className="product_img" src={croissant} alt="croissant" />
      <div className='product-info'>
        <div>
          <h2 className="product_name">Pain au chocolat</h2>
          <p className="product_price">1.10€</p>
        </div>
      </div>
      
      <div>
        <NavLink to="/basket" className='add-to-basket'>Ajouter au panier</NavLink>
      </div>
    </li>
  );
}

export default Product;
