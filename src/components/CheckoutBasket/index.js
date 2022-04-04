// == Import
import './styles.scss';
import imageCroissant from './images/image-croisasatn.png';
import less from './images/minus.png';
import plus from './images/plus.png';


// == Composant
const CheckoutBasket = () => {

const num = 1;

  return (
    <div className='Basket'>
      <div className='products'>
      <div className='product'>
          <img className='imgProduit' src={imageCroissant} alt="img-croissant" />
            <div className='quantity'>{num}
                <div className='math'>
                  <img className='less' src={less} alt="signe moins" />
                  <img className='plus' src={plus} alt="signe plus" />
                </div>
              </div>     
        </div>
        
      </div>

      <div className='limite'></div>

      <div className='PriceListe'>
        <div>
          <div className='ligne'>
            <div className='productName'>petit croi  fsdfsdfs fsdfsdfs fsdfsdfs fsdfsdfs fsdfsdfs fsdfsdfs vv fsdfsdfs fsdfsdfs fsdfsdfs </div>
            <div className='productPrice'>15</div>
          </div>
          
          <div className='ligne'>
            <div className='productName'>petit croissant au beurre</div>
            <div className='productPrice'>15</div>
          </div>
          <div className='ligne'>
            <div className='productName'>petit croissant au beurre</div>
            <div className='productPrice'>15</div>
          </div>
          <div className='ligne'>
            <div className='productName'>petit croissant au beurre</div>
            <div className='productPrice'>15</div>
          </div>
          <div className='ligne'>
            <div className='productName'>petit croissant au beurre</div>
            <div className='productPrice'>15</div>
          </div>
          <div className='ligne'>
            <div className='productName'>petit croissant au beurre</div>
            <div className='productPrice'>15</div>
          </div>
          <div className='ligne'>
            <div className='productName'>petit croissant au beurre</div>
            <div className='productPrice'>15</div>
          </div>
          <div className='ligne'>
            <div className='productName'>petit croissant au beurre</div>
            <div className='productPrice'>15</div>
          </div>
          <div className='ligne'>
            <div className='productName'>petit croissant au beurre</div>
            <div className='productPrice'>15</div>
          </div>
        <div className='limitePrice'></div>
        <div className='paye'>
          <button className='btnPayé'>PAYÉ</button>
          <div className='totalPrice'>30 €</div>
        </div>
        </div>
      </div>

      </div>
    
  );
};

// == Export
export default CheckoutBasket;
