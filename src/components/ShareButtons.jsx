import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';
import './shareButtons.css';
import { FaLink } from 'react-icons/fa';
import { CopyToClipboard } from 'react-copy-to-clipboard';


//social media share: https://www.npmjs.com/package/react-share
//copy link to clipboard: https://www.npmjs.com/package/react-copy-to-clipboard

//https://www.npmjs.com/package/react-copy-to-clipboard
// text: required -> text to be copied to clipboard
// onCopy: optional -> callback function to be executed when text is copied
// result: boolean -> true if text is copied successfully
// CopyToClipboard: simple wrapping component

function ShareButtons({ shareUrl }) {
  return (
    <div className="share__container">
      <FacebookShareButton
        url={shareUrl}
        hashtag={'#dummy text'}
        className="share__icon"
      >
           
        <FacebookIcon size={32} round={false} borderRadius={10} />
      </FacebookShareButton>

      <TwitterShareButton
        url={shareUrl}
        hashtag={'#dummy text'}
        className="share__icon"
      >
        <TwitterIcon size={32} round={false} borderRadius={10} />
      </TwitterShareButton>

      <CopyToClipboard /* onCopy={onCopy} */ text={window.location.href}>
        <button className="btn__link">
          <FaLink size={20} />
        </button>
      </CopyToClipboard>
    </div>
  );
}

export default ShareButtons;
