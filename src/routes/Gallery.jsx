import { useEffect } from 'react';
import SvgImage from '../components/SvgImage';
import ShareButtons from '../components/ShareButtons';
import { getImage } from './../../service';
import { FacebookIcon } from 'react-share';
import { useFetcher, useLoaderData, } from "react-router-dom";
import './gallery.css';



export const loader = async () => {
  const blobImg = await getImage();
  console.log(blobImg);
  return blobImg;
}; 

const Gallery = () => {
 const img = useLoaderData(); 
const fetcher = useFetcher();

if(!img) {
  return <div>Loading...</div>
}

  return (
    <>
      <h2>Gallery</h2>
      <div className="filters">
       <fetcher.Form method="post"> 
        <label htmlFor="sort">Filter by:</label>
        <select id="sort" name="sort">
          <option value=/* {favoriteId} */ "favourite}" >Favourites</option>
          <option value=/* {latestDate} */"latest">Latest</option>
          <option value=/* {oldestDateId} */"oldest">Oldest</option>
        </select>
       </fetcher.Form> 
      </div>
      <ul className="container__images">
        {img.map((img) => { 
          console.log(img)
          return (
         <SvgImage key={img.id} blobImg={img} /> 
        )})
      }
      
      </ul>
      <ShareButtons shareUrl={'http://dummyUrl.com'} />
    </>
  );
};

export default Gallery;
