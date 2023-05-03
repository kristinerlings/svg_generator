import { useState } from 'react';
import SvgImage from '../components/SvgImage';
import ShareButtons from '../components/ShareButtons';
import { getImage } from './../../service';
import { FacebookIcon } from 'react-share';
import { useFetcher, useLoaderData, } from "react-router-dom";
import './gallery.css';
import { useEffect } from 'react';



export const loader = async () => {
  const blobImg = await getImage();
  console.log(blobImg);
  return blobImg;
}; 

const Gallery = () => {
 const img = useLoaderData(); 
const fetcher = useFetcher();
const [view, setView] = useState('three');
/* 
useEffect(() => {
  console.log('view', view)
}, [view])

if(!img) {
  return <div>Loading...</div>
} */

const getClassName = (view) => {
  switch (view) {
    case 'two':
      return 'two';
      break;
    case 'three':
      return 'three';
      break;
    case 'four':
      return 'four';
      break;
    default:
      return 'three';
  }
}

  return (
    <div className="container__gallery">
      <div className="gallery__title">
      <h2>Gallery</h2>
      <h3>Lorem ipsum</h3>
      </div>
      <div className="filter">
       <fetcher.Form method="post"> 
        <label htmlFor="sort">View Image Size:</label>
        <select id="sort" name="sort" value={view} onChange={(e) => setView(e.target.value)}>
          <option value=/* {oldestDateId} */"four">Small</option> 
          <option value=/* {latestDate} */"three">Medium</option>
          <option value=/* {favoriteId} */ "two">Big</option>
        </select>
       </fetcher.Form> 
      </div>
      <div className="filter">
       <fetcher.Form method="post"> 
        <label htmlFor="sort">Filter by:</label>
        <select id="sort" name="sort">
          <option value=/* {favoriteId} */ "popularity" >Popularity</option>
          <option value=/* {latestDate} */"latest">Latest</option>
          <option value=/* {oldestDateId} */"oldest">Oldest</option>
        </select>
       </fetcher.Form> 
      </div>
      <ul className={`container__images ${getClassName(view)}`}>
        {img.map((img) => { 
          console.log(img)
          return (
         <SvgImage key={img.id} blobImg={img} /> 
        )})
      }
      </ul>
    </div>
  );
};

export default Gallery;
