// == Import
//import { AiOutlineHeart } from "react-icons/ai";
import './styles.scss';

import { GiWheat } from "react-icons/gi";
import { RiLeafLine } from "react-icons/ri";
import { SiLeaflet } from "react-icons/si";
import { TiHeartFullOutline } from "react-icons/ti";
import { TiLocation } from "react-icons/ti";

import { useSelector, useDispatch } from 'react-redux';
import Bakery from './Bakery';
import { bakeryList } from '../../data/data';
import { NavLink } from 'react-router-dom';
import { setAdress } from '../../actions/actions';

const BakeryList = () => {
  const currentAdress = useSelector((state) => state.currentAdress);
  console.log(currentAdress)
  const dataFilter = bakeryList.filter(word => word.adress === currentAdress);
  const dispatch = useDispatch();

  return (
    <div className="bakerylist">
      <div className='wrapper-city'>
        <div className='wrapper-button'>
          <button className="adress-button" onClick={() => {
            const action = setAdress('');
            dispatch(action);
          }}>
            <TiLocation />
            <span>{currentAdress}</span>
            <span>Maintenant</span>
            </button>
        </div>
        <h2 className="title-bakerylist">
          Livraison dans la ville de {currentAdress}
        </h2>
      </div>
      
      <div className='wrapper-bakerylist-tags'>
        <div className="tags">
          <div>
            <h1>Filtrer par diététique</h1>
            <div className="tag">
              <div className="tag_label">
                <h2>
                  {" "}
                  <TiHeartFullOutline />
                  Vegan
                </h2>
              </div>
              <div className="tag_label">
                <h2>
                  {" "}
                  <GiWheat /> Sans gluten
                </h2>
              </div>
              <div className="tag_label">
                <h2>
                  {" "}
                  <SiLeaflet />
                  Bio
                </h2>
              </div>
              <div className="tag_label">
                <h2>
                  {" "}
                  <RiLeafLine />
                  Végétarien
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="bakeries">
          <ul className="column">
            {dataFilter.map((item) => (
              <Bakery
                key={item.id}
                img={item.profile_img}
                time={item.delivery_time}
                name={item.name}
                delivery_fees={item.delivery_fees}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// == Export
export default BakeryList;
