export async function getGalleries() {
  /*const response = await fetch('/galleries');
    return await response.json();*/

    //

  const galleryBlob = await localStorage.getItem('galleryBlob');
  const galleryBlobParsed = JSON.parse(galleryBlob);
  //console.log('galleryBlobParsed', galleryBlobParsed);
  return galleryBlobParsed ? galleryBlobParsed : []; // if there is no gallery blob parsed, then just return an empty array (no error)
}

export async function addGallery(gallery) {
  /*const response = await fetch('/galleries');
    return await response.json();*/
  let newGalleryBlob = await getGalleries();

  gallery.id = newGalleryBlob ? newGalleryBlob.length : 0;
  gallery.distortionParameter = Number(gallery.distortionParameter);

  newGalleryBlob.push(gallery);

  console.log(gallery, newGalleryBlob);
  await localStorage.setItem('galleryBlob', JSON.stringify(newGalleryBlob));

  return newGalleryBlob;
}
