// == Import
import './styles.scss';

import less from './images/minus.png';
import plus from './images/plus.png';
import React, { useState } from 'react';


// == Composant
const IndividualProduct = ({ img,  name, prix}) => {
  //const dispatch = useDispatch();

  const [count, setCount] = useState(0);

  
  if(count < 0){
    setCount(0)
  } 

  //console.log('count: ' + count)

  //OBJECTIF? TROUVE UN MIOYEN D4AVOIR LA MOYENNE? LE TOTAL 
  
  let TotalIndividuel = Math.round((count * prix) * 100) / 100;
  
  //let total = la somme de tout les TOtalIndividuel
  
  //const action = setTotalBasket(TotalIndividuel);
  //dispatch(action);

  //useEffect(() => {}, []);


  return (

        <div className='Basket-product'>
    <img className='Basket-imgProduit' src={img} alt="img-croissant" />
    <div className='Basket-info' >
      <div className='Basket-individual-product-name' >{name}</div>
      <div className='Basket-individual-product-total-price' >{TotalIndividuel}€</div>
    </div>
    <div className='Basket-quantity'>{count}
      <div className='math'>
        <img onClick={() => setCount(count - 1)} className='less' src={less} alt="signe moins" />
        <img onClick={() => setCount(count + 1)} className='plus' src={plus} alt="signe plus" />
      </div>
    </div>  
  </div>
    
  );};


// == Export
export default IndividualProduct;



//Mathys
