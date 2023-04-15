import React, { useState } from 'react';

function HoverImage() {

  const [hover, setHover] = useState(false);
  const handleImageHover = () => {
    setHover(true);
  }
  const handleImageLeaveHover = () => {
    setHover(false);
  }

  return (
    <>
    
    </>
  )
}

export default HoverImage