// == Import
import './styles.scss';

// == Composant
const Contact = () => (
  <div className="contact">

    <p className='contact-ameliorer'>
       <p className='p' for="ameliorer">
       Comment pensez-vous que nous puissions améliorer notre site ?
       </p>       
       <textarea name="ameliorer" id="ameliorer" rows="10" cols="50">
       </textarea>       
   </p>

   <p className='contact-problemes'>
       <p className='p' for="problemes">
       Avez-vous remarqué des bugs sur le site ? 
       </p>       
       <textarea name="problemes" id="problemes" rows="10" cols="50">
       </textarea>       
   </p>

  </div>
);

// == Export
export default Contact;
