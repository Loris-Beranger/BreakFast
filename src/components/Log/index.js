// == Import
import './styles.scss';
import Field from 'src/components/Field';

// == Composant
const Log = () => (
  <div className="log">
    <div class="parent">
      <div class="connexion">
        Connexion
          <div className='mail' >
            Adresse e-mail
              <div className='champ' >
                <input className="input"/>
              </div>
          </div>
          <div className='mdp' >
            Mot de passe
            <div className='champ' >
              <input className="input"/>
            </div>
          </div>
        </div>
      <div class="inscription">
        Inscription
        <div className='mail' >
          Adresse e-mail
          <div className='champ' >
            <input className="input"/>
          </div>
        </div>
        <div className='mdp' >
          Mot de passe
          <div className='champ' >
            <input className="input"/>
          </div>
        </div>
        <div className='mdp' >
          Confirmation de mot de passe 
          <div className='champ' >
            <input className="input"/>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// == Export
export default Log;
