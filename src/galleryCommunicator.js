import sortBy from 'sort-by';
import { graphQLRequest } from './graphql.js';


export async function getGalleries(query) {

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
  }}`;
  
  const galleryBlob = (await graphQLRequest(graphqlQuery)).data.artworksEntries;
  console.log(galleryBlob);
  console.log(JSON.stringify(galleryBlob, null, 2)); 
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

    //test to see if it works/gets out of await hell
  const { newGalleryBlob } = (
    await graphQLRequest(graphQlQuery, {
      style: ' f',
      randomy: '1',
      randomx: ' 2',
      distortion: ' f',
      animation: toString('helllo'),
    })
  ).data.save_artworks_savedartwork_Entry;

  console.log('logging', newGalleryBlob);

  return newGalleryBlob;
}

export async function getBlobById(id) {
  const graphqlQuery = `query GetBlobByIdQuery($id:[QueryArgument]) {
  artworksEntries(id:$id) {
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

  const blobId = (await graphQLRequest(graphqlQuery, { id })).data
    .artworksEntries[0];
  console.log(JSON.stringify(blobId, null, 2)); 
  return blobId ?? null;
}
