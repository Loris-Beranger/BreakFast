// == Import
import './styles.scss';
import Field from 'src/components/Field';

// == Composant
const Log = () => {

  
  
return (
  <div className="log">
    <div className="parent">

      <form className="connexion" onSubmit={(e) => {
        e.preventDefault()
        const input = document.querySelector('.connexion .input')
        const pass = document.querySelector('.connexion input[type="password"]')
        console.log(input.value)
        console.log(pass.value)
      }}>
        Connexion
            <div className='mail' >
              Adresse e-mail
                <div className='champ' >
                  <input className="input" type='email'/>
                </div>
            </div>
            <div className='mdp' >
              Mot de passe
              <div className='champ' >
                <input className="input" type='password'/>
              </div>
            </div>
          <input className='btnInvisible' type='submit' value=''/>
      </form>

      <form className="inscription"onSubmit={(e) => {
        e.preventDefault()
        const input2 = document.querySelector('.inscription .input')
        const pass2 = document.querySelector('.inscription input[type="password"]')
        console.log(input2.value)
        console.log(pass2.value)
      }}>
        Inscription
          <div className='mail' >
            Adresse e-mail
            <div className='champ' >
              <input className="input" type='email'/>
            </div>
          </div>
          <div className='mdp' >
            Mot de passe
            <div className='champ' >
              <input className="input" type='password'/>
            </div>
          </div>
          <div className='mdp' >
            Confirmation de mot de passe 
            <div className='champ' >
              <input className="input" type='password'/>
            </div>
          </div>
        <input className='btnInvisible' type='submit' value=''/>
      </form>
    </div>
  </div>
);


};
  

// == Export
export default Log;
