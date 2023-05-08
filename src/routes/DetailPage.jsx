import React from 'react';
/* import { getBlobImageById } from './../../service'; */
import { useLoaderData, useNavigate } from 'react-router-dom';
import ShareButtons from './../components/ShareButtons';
import './detailPage.css';
import { BsPersonFill, BsHeartFill, BsEyeFill } from 'react-icons/bs';
import LikeButton from './../components/LikeButton';
import DownloadButton from './../components/DownloadButton';
import SvgDrawing from './../components/SvgDrawing';
import { getBlobById } from '../galleryCommunicator';


/* export const loader = async ({ params }) => {
  console.log('params', params);
  const blobImage = await getBlobImageById(params.id);
  return blobImage;
}; */
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


/* export const action = async ({ request, params }) => {
  let formData = await request.formData();
  return updateContact(params.contactId, {
    favorite: formData.get('favorite') === 'true',
  });
} */

function DetailPage() {
  const blobById = useLoaderData();
  const navigate = useNavigate();

  return (
    <div className="detailpage__container">
      <h1 className="hidden">DetailPage</h1>
      <button onClick={() => navigate(-1)}>Back</button>
      <div className="detailpage__content">
        <button className="btn__back" onClick={() => navigate(-1)}>Back</button>
        {/* <img className="img__detail" src={blobImage.url} alt="" /> */}
        <SvgDrawing
          randomX={Number(blobById.randomX)}
          randomY={Number(blobById.randomY)}
          animation={blobById.animation}
          style={blobById.style}
          distortionParameter={Number(blobById.distortionParameter)}
          //onMouseEnter={handleHoverImage}
          // onMouseLeave={handleHoverImageLeave}
        />
        {/* <svg className="img__detail" src={blobImage.url} alt="" /> */}
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
