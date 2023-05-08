import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import ShareButtons from './../components/ShareButtons';
import './detailPage.css';
import { BsPersonFill, BsHeartFill, BsEyeFill } from 'react-icons/bs';
import LikeButton from './../components/LikeButton';
import DownloadButton from './../components/DownloadButton';
import SvgDrawing from './../components/SvgDrawing';
import { getBlobById } from '../galleryCommunicator';


export async function loader({ params }) {
  const blobById = await getBlobById(params.blobId);
  if (!contact) {
    throw new Response('', {
      status: 404,
      statusText: 'Not Found',
    });
  }
  return blobById;
}


function DetailPage() {
  const blobById = useLoaderData();
  const navigate = useNavigate();

  return (
    <div className="detailpage__container">
      <h1 className="hidden">DetailPage</h1>
      <button onClick={() => navigate(-1)}>Back</button>
      <div className="detailpage__content">
        <button className="btn__back" onClick={() => navigate(-1)}>
          Back
        </button>
        <SvgDrawing
          randomX={Number(blobById.randomX)}
          randomY={Number(blobById.randomY)}
          animation={blobById.animation}
          style={blobById.style}
          distortionParameter={Number(blobById.distortionParameter)}
        />
        <section className="container__details">
          <h2 className="hidden">Details</h2>
          <p className="details__username">
            <BsPersonFill />
            Username{/* {blobById.breed} */}
          </p>
          <div className="details__top">
            <LikeButton />
            <DownloadButton />
          </div>
          <ul className="details__bottom--left">
            <li>
              <BsHeartFill />
              <span className="bold">Likes:</span> 123{/* {blobById.likes} */}
            </li>
            <li>
              <BsEyeFill />
              <span className="bold">Views:</span> 123{/* {blobById.views} */}
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
