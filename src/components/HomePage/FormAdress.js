// == Import
import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { changeInputValue, sendMessage } from 'src/actions/actions';
import { useQuery } from 'react-query';
import { searchCity } from './requete';
import ProposedField from './ProposedField';

// == Composant
const FormAdress = () => {
  const inputValue = useSelector((state) => state.inputAdresse);
  const message = useSelector((state) => state.message);
  const dispatch = useDispatch();
    
  const queryKey = ['search', inputValue];
  const {isLoading, data, error} = useQuery(queryKey, () => searchCity(inputValue), {
    refetchOnWindowFocus: false,
  })
  const requete = data || false;

  console.log(requete);
  

  return (
    <div className="box-form-adresse">
      <h2 className="form-title">Où êtes vous ?</h2>
      <form
        className="form-adresse"
        onSubmit={(event) => {
          event.preventDefault();
          const action  = sendMessage(inputValue);
          dispatch(action);
        }}
      >
        <input 
          type="text"
          className="form-adresse-input"
          placeholder="Entrez votre adresse"
          value={inputValue}
          onChange={(event) => {
            const action  = changeInputValue(event.target.value);
            dispatch(action);
          }}
        />
        <ul className='listPropositions'>
        {!isLoading && requete.data.map((item) => (
          <ProposedField
            key={item.code}
            name={item.nom}
          />
        ))}
      </ul>
      </form>
      
      
    </div>
  );
};

// == Export
export default FormAdress;
