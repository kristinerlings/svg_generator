export async function getGalleries() {
  /*const response = await fetch('/galleries');
    return await response.json();*/

  const galleryBlob = localStorage.getItem('galleryBlob');
  const galleryBlobParsed = JSON.parse(galleryBlob);
  //console.log('galleryBlobParsed', galleryBlobParsed);
  return galleryBlobParsed;
}



