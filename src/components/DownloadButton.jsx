import React from 'react';

const DownloadButton = () => {
  const downloadSVG = () => {
    const svg = document.getElementById('svg_og');
    const svgData = new XMLSerializer().serializeToString(svg); //convert the SVG element into a string that can be downloaded as a file
    const svgBlob = new Blob([svgData], {
      //create a new blob object from the svgData string
      type: 'image/svg+xml;charset=utf-8', //set it to MIME/Media/Content type - describes the the content format
    });
    const svgUrl = URL.createObjectURL(svgBlob); // creates a URL for my svgBlob object -> this URL can be used to download the SVG file 
    const downloadLink = document.createElement('a');
    downloadLink.href = svgUrl;
    downloadLink.download = 'svg_og.svg'; //name of the file to be downloaded + id of the svg element
    document.body.appendChild(downloadLink);
    downloadLink.click(); //tiggers the click event -to download the file
    document.body.removeChild(downloadLink); // removes the download link from the DOM once the file has been downloaded. This is to prevent the user from downloading the same file multiple times and to avoid cluttering.
  };

  return (
    <button
      className="download_button"
      onClick={downloadSVG}
      style={{ marginLeft: '.5rem', width:"5rem", height:"1.6rem" }}
    >
      Download
    </button>
  );
};

export default DownloadButton;
