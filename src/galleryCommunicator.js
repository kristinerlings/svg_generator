import sortBy from 'sort-by';
import { graphQLRequest } from './graphql.js';
/* import { useState } from 'react'; */

export async function getGalleries(query) {
  /*const response = await fetch('/galleries');
    return await response.json();*/

  const graphqlQuery = `
  query getGalleriesQuery {
  artworksEntries {
    ... on artworks_savedartwork_Entry {
      id
      style
      title
      randomy
      randomx
      distortion
      animation
    }
  }
}
`;
  //const galleryBlob = await localStorage.getItem('galleryBlob');
  //const galleryBlobParsed = JSON.parse(galleryBlob);
  //console.log('galleryBlobParsed', galleryBlobParsed);
  //return galleryBlobParsed ? galleryBlobParsed : []; // if there is no gallery blob parsed, then just return an empty array (no error)

  //pass in the search functionality
  const galleryBlob = (await graphQLRequest(graphqlQuery)).data.artworksEntries;
  console.log(galleryBlob);
  console.log(JSON.stringify(galleryBlob, null, 2)); //add some formatting to the json structure it logs
  return galleryBlob.sort(sortBy('createdAt'));
}

export async function addGallery(updates) {
  console.log('addGallery', updates.animation);

  const graphQlQuery = `
  mutation CreateGalleryBlobMutation
	( 
    $style: String,
    $randomy: String,
    $randomx: String,
    $distortion: String,
    $animation: String ) {
  save_artworks_savedartwork_Entry(
    title: $style
    style: $style
    randomy: $randomy
    randomx: $randomx
    distortion: $distortion
    animation: $animation
  )
  {
    id
  }
}`;
  /* const newGalleryBlob = (
    await graphQLRequest(graphQlQuery, { id: id, ...updates })
  ).data.save_artworks_savedartwork_Entry; */

   const {newGalleryBlob} = (
     await graphQLRequest(graphQlQuery, {
       style: ' f',
       randomy: '1',
       randomx: ' 2',
       distortion: ' f',
       animation: toString('helllo'),
     })
   ).data.save_artworks_savedartwork_Entry; 

  /* const newGalleryBlob = (
    await graphQLRequest(graphQlQuery, {
      style: toString(updates.style),
      randomy: toString(updates.randomy),
      randomx: toString(updates.randomx),
      distortion: toString(updates.distortionParameter),
      animation: toString(updates.animation)
    })
  ).data.save_artworks_savedartwork_Entry;  */

  console.log('logging', newGalleryBlob);

  return newGalleryBlob;

  /*  style: updates.style,
      title: updates.title,
      randomy: updates.randomy,
      randomx: updates.randomx,
      distortion: updates.distortionParameter,
      animation: updates.animation, */

  /*   const newGalleryBlob = (
    await graphQLRequest(graphqlQuery, {
      style,
      title,
      randomy,
      randomx,
      distortion,
      animation,
    })
  ).data.save_artworks_savedartwork_Entry;
  return newGalleryBlob; */

  //let newGalleryBlob = await getGalleries();

  // gallery.id = newGalleryBlob ? newGalleryBlob.length : 0;
  // gallery.distortionParameter = Number(gallery.distortionParameter);

  //newGalleryBlob.push(gallery);

  //console.log(gallery, newGalleryBlob);
  //await localStorage.setItem('galleryBlob', JSON.stringify(newGalleryBlob));

  // return newGalleryBlob;
}
