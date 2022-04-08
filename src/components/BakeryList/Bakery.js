// == Import
import './styles.scss';
import Heart from 'src/components/Heart/Heart';
import StarRating from 'src/components/StarRating/StarRating';
// == Composant
const Bakery = ({ img, time, name, delivery_fees }) => {

    return (
        <div className="bakery">
            <img className="bakery__img" src={img} alt="croissant" />
            <p className="bakery-deliverytime">{time} min</p>
            <div className="bakery-infos">
                <div>
                    <h2 className="bakery-name">{name}</h2>
                    <p className="bakery-deliverycost">Frais de livraison : {delivery_fees}€</p>
                    <div className="rating">
                        <StarRating />
                    </div>
                </div>
                <div className="like">
                    <Heart />
                </div>
            </div>
            
        </div>
    );
}

// == Export
export default Bakery;
