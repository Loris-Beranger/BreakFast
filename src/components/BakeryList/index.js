// == Import
//import { AiOutlineHeart } from "react-icons/ai";
import './styles.scss';

import StarRating from 'src/components/StarRating/StarRating';
import Heart from 'src/components/Heart/Heart';
//import Tags from 'src/components/Tags/Tags'

import { useSelector, useDispatch } from 'react-redux';
import Bakery from './Bakery';
import { data }  from '../../data/data';

const BakeryList = () => {
  const currentAdress = useSelector((state) => state.currentAdress);
  console.log(currentAdress)
  const datas = data;
  console.log(datas)
  const dataFilter = datas.filter(word => word.city === currentAdress);
  return (

    <div className="bakeries">
      <ul className="column">
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

  );
}

// == Export
export default BakeryList;
