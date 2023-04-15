import React from 'react'
import { Link } from 'react-router-dom'


function ImgCollections({images}) {
  return (
    <>
    <ul className="container__img--collections">
      {images.map((singleImage) => (
        <li key ={singleImage.id}> 
          <Link to={`/detail/${singleImage.id}`}>
            <img src={singleImage.url} alt={`Image: ${singleImage.id}`}/>
          </Link>
        </li>
      ))}
    </ul>
    </>
  )
}

export default ImgCollections