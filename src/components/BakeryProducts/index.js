// == Import
import './styles.scss';
import { NavLink } from "react-router-dom";
import StarsRating from 'react-stars-rating/build/components/StarsRating';
import Product from './Product/Product';
import Heart from 'src/components/Heart/Heart';
import croissant from './images/croissant.jpg';
import { BiSearch } from "react-icons/bi";
import { productBakery15 } from '../../data/data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BakeryProducts = () => {
  console.log(productBakery15)
  const notifySuccess = () => toast.success('Produit ajouté au panier !', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

  return (
    <div className='bakery-page' >
      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
      <div className='bakery-bakery'>
        <div className='bakery-infos'>
          
            <img className="bakery-img" src={croissant} alt="croissant" />
            <div className='bakery-right-side'>
            <h2 className="bakery-name">{productBakery15.name}</h2>
            <StarsRating className='bakery-rating' />

            <div>
            <Heart className='bakery-like'/>
            </div>
            </div>
             
        </div>
      </div>

      <div className='bakery-all-products'>
        <div className='bakery-search'>
      <h2 className="bakery-products">Nos produits</h2>
      <BiSearch className="bakery-location"/>
      </div>
        <ul className='bakery-products-list'>
          {productBakery15.map((item) => (
            <Product
              key={Math.random().toString(36).substr(2, 9)}
              id={item.id}
              img={item.picture}
              name={item.name}
              price={item.price}
              notify={notifySuccess}
            />
          ))}
        </ul>
        <div className='basket-access' >
          <NavLink to="/basket" className='bakery-btn-to-basket'>Accéder au panier</NavLink>
        </div>
      </div>
    </div>
  );
}

// == Export
export default BakeryProducts;
