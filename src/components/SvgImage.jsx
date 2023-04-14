import React, { useState } from 'react';
import './../routes/gallery.css';
import { BsHeartFill, BsHeart, BsEyeFill, BsPersonFill } from 'react-icons/bs';

function SvgImage({ blobImg }) {
  const [hover, setHover] = useState(false);
  const handleHoverImage = () => {
    setHover(true);
  };
  const handleHoverImageLeave = () => {
    setHover(false);
  };

  return (
    <>
      <li className="list__image">
        {blobImg ? (
          <img
            src={blobImg.url}
            alt=""
            style={{ width: '250px', height: 'auto' }}
            onMouseEnter={handleHoverImage}
            onMouseLeave={handleHoverImageLeave}
          />
        ) : (
          <img
            src="./../public/assets/SVG/b1.svg"
            alt=""
            style={{ width: '250px', height: 'auto' }}
          /> //Default img if no img is found, maybe create Img not found later
        )}
        <ul className="image__details">
          <li>
            <BsPersonFill />
            Username{blobImg.breed}
          </li>
          <li>
            <BsHeartFill />
            123{blobImg.likes}
          </li>
          <li>
            <BsEyeFill />
            123{blobImg.views}
          </li>
        </ul>
        {hover ? <button className="btn__add">add to collection</button> : null}
      </li>
    </>
  );
}

export default SvgImage;
