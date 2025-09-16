import { FaStar } from 'react-icons/fa';

import { useState, useEffec } from 'react';

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };
  const handleMouseEnter = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };
  const handleMouseLeave = () => {
    setHover(rating);
  };
  return (
    <div className="flex justify-center">
      {[...Array(noOfStars)].map((_, index) => {
        index++;
        return (
          <FaStar
            key={index}
            className={
              index <= (hover || rating) ? 'text-[#fff700]' : 'text-[#333]'
            }
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
}
