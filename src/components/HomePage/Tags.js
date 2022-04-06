// == Import
import './styles.scss';
import ImgAmoureux from './images/tags/amoureux.jpg'
import ImgAnniversaire from './images/tags/anniversaire.jpg'
import ImgBio from './images/tags/bio.jpg'
import ImgVegan from './images/tags/vegan.jpg'
import ImgEntreprise from './images/tags/entreprise.jpg'

// == Composant
const Tags = () => {
  const scrollToTop = () =>{
    // Remonter scroll de la page au clic sur une catégorie
    document.querySelector('.homepage').scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
    // Focus la barre d'adresse 
    /* document.querySelector('.form-adresse-input').focus(); */
  };
  

  return (
    <div className="tags">
      <h2 className="title-category">Catégories</h2>
      <ul className="list-tags">
        <li className="tag" onClick={scrollToTop}>
          <div className="background-div">
            <p>Amoureux</p>
          </div>
        </li>
        <li className="tag" onClick={scrollToTop}>
          <div className="background-div">
            <p>Anniversaire</p>
          </div>
          </li>
        <li className="tag" onClick={scrollToTop}>
          <div className="background-div">
            <p>Bio</p>
          </div>
        </li>
        <li className="tag" onClick={scrollToTop}>
          <div className="background-div">
            <p>Vegan</p>
          </div>
          </li>
        <li className="tag" onClick={scrollToTop}>
          <div className="background-div">
            <p>Entreprise</p>
          </div>
          </li>
      </ul>
      
    </div>
  );
};

// == Export
export default Tags;
