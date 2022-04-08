import './styles.scss';

import { TiHeartFullOutline } from "react-icons/ti";
import croissant from './images/Pains-au-chocolat-brioché3.jpg';


const Product = () => {


  return (
    <li className="product">
      <img className="product_img" src={croissant} alt="croissant" />
      <div className='product-info'>
        <div>
          <h2 className="product_name">Chocolatines au beurre</h2>
          <p className="product_price">1.10€</p>
        </div>
        <TiHeartFullOutline />
      </div>
    </li>
  );
}

export default Product;