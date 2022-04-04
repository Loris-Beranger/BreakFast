// == Import
import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { changeInputValue, sendMessage } from 'src/actions/actions';

// == Composant
const FormAdress = () => {
  const value = useSelector((state) => state.inputMessage);
  const message = useSelector((state) => state.message);
  const dispatch = useDispatch();
  // on récupère un raccourci vers la méthode store.dispatch => ici dispatch est
  // donc une fonction, il faudra fournir une action en argument

  return (
    <div className="box-form-adresse">
      <h2 className="form-title">Dîtes nous où voulez vous votre petit déj</h2>
      <form
        className="form-adresse"
        onSubmit={(event) => {
          event.preventDefault();
          const action  = sendMessage(value);
          dispatch(action);
        }}
      >
        <input 
          type="text"
          className="form-adresse-input"
          placeholder="Entrez votre adresse"
          value={value}
          onChange={(event) => {
            const action  = changeInputValue(event.target.value);
            dispatch(action);
          }}
        />
      </form>
    </div>
  );
};

// == Export
export default FormAdress;
