// == Import
import './styles.scss';

import sly from 'src/components/About/images/ratonlaveur.png'
import superman from 'src/components/About/images/Superman.jpg'
import batman from 'src/components/About/images/batman.jpg'
import harley from 'src/components/About/images/harley.jpg'
import wonder from 'src/components/About/images/wonderWoman.jpg'
import deadpool from 'src/components/About/images/deadpool.jpg'



// == Composant
const About = () => (
  <div className="about">
    <div className='front' >
    <h1>Team Front :</h1>
      <div className='Personne' >
        <img  src={wonder}  alt='pp'/>
        <p>Karen Maciel</p>
        <p>role</p>
      </div>
      <div className='Personne' >
        <img  src={deadpool} style={{'width':'100px','margin-left':'50px','margin-right':'50px'}} alt='pp'/>
        <p>Loris Beranger</p>
        <p>role</p>
      </div>
      <div className='Personne' >
        <img  src={sly}  alt='idk'/>
        <p>Mathys Vitiello</p>
        <p>role</p>
        </div>
      </div>

      <div className='back' >
      <h1>Team Back :</h1>
      <div className='Personne' >
        <img  src={harley}  alt='pp'/>
        <p>Alexandra Gonçalves</p>
        <p>role</p>
      </div>
      <div className='Personne' >
        <img  src={batman}  alt='pp'/>
        <p>Anthony Ouzhènes</p>
        <p>role</p>
      </div>
    </div>
  </div>
);

// == Export
export default About;
