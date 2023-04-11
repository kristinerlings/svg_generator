import SvgImage from "../components/SvgImage";
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
    </>
  );
};

export default Gallery;
