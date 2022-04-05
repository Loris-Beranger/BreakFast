// == Import
import './styles.scss';
import imageCroissant from './images/image-croisasatn.png';
import less from './images/minus.png';
import plus from './images/plus.png';
import { NavLink } from "react-router-dom";


// == Composant
const CheckoutBasket = () => {

let num = 0;
  function add() {
    num++;
    console.log(num);
  };
  function takeAway() {
    num--;
    console.log(num);
  };


  return (
    <div className='Basket'>
      <div className='products'>
      <div className='product'>
          <img className='imgProduit' src={imageCroissant} alt="img-croissant" />
            <div className='quantity'>{num}
                <div className='math'>
                  <img onClick={takeAway} className='less' src={less} alt="signe moins" />
                  <img onClick={add} className='plus' src={plus} alt="signe plus" />
                </div>
              </div>     
        </div>
        <div className='product'>
          <img className='imgProduit' src={imageCroissant} alt="img-croissant" />
            <div className='quantity'>{num}
                <div className='math'>
                  <img onClick={takeAway} className='less' src={less} alt="signe moins" />
                  <img onClick={add} className='plus' src={plus} alt="signe plus" />
                </div>
              </div>     
        </div>
        <div className='product'>
          <img className='imgProduit' src={imageCroissant} alt="img-croissant" />
            <div className='quantity'>{num}
                <div className='math'>
                  <img onClick={takeAway} className='less' src={less} alt="signe moins" />
                  <img onClick={add} className='plus' src={plus} alt="signe plus" />
                </div>
              </div>     
        </div>
        <div className='product'>
          <img className='imgProduit' src={imageCroissant} alt="img-croissant" />
            <div className='quantity'>{num}
                <div className='math'>
                  <img onClick={takeAway} className='less' src={less} alt="signe moins" />
                  <img onClick={add} className='plus' src={plus} alt="signe plus" />
                </div>
              </div>     
        </div>
        <div className='product'>
          <img className='imgProduit' src={imageCroissant} alt="img-croissant" />
            <div className='quantity'>{num}
                <div className='math'>
                  <img onClick={takeAway} className='less' src={less} alt="signe moins" />
                  <img onClick={add} className='plus' src={plus} alt="signe plus" />
                </div>
              </div>     
        </div>
        <div className='product'>
          <img className='imgProduit' src={imageCroissant} alt="img-croissant" />
            <div className='quantity'>{num}
                <div className='math'>
                  <img onClick={takeAway} className='less' src={less} alt="signe moins" />
                  <img onClick={add} className='plus' src={plus} alt="signe plus" />
                </div>
              </div>     
        </div>
        <div className='product'>
          <img className='imgProduit' src={imageCroissant} alt="img-croissant" />
            <div className='quantity'>{num}
                <div className='math'>
                  <img onClick={takeAway} className='less' src={less} alt="signe moins" />
                  <img onClick={add} className='plus' src={plus} alt="signe plus" />
                </div>
              </div>     
        </div>
        <div className='product'>
          <img className='imgProduit' src={imageCroissant} alt="img-croissant" />
            <div className='quantity'>{num}
                <div className='math'>
                  <img onClick={takeAway} className='less' src={less} alt="signe moins" />
                  <img onClick={add} className='plus' src={plus} alt="signe plus" />
                </div>
              </div>     
        </div>
        
      </div>

      <div className='limite'></div>

      <div className='PriceListe'>
        <div>
          <div className='ligne'>
            <div className='productName'>petit croi  fsdfsdfs fsdfsdfs fsdfsdfs fsdfsdfs fsdfsdfs  </div>
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
          <NavLink to="/checkout" className='btnPayé'>PAYÉ</NavLink>
          <div className='totalPrice'>30 €</div>
          

        </div>
        </div>
      </div>

      </div>
    
  );
};

// == Export
export default CheckoutBasket;



//Mathys
