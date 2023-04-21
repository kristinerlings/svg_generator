import React from 'react';
import { getBlobImageById } from './../../service';
import { useLoaderData, useNavigate } from 'react-router-dom';
import ShareButtons from './../components/ShareButtons';
import './DetailPage.css';

export const loader = async ({ params }) => {
  console.log('params', params);
  const blobImage = await getBlobImageById(params.blobId);
  return blobImage;
};

function DetailPage() {
  const blobImage = useLoaderData();
  const navigate = useNavigate();

  return (
    <>
      <h2>DetailPage</h2>
      <button onClick={() => navigate(-1)}>Back</button>
      <img src={blobImage.url} alt="" />
      <ShareButtons shareUrl={'http://dummyUrl.com'} />
    </>
  );
}

export default DetailPage;
