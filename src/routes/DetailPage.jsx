import React from 'react';
import { getBlobImageById } from './../../service';
import { useLoaderData, useNavigate } from 'react-router-dom';

export const loader = async ({ params }) => {
  console.log('params', params)
  const blobImage = await getBlobImageById(params.blobId);
  return blobImage;
};

function DetailPage() {
  const blobImage  = useLoaderData();
  const navigate = useNavigate();

  return (
    <>
      <h2>DetailPage</h2>
      <button onClick={() => navigate(-1)}>Back</button>
      <img src={blobImage.url} alt="" />
    </>
  );
}

export default DetailPage;
