import React, { useState } from 'react';
import './../routes/gallery.css';
import { Link } from 'react-router-dom';
import { BsHeartFill, BsHeart, BsEyeFill, BsPersonFill } from 'react-icons/bs';
import SvgDrawing from './SvgDrawing';


function SvgImage({ blobSvg, imgClassName }) {
  const { randomX, randomY, animation, style, distortionParameter } = blobSvg;

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
        <Link to={`/svg_generator/detail/${blobSvg.id}`}>
          <SvgDrawing
            randomX={blobSvg.randomX}
            randomY={blobSvg.randomY}
            animation={blobSvg.animation}
            style={blobSvg.style}
            distortionParameter={blobSvg.distortionParameter}
            //onMouseEnter={handleHoverImage}
            // onMouseLeave={handleHoverImageLeave}
          />
        </Link>
        <ul className={`image__details`}>
          <li>
            <BsPersonFill />
            Username{/* {blobSvg.breed} */}
          </li>
          <li>
            <ul className="details__right">
              <li>
                <BsHeartFill />
                123{/* {blobSvg.likes} */}
              </li>
              <li>
                <BsEyeFill />
                123{/* {blobSvg.views} */}
              </li>
            </ul>
          </li>
        </ul>
        {hover ? (
          <div className="img__buttons">
            <button className="btn__add">add to collection</button>{' '}
            {/* //replace with add to collection component */}
            <button className="btn__like">like</button>{' '}
            {/* //replace with heart icon / like component  */}
          </div>
        ) : null}
      </li>
    </>
  );
}

export default SvgImage;
