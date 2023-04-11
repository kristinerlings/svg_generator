import SvgImage from '../components/SvgImage';
import ShareButtons from '../components/ShareButtons';
import { FacebookIcon } from 'react-share';
import './../components/gallery.css';

/* import { useLoaderData } from 'react-router-dom'; */
/* 
export const loader = async () => {
  const feed = await getFeed();
  return feed;
}; */

const Gallery = () => {
  /*   const img = useLoaderData(); */
  return (
    <>
      <h2>Gallery</h2>
      <SvgImage />
      <ShareButtons shareUrl={'http://dummyUrl.com'} />
    </>
  );
};

export default Gallery;
