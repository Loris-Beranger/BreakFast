// == Import
//import { AiOutlineHeart } from "react-icons/ai";
import './styles.scss';

import StarRating from 'src/components/StarRating/StarRating';
import Heart from 'src/components/Heart/Heart';
//import Tags from 'src/components/Tags/Tags'
import { GiWheat } from "react-icons/gi";
import { RiLeafLine } from "react-icons/ri";
import { SiLeaflet } from "react-icons/si";
import { TiHeartFullOutline } from "react-icons/ti";

import croissant from './images/croissant.jpg';
import pain from './images/pain.jpg';
import cupcake from './images/cupcake.jpg';

const BakeryList = () => {

  return (
    <div>
      <div className="tags">
        <div>
          <h1>Filtrer par diététique</h1>

          <div className="tag">
            <p> <SiLeaflet />Bio</p>
            <p> <TiHeartFullOutline />Vegan</p>
            <p> <RiLeafLine />Végétarien</p>
            <p> <GiWheat /> Sans gluten</p>
          </div>
        </div>
      </div>

      <div className="bakeries">

        <div className="column">

          <div className="bakery">
            <img className="bakery__img" src={croissant} alt="croissant" />
            <p className="bakery-deliverytime">10-20 min</p>

            <div className="bakery-infos">
              <div>
                <h2 className="bakery-name">O'croissant</h2>
                <p className="bakery-deliverycost">Frais de livraison : 1.50€</p>
              </div>
              <div className="like">
                <Heart />
              </div>
            </div>
            <div className="rating">
              <StarRating />
            </div>
          </div>

          <div className="bakery">
            <img className="bakery__img" src={pain} alt="pain" />
            <p className="bakery-deliverytime">20-30 min</p>

            <div className="bakery-infos">
              <div>
                <h2 className="bakery-name">Les pains d'Anth'O</h2>
                <p className="bakery-deliverycost">Frais de livraison : 2.50€</p>
              </div>
              <div className="like">
                <Heart />
              </div>
            </div>
            <div className="rating">
              <StarRating />
            </div>
          </div>

          <div className="bakery">
            <img className="bakery__img" src={cupcake} alt="cupcake" />
            <p className="bakery-deliverytime">30-40 min</p>

            <div className="bakery-infos">
              <div>
                <h2 className="bakery-name">Les délices de Karen</h2>
                <p className="bakery-deliverycost">Frais de livraison : 3.50€</p>
              </div>
              <div className="like">
                <Heart />
              </div>
            </div>
            <div className="rating">
              <StarRating />
            </div>
          </div>

          <div className="bakery">
            <img className="bakery__img" src={croissant} alt="croissant" />
            <p className="bakery-deliverytime">10-20 min</p>

            <div className="bakery-infos">
              <div>
                <h2 className="bakery-name">Bolos portugueses</h2>
                <p className="bakery-deliverycost">Frais de livraison : 1.50€</p>
              </div>
              <div className="like">
                <Heart />
              </div>
            </div>
            <div className="rating">
              <StarRating />
            </div>
          </div>

          <div className="bakery">
            <img className="bakery__img" src={pain} alt="pain" />
            <p className="bakery-deliverytime">20-30 min</p>

            <div className="bakery-infos">
              <div>
                <h2 className="bakery-name">Les petites douceurs</h2>
                <p className="bakery-deliverycost">Frais de livraison : 2.50€</p>
              </div>
              <div className="like">
                <Heart />
              </div>
            </div>
            <div className="rating">
              <StarRating />
            </div>
          </div>

          <div className="bakery">
            <img className="bakery__img" src={cupcake} alt="cupcake" />
            <p className="bakery-deliverytime">30-40 min</p>

            <div className="bakery-infos">
              <div>
                <h2 className="bakery-name">Chez Mathys et Loris</h2>
                <p className="bakery-deliverycost">Frais de livraison : 3.50€</p>
              </div>
              <div className="like">
                <Heart />
              </div>
            </div>
            <div className="rating">
              <StarRating />
            </div>
          </div>

          <div className="bakery">
            <img className="bakery__img" src={croissant} alt="croissant" />
            <p className="bakery-deliverytime">10-20 min</p>

            <div className="bakery-infos">
              <div>
                <h2 className="bakery-name">O'croissant</h2>
                <p className="bakery-deliverycost">Frais de livraison : 1.50€</p>
              </div>
              <div className="like">
                <Heart />
              </div>
            </div>
            <div className="rating">
              <StarRating />
            </div>
          </div>

          <div className="bakery">
            <img className="bakery__img" src={pain} alt="pain" />
            <p className="bakery-deliverytime">20-30 min</p>

            <div className="bakery-infos">
              <div>
                <h2 className="bakery-name">Seigle et Son</h2>
                <p className="bakery-deliverycost">Frais de livraison : 2.50€</p>
              </div>
              <div className="like">
                <Heart />
              </div>
            </div>
            <div className="rating">
              <StarRating />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// == Export
export default BakeryList;
