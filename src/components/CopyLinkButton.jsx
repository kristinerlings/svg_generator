import React from 'react';
//import ReactDOM from 'react-dom';
import { FaLink } from 'react-icons/fa';
import { CopyToClipboard } from 'react-copy-to-clipboard';

//https://www.npmjs.com/package/react-copy-to-clipboard
// text: required -> text to be copied to clipboard
// onCopy: optional -> callback function to be executed when text is copied
// result: boolean -> true if text is copied successfully
// CopyToClipboard: simple wrapping component
const CopyLinkButton = () => {
  return (
    <section className="section">
      <CopyToClipboard /* onCopy={onCopy} */ text={window.location.href}>
        <button>
          <FaLink />
        </button>
      </CopyToClipboard>
    </section>
  );
};

export default CopyLinkButton;
