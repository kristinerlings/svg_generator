import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';
import './shareButtons.css';
import CopyLinkButton from './CopyLinkButton';

//social media share: https://www.npmjs.com/package/react-share
//copy link to clipboard: https://www.npmjs.com/package/react-copy-to-clipboard

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

      <CopyLinkButton />
    </div>
  );
}

export default ShareButtons;
