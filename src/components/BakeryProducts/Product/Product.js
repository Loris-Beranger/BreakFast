import './styles.scss';

import { NavLink } from "react-router-dom";
import croissant from './images/Pains-au-chocolat-brioché3.jpg';
import less from './images/minus.png';
import plus from './images/plus.png';


const Product = () => {

  let blocProduct = [];

  // pour chaque produit (different) on boucle l'etiquette; et les lignes de prix
  for (let i = 0; i<ProductNumber; i++){

    const [count, setCount] = useState(0);
    if (count <= -1){
      count = 0
    }
    
    blocProduct.push(
      <div className='Basket-product'>
        <img className='Basket-imgProduit' src={croissant} alt="img-croissant" />
        <div className='Basket-quantity'>{count}
            <div className='math'>
              <img onClick={() => setCount(count - 1)} className='less' src={less} alt="signe moins" />
              <img onClick={() => setCount(count + 1)} className='plus' src={plus} alt="signe plus" />
            </div>
        </div>     
      </div>
    )};

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
