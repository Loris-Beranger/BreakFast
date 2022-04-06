import { BsSuitHeart } from "react-icons/bs";

import './styles.scss';

const Heart = () => {

  return (
    <div>
      <label>
        <input
          type="radio"
          name="like"
          onClick={(console.log("test"))}
        />
        <BsSuitHeart className="heart" />
      </label>
    </div>
  );
};

export default Heart;
