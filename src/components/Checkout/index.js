// == Import
import Field from 'src/components/Field';

import './styles.scss';


// == Composant
const Checkout = () => {



  return (
  <div className='Checkout'>
    <div className='infoPerso'>
      <div className='verif'>vérification d'adresse : ici l'adresse</div>
      <div className='checkbox'>
        <label>
          <input type="checkbox" />
            Quick and collect
        </label>
      </div>

      < Field 
      identifier="info-livreur"
      placeholder=""
      label="Information pour le livreur" />

      < Field 
      identifier="Prénom"
      placeholder=""
      label="Prénom" />

      < Field 
      identifier="Nom"
      placeholder=""
      label="Nom" />
    </div>
      <div className='Total'>
        <div>Total de la commande</div> 
        <div>Shipping</div>
        <div className='Finalprice'>Total</div>
        <div className='btnPayer2'>PAYER</div>

      </div>
      <div className='Totaux'>
        <div>30</div>
        <div>3.50</div>
        <div className='Finalprice'>33.50€</div>
      </div>

    <div className=''></div>

      
  </div>
  );
};

// == Export
export default Checkout;


//au click, on toggle, le flase devient true
// si c'est false,  pas de class, si c'est true, add class popup

//Mathys
