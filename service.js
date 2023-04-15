const KEY = import.meta.env.VITE_GALLERY_API_KEY; //I need the key from the .env here!! to do so, I can use import.[INSERT ENVIRONMENT VARIABLE HERE]; https://vitejs.dev/guide/env-and-mode.html
const USER_ID = import.meta.env.VITE_GALLERY_USER_ID; // I'll need to use unique value (create it in .env)[INSERT ENVIRONMENT VARIABLE HERE];

//used in an HTTP request to provide headers that convey metadata about the request being sent, such as the type of data being sent and authentication credentials.
const API =
  'https://api.thecatapi.com/v1'; /* 'https://api.harvardartmuseums.org' */
const options = {
  headers: {
    'Content-Type': 'application/json', // data being sent in an HTTP request is in JSON format.
    'x-api-key': KEY, //This header is commonly used for authenticating API requests and identifying the API key associated with the request.
  },
};

// pictures to display on the page (on my HOME route)
//dont want to do it inside HOME component (it'll trigger re-render
//USE LOADER - for each route I can specify loader  or action to process forms

const getImage = async () => {
  const response = await fetch(
    `${API}/images/search?limit=10&mime_types=jpg`,
    options
  );
  console.log(response);
  const data = await response.json();

  return data;
};
//breed name for now
const getUserName = async () => {
  const response = await fetch(`${API}/breeds?limit=50`, options);
  const data = await response.json();
  return data;
};

const getBlobImageById = async (imgId) => {
  const response = await fetch(`${API}/images/${imgId}`, options);
  const data = await response.json();
  return data;
};

const getAllFavorites = async () => {
  const response = await fetch(`${API}/favourites?sub_id=${USER_ID}`, options);
};

/* Can use this to check later if a user has already liked 
a particular image. */
const getSingleFavouriteRecordId = async (imgId) => {
  const response = await fetch(
    `${API}/favourites?sub_id=${USER_ID}&${imgId}`,
    options
  );
  const data = await response.json();
  if (data.length === 0) return null;
  return data[0];
};

const addFavourite = async (imgId, liked) => {
  const response = await fetch(`${API}/favourites`, {
    method: 'POST',
    body: JSON.stringify({
      image_id: imgId,
      sub_id: USER_ID,
    }),
    ...options, //spread out all the properties of the options object into this object
  });
};

const deleteFavourite = async (favoriteId) => {
  const response = await fetch(`${API}/favourites/${favoriteId}`, {
    method: 'DELETE',
    ...options, //spread the properties of the options object into this object
  });
  const data = await response.json();
  return data;
};

//username
//nr liked
//nr views
//most popular
//date created

//nr saved artworks (by user)
//nr liked artworks (by user)
//account created

export {
  getImage,
  getUserName,
  getBlobImageById,
  getAllFavorites,
  getSingleFavouriteRecordId,
  addFavourite,
  deleteFavourite,
};
