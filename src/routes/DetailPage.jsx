import React from 'react';
import { getBlobImageById } from './../../service';
import { useLoaderData, useNavigate } from 'react-router-dom';
import ShareButtons from './../components/ShareButtons';
import './detailPage.css';
import { BsPersonFill, BsHeartFill, BsEyeFill } from 'react-icons/bs';
import LikeButton from './../components/LikeButton';
import DownloadButton from './../components/DownloadButton';

export const loader = async ({ params }) => {
  console.log('params', params);
  const blobImage = await getBlobImageById(params.blobId);
  return blobImage;
};

function DetailPage() {
  const blobImage = useLoaderData();
  const navigate = useNavigate();

  return (
    <div className="detailpage__container">
      <h1 className="hidden">DetailPage</h1>
      <button onClick={() => navigate(-1)}>Back</button>
      <div className="detailpage__content">
        {/* <button className="btn__back" onClick={() => navigate(-1)}>Back</button> */}
        <img className="img__detail" src={blobImage.url} alt="" />
        <section className="container__details">
          <h2 className="hidden">Details</h2>
          <p className="details__username">
            <BsPersonFill />
            Username{/* {blobImg.breed} */}
          </p>
          <div className="details__top">
            <LikeButton />
            <DownloadButton />
          </div>
          <ul className="details__bottom--left">
            <li>
              <BsHeartFill />
              <span className="bold">Likes:</span> 123{/* {blobImg.likes} */}
            </li>
            <li>
              <BsEyeFill />
              <span className="bold">Views:</span> 123{/* {blobImg.views} */}
            </li>
            <li>
              {' '}
              <span className="bold">Downloads:</span>
            </li>
            <li>
              {' '}
              <span className="bold">Data Created:</span>
            </li>
          </ul>
          <div className="btn__share">
            <ShareButtons shareUrl={'http://dummyUrl.com'} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default DetailPage;
