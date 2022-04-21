// == Import
import './styles.scss';

import IndividualProduct from 'src/components/IndividualProduct'
import { NavLink } from "react-router-dom";
//import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshBasket, setOrder } from '../../actions/actions';



// == Composant
const CheckoutBasket = () => {
  const dispatch = useDispatch();
  const shoppingBasketList = useSelector((state) => state.shoppingBasket);
  console.log(shoppingBasketList);
  const currentBakery = JSON.parse(localStorage.getItem('currentBakery'));
  let total = 0;
  shoppingBasketList.forEach(element => {
    console.log(element);   
    total += Math.round((element.price * element.quantity) * 100) / 100
  });


  return (
    <div className="Basket-Basket">
      {shoppingBasketList.length == 0 ? (
        <div className='page-basket-empty'>
          <h2 className='title-basket-empty'>Votre panier est vide</h2>
          <img src='https://us.123rf.com/450wm/rudnijvlad/rudnijvlad1612/rudnijvlad161200024/68896821-panier-en-osier-ic%C3%B4ne-symbole-de-vecteur-vide-osier-illustration-illustration-vectorielle-isol%C3%A9-sur-.jpg?ver=6' className='img-basket'/>
          <NavLink to='/' className='basket-empty-to-home'>Retourner à l'accueil</NavLink>
        </div>
      ) : (
        <div className='page-checkout-basket'>
          <div className="Basket-products">
            {shoppingBasketList.map((item) => (
              <IndividualProduct
                key={Math.random().toString(36).substr(2, 9)}
                id={item.id}
                img={item.picture}
                prix={item.price}
                name={item.name}
                count={item.quantity}
              />
            ))}
          </div>

          <div className="Basket-PriceListe">
              <ul className="Basket-trait">
                {shoppingBasketList.map((item) => (
                  <li className="Basket-ligne">
                    <span className="Basket-productName">{item.name}</span>
                    <span className="Basket-productPrice">
                      {Math.round((item.price * item.quantity) * 100) / 100} €
                    </span>
                  </li>
                ))}
              </ul>
              <div className="Basket-paye">
                <NavLink to="/checkout" className="Basket-btnPayer" onClick={() => {
                  const order = {
                    'productsList': shoppingBasketList,
                    'currentBakery': currentBakery,
                    'totalPrice': total,
                  }
                  const action = setOrder(order)
                  dispatch(action);
                }}>
                  PAYER
                </NavLink>
                <div className="Basket-totalPrice"><span>Total:</span> <span>{total}€</span></div>
              </div>
          </div>
        </div>
      )}
    </div>
  );
};


// == Export
export default CheckoutBasket;

