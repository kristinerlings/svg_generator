import React, { useState } from 'react';
import './../routes/gallery.css';
import { Link } from 'react-router-dom';
import { BsHeartFill, BsHeart, BsEyeFill, BsPersonFill } from 'react-icons/bs';

function SvgImage({ blobImg, imgClassName }) {
  const [hover, setHover] = useState(false);
  const handleHoverImage = () => {
    setHover(true);
  };
  const handleHoverImageLeave = () => {
    setHover(false);
  };

  return (
    <>
      <li className={`list__image`}>
        <Link to={`/svg_generator/detail/${blobImg.id}`}>
          {blobImg ? (
            <img
              src={blobImg.url}
              alt=""
              onMouseEnter={handleHoverImage}
              onMouseLeave={handleHoverImageLeave}
            />
          ) : (
            <img src="./../public/assets/SVG/b1.svg" alt="" /> //Default img if no img is found, maybe create Img not found later
          )}
        </Link>
        <ul className={`image__details`}>
          <li>
            <BsPersonFill />
            Username{blobImg.breed}
          </li>
          <li>
            <ul className="details__right">
              <li>
                <BsHeartFill />
                123{blobImg.likes}
              </li>
              <li>
                <BsEyeFill />
                123{blobImg.views}
              </li>
            </ul>
          </li>
        </ul>
        {hover ? (
          <div>
            <button className="btn__add">add to collection</button>
            <button className="btn__like">like</button>
          </div>
        ) : null}
      </li>
    </>
  );
}

export default SvgImage;
