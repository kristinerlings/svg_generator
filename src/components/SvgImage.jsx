import React from 'react';
import './../routes/gallery.css';

function SvgImage({ blobImg }) {
  return (
    <>
      <li className="list__image">
        {blobImg ? (
          <img
            src={blobImg.url}
            alt=""
            style={{ width: '250px', height: 'auto' }}
          />
        ) : (
          <img
            src="./../public/assets/SVG/b1.svg"
            alt=""
            style={{ width: '250px', height: 'auto' }}
          /> //Default img if no img is found, maybe create Img not found?
        )}
      </li>
    </>
  );
}

export default SvgImage;
