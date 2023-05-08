import React from 'react';

const DownloadButton = () => {
  const downloadSVG = () => {
    const svg = document.getElementById('svg_og');
    const svgData = new XMLSerializer().serializeToString(svg); 
    const svgBlob = new Blob([svgData], {
      type: 'image/svg+xml;charset=utf-8',
    });
    const svgUrl = URL.createObjectURL(svgBlob); 
    const downloadLink = document.createElement('a');
    downloadLink.href = svgUrl;
    downloadLink.download = 'svg_og.svg';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink); 
  };

  return (
    <button
      className="download_button"
      onClick={downloadSVG}
      style={{ marginLeft: '.5rem' }}
    >
      Download
    </button>
  );
};

export default DownloadButton;
