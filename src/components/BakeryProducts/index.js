// == Import
import './styles.scss';
import { NavLink } from "react-router-dom";
import StarsRating from 'react-stars-rating/build/components/StarsRating';
import Product from './Product/Product';
import Heart from 'src/components/Heart/Heart';
//import { productData } from 'src/data/data';




const BakeryProducts = () => {

  return (

    <div className='productpage'>
      <div className='bakery-info'>
        <div className='info'>
          <div>
            <h2>O'Lyon</h2>
            <StarsRating />
          </div>
          <input type='text' />
        </div>
        <div className='bakery-image'>
          <Heart />
        </div>
      </div>

      <ul className='products-list'>
        <Product />
        <Product />
        <Product />
        <Product />
        <NavLink to="/basket" className='btn-to-basket'>acceder au panier</NavLink>
      </ul>
      
      
    </div>
    


  );
}

// == Export
export default BakeryProducts;
