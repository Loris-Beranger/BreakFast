// == Import
import './styles.scss';
import { NavLink } from "react-router-dom";
import StarsRating from 'react-stars-rating/build/components/StarsRating';
import Product from './Product/Product';
import Heart from 'src/components/Heart/Heart';
import croissant from './images/croissant.jpg';

const BakeryProducts = () => {

  return (

    <div className="bakery-part">

      <div className='bakery'>
        <div className='bakery_infos'>
          <div>
            <img className="bakery_img" src={croissant} alt="croissant" />
            <h2 className="bakery__name">O'Lyon</h2>
            <StarsRating />
          </div>
          <input type='text' />
        </div>
        <div className='bakery__like'>
          <Heart />
        </div>
      </div>

      <div>
        <div className='products'>
          <h2 className="all-products">Nos produits</h2>
          <ul className='products-list'>
            <Product />
            <Product />
            <Product />
            <Product />
          </ul>
          <div>
            <NavLink to="/basket" className='btn-to-basket'>Voir le panier</NavLink>
          </div>
        </div>
      </div>

    </div>
  );
}

// == Export
export default BakeryProducts;
