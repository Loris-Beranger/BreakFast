// == Import
import './styles.scss';
import { NavLink } from "react-router-dom";
import StarsRating from 'react-stars-rating/build/components/StarsRating';
import Product from './Product/Product';
import Heart from 'src/components/Heart/Heart';
import croissant from './images/croissant.jpg';

const BakeryProducts = () => {

  return (


    <div className='bakery-page' >

      <div className='bakery-bakery'>
        <div className='bakery-infos'>
          <div>
            <img className="bakery-img" src={croissant} alt="croissant" />
            <h2 className="bakery-name">O'Lyon</h2>
            <StarsRating />
          </div>
          <input type='text' />
          <div className='bakery__like'>
            <Heart />
          </div>
        </div>
        <div className='bakery-like'>
          <Heart />
        </div>
      </div>
      <h2 className="bakery-all-products">Nos produits</h2>
          <ul className='bakery-products-list'>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </ul>
        <div>
          <NavLink to="/basket" className='bakery-btn-to-basket'>Accéder au panier</NavLink>
        </div>
      
    </div>
  );
}

// == Export
export default BakeryProducts;
