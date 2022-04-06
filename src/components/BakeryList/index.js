// == Import
//import { AiOutlineHeart } from "react-icons/ai";
import './styles.scss';

import StarRating from 'src/components/StarRating/StarRating';
import Heart from 'src/components/Heart/Heart';
//import Tags from 'src/components/Tags/Tags'

import croissant from './images/croissant.jpg';
import pain from './images/pain.jpg';
import cupcake from './images/cupcake.jpg';

const BakeryList = () => {

  return (

    <div className="bakeries">

      <div className="column">

        <div className="bakery">
          <div className="like">
            <Heart />
          </div>
          <img className="bakery__img" src={croissant} alt="croissant" />
          <p className="bakery-deliverytime">10-20 min</p>

          <div className="bakery-infos">
            <h2 className="bakery-name">O'croissant</h2>
            <p className="bakery-deliverycost">Frais de livraison estimé : 1.50€</p>
          </div>
          <div className="rating">
            <StarRating />
          </div>
        </div>

        <div className="bakery">
          <div className="like">
            <Heart />
          </div>
          <img className="bakery__img" src={pain} alt="pain" />
          <p className="bakery-deliverytime">20-30 min</p>

          <div className="bakery-infos">
            <h2 className="bakery-name">Seigle et Son</h2>
            <p className="bakery-deliverycost">Frais de livraison estimé : 2.50€</p>
          </div>
          <div className="rating">
            <StarRating />
          </div>
        </div>

        <div className="bakery">
          <img className="bakery__img" src={cupcake} alt="cupcake" />
          <p className="bakery-deliverytime">30-40 min</p>

          <div className="bakery-infos">
            <h2 className="bakery-name">Les délices de Karen</h2>
            <p className="bakery-deliverycost">Frais de livraison estimé : 3.50€</p>
          </div>
          <div className="rating">
            <StarRating />
          </div>
        </div>

        <div className="bakery">
          <img className="bakery__img" src={croissant} alt="croissant" />
          <p className="bakery-deliverytime">10-20 min</p>

          <div className="bakery-infos">
            <h2 className="bakery-name">O'croissant</h2>
            <p className="bakery-deliverycost">Frais de livraison estimé : 1.50€</p>
          </div>
          <div className="rating">
            <StarRating />
          </div>
        </div>

        <div className="bakery">
          <img className="bakery__img" src={pain} alt="pain" />
          <p className="bakery-deliverytime">20-30 min</p>

          <div className="bakery-infos">
            <h2 className="bakery-name">Les petites douceurs de Loris</h2>
            <p className="bakery-deliverycost">Frais de livraison estimé : 2.50€</p>
          </div>
          <div className="rating">
            <StarRating />
          </div>
        </div>

        <div className="bakery">
          <img className="bakery__img" src={cupcake} alt="cupcake" />
          <p className="bakery-deliverytime">30-40 min</p>

          <div className="bakery-infos">
            <h2 className="bakery-name">Les pains cramés de Mathys</h2>
            <p className="bakery-deliverycost">Frais de livraison estimé : 3.50€</p>
          </div>
          <div className="rating">
            <StarRating />
          </div>
        </div>

        <div className="bakery">
          <img className="bakery__img" src={croissant} alt="croissant" />
          <p className="bakery-deliverytime">10-20 min</p>

          <div className="bakery-infos">
            <h2 className="bakery-name">O'croissant</h2>
            <p className="bakery-deliverycost">Frais de livraison estimé : 1.50€</p>
          </div>
          <div className="rating">
            <StarRating />
          </div>
        </div>

        <div className="bakery">
          <img className="bakery__img" src={pain} alt="pain" />
          <p className="bakery-deliverytime">20-30 min</p>

          <div className="bakery-infos">
            <h2 className="bakery-name">Seigle et Son</h2>
            <p className="bakery-deliverycost">Frais de livraison estimé : 2.50€</p>
          </div>
          <div className="rating">
            <StarRating />
          </div>
        </div>

      </div>
    </div>

  );
}

// == Export
export default BakeryList;
