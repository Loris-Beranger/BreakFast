// == Import
import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { changeInputValue } from 'src/actions/actions';

// == Composant
const Form = () => {
  const value = useSelector((state) => state.inputMessage);
  const dispatch = useDispatch();
  // on récupère un raccourci vers la méthode store.dispatch => ici dispatch est
  // donc une fonction, il faudra fournir une action en argument

  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();

        // on veut transmettre le nouveau message au serveur
        dispatch(sendMessage());
      }}
    >
      <input
        type="text"
        className="form-input"
        value={value}
        onChange={(event) => {
          // console.log(event.target.value);

          const action = changeInputValue(event.target.value);
          dispatch(action);
        }}
      />
      <button type="submit" className="form-submit"></button>
    </form>
  );
};

// == Export
export default Form;
