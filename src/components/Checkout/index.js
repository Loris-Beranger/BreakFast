// == Import
import React, { useState } from "react";
import remove from "./images/remove.png";
import verifie from "./images/verifie.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import "./styles.scss";
import { deliveryTime } from "../../basketFunctions";

// == Composant
const Checkout = () => {
  const currentAdress = useSelector((state) => state.currentAdress);
  const order = useSelector((state) => state.order);
  console.log(order);
  if (order.length === 0) {
    console.log("test");
    window.location.replace("/basket");
  }
  const time = deliveryTime(order.currentBakery.delivery_time)
  console.log(time)
  const shoppingBasketList = useSelector((state) => state.shoppingBasket);
  console.log(shoppingBasketList);

  const currentBakery = JSON.parse(localStorage.getItem("currentBakery"));
  console.log(currentBakery);

  const [popUp, setpopUp] = useState("nopopup");

  return (
    <div className="Checkout-Checkout">
      <div className="Checkout-infoPerso">
        <div className="Checkout-verif">vérification d'adresse :</div>
        <div className="Checkout-ville">{currentBakery.address}</div>

        <input type='text' />

        <div className="Checkout-commande" >
          {order.productsList.map((item) => (

            <p>{item.quantity} x {item.name}</p>

          ))}
        </div>



      </div>

      <div className="Checkout-droite">
        <div className="Checkout-Total">
          <div className="Checkout-ligne">Commande</div>
          <div className="Checkout-ligne">Frais de livraison</div>
          <div className="Checkout-Finalprice">Total</div>
          <div className="Checkout-btnPayer" onClick={() => setpopUp("popup")}>
            PAYER
          </div>
        </div>

        <div className="Checkout-Totaux">
          <div className="Checkout-ligne">{order.totalPrice}€</div>
          <div className="Checkout-ligne">{order.currentBakery.delivery_fees}€</div>
          <div className="Checkout-Finalprice">{order.totalPrice + order.currentBakery.delivery_fees}€</div>
        </div>
      </div>

      <div className="lapopup">
        <div className={popUp}>
          <div className="Checkout-btnEchap">
            <NavLink to="/checkout" onClick={() => setpopUp("nopopup")}>
              x
            </NavLink>
          </div>
          <div className="Checkout-confirmation">État de la commande : </div>
          <div className="Checkout-etat">Confirmé !</div>
          <div>
            <img className="Checkout-icone" src={verifie} alt="verifie" />
          </div>
          <div className="Checkout-heure">commande prête pour :</div>
          <div className='Checkout-time' >{time}</div>
        </div>
      </div>
    </div>
  );
};

// == Export
export default Checkout;

//Mathys
