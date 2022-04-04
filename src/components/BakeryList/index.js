// == Import
import './style.scss';

import image from './images/coffee-img.jpg';

const BakeryList = () => {
 
  return (
    <div>
      <div className="bakery">
        <img className="bakery__img" src={image} alt="photo cafe" />
        <p className="bakery-deliverytime">30-10 min</p>
        <h2 className="bakery-name">O'croissant</h2>
        <p className="bakery-deliverycost">Frais de livraison estimé : 2.50€</p>
        <div className="rating">
          <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
        </div>
      </div>

      <div className="bakery">
        <img className="bakery__img" src={image} alt="photo cafe" />
        <p className="bakery-deliverytime">30-10 min</p>
        <h2 className="bakery-name">O'croissant</h2>
        <p className="bakery-deliverycost">Frais de livraison estimé : 2.50€</p>
      </div>
    </div>

  );
}

// == Export
export default BakeryList;
