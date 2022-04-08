// == Import
//import { AiOutlineHeart } from "react-icons/ai";
import './styles.scss';

import { GiWheat } from "react-icons/gi";
import { RiLeafLine } from "react-icons/ri";
import { SiLeaflet } from "react-icons/si";
import { TiHeartFullOutline } from "react-icons/ti";

import { useSelector, useDispatch } from 'react-redux';
import Bakery from './Bakery';
import { data } from '../../data/data';

const BakeryList = () => {
  const currentAdress = useSelector((state) => state.currentAdress);
  console.log(currentAdress)
  const datas = data;
  console.log(datas)
  const dataFilter = datas.filter(word => word.city === currentAdress);


  let test = [];

  if(currentAdress === ''){
    console.log('rien')
    test.push(
      <div className='no-bakery' >
          vous n'avez pas mis de boulangeries
      </div>
    )
  }

  return (
    <div className='bakerylist'>
      <div className="tags">
        <div>
          <h1>Filtrer par diététique</h1>

          <div className="tag">

            <div className="tag_label">
              <h2> <TiHeartFullOutline />Vegan</h2>
            </div>

            <div className="tag_label">
              <h2> <GiWheat /> Sans gluten</h2>
            </div>


            <div className="tag_label">
              <h2> <SiLeaflet />Bio</h2>
            </div>

            <div className="tag_label">
              <h2> <RiLeafLine />Végétarien</h2>
            </div>

          </div>
        </div>
      </div>
      {test}
      <div className="bakeries">
        <ul className="column" >
          {dataFilter.map((item) => (
            <Bakery
              key={item.id}
              img={item.img}
              time={item.time}
              name={item.name}
              delivery_fees={item.delivery_fees}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

// == Export
export default BakeryList;
