// == Import
import './styles.scss';
import Heart from 'src/components/Heart/Heart';
import StarRating from 'src/components/StarRating/StarRating';
import { NavLink } from 'react-router-dom';
import { setCurrentBakery } from '../../actions/actions';
import { useDispatch } from 'react-redux';
import { addDelFavoris, getFavoris } from '../../favorisFunctions';
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { useState } from 'react';
// == Composant
const Bakery = ({ id, img, time, name, delivery_fees, rating, bakery }) => {
    console.log(id);
    const dispatch = useDispatch();
    const favorisList = getFavoris();

    const [isFav, setIsFav] = useState(favorisList.find(i => i == id) ? true : false);  

    return (
      <div className="bakery-list-bakery">
        <NavLink
          to="/bakery/list/products"
          className="link-image"
          onClick={() => {
            const action = setCurrentBakery(bakery);
            dispatch(action);
            localStorage.setItem("currentBakery", JSON.stringify(bakery));
          }}
        >
          <img className="bakery-list-bakery__img" src={img} alt="croissant" />
        </NavLink>
        <p className="bakery-list-bakery-deliverytime">{time} min</p>
        <div className="bakery-list-bakery-infos">
          <div>
            <h2 className="bakery-list-bakery-name">{name}</h2>
            <p className="bakery-list-bakery-deliverycost">
              Frais de livraison : {delivery_fees}€
            </p>
            <div className="bakery-list-rating">
              <StarRating value={rating} />
            </div>
          </div>
          {isFav == false ? (
            <BsSuitHeart
              className="bakery-fav"
              onClick={() => {
                console.log(id);
                addDelFavoris(id);
                setIsFav(true);
              }}
            />
          ) : (
            <BsSuitHeartFill
              className="bakery-fav-fill"
              onClick={() => {
                console.log(id);
                addDelFavoris(id);
                setIsFav(false);
              }}
            />
          )}
        </div>
      </div>
    );
}

// == Export
export default Bakery;
