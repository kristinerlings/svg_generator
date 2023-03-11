import React from 'react';
import { useMemo } from 'react';
import { useState, useCallback } from 'react';

function SvgDrawing({ params }) {
  const [coords, setCoords] = useState({
    xCoord: ['800', '33', '439', '103'],
    yCoord: ['222', '220', '75', '16'],
  });
  const transformCoords = {
    xCoord: ['80', '33', '49', '13'],
    yCoord: ['22', '20', '75', '16'],
  };

  //m = coordinates (relative to the previous point in the path)
  //c = cubic bezier curves
  //s = smooth cubic bezier curves
  //z = close path

  const random = () => Math.round(Math.random() * 4); //generate different value every time I call it -> need to find a way not to change each time i change the distortion. TrieduseMemo and useCallback. Didnt'work

  const randomX = () => Math.round(Math.random() * 200);
  const randomY = () => Math.round(Math.random() * 200);

  /**
   * baseFreq [0.5, 0.25] - the smaller the more distortion
   * baseFreq = (100 - distsortion) / 100
   * needs to be fractional value, as I increase the distortion it gets larger and larger but I want it to be the opposite, want it to be smaller and smaller. That's why I take 100 - distortion to get a smaller value - the fraction gets smaller.
   */

  console.log(random);
  return (
    <svg viewBox="0 0 600 600">
      {/*   <!-- Define the pattern --> */}
      <pattern
        id="pattern-chevron"
        x="0"
        y="0"
        patternUnits="userSpaceOnUse"
        width="100"
        height="180"
        viewBox="0 0 10 18"
      >
        {/* <!-- Group the chevron shapes --> */}
        <g id="chevron">
          {/*   <!-- Chevron consists of two shapes, a left and a right to form a `v` -->
       <!-- We'll apply the `fill` in the CSS for flexibility --> */}
          <path className="pattern left" d="M0 0l5 3v5l-5 -3z"></path>
          <path className="pattern right" d="M10 0l-5 3v5l5 -3"></path>
        </g>

        {/*   <!-- Apply the shapes -->
     <!-- `y="9"` narrows the space between rows  --> */}
        <use x="0" y="9" xlinkHref="#chevron"></use>
      </pattern>
      {/* <filter id="turbulanceEffect">
        <feTurbulence
          baseFrequency="0.003"
          type="fractalNoise"
          numOctaves="3"
        />
      </filter> */}

      <filter id="displacementFilter">
        <feTurbulence
          type="turbulence"
          baseFrequency={(100 - params.distortion) / 100}
          // calculate numOctaves based on distortion
          numOctaves={Math.round(params.distortion)}
          /* numOctaves="4" */
          seed={params.distortion}
          result="turbulence"
        />
        <feDisplacementMap
          in2="turbulence"
          in="SourceGraphic"
          scale={params.distortion}
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>

      {/* <rect width="100%" height="100%" filter="url(#turbulanceEffect)" /> */}

      <g
        id="blob__one"
        data-name="blob1"
        /* filter="url(#turbulanceEffect)" */
        transform={`translate(${randomX()} ${randomY()})`}
      >
        <path
          className="cls-1"
          d={`m${coords.xCoord[0]},${coords.yCoord[0]}c-90.37,5.19-126.13,28.84-137.34,38.78-4.89,4.34-10.1,8.31-15.61,11.84-117.58,75.19-103.01,3.21-129.91-77.48-15.98-47.94,2.88-92.37,21.73-121.41,16.66-25.67,42.21-44.39,71.78-52.29s67.4-10.77,104.63,9.47c71.49,38.86,116.49,4.44,172.1,46.8,55.6,42.36,27.8,137.67-87.37,144.29Z`}
          fill={'#d2bca9'}
          /*  filter='url(#displacementFilter)'  */
        />
        <path
          className="cls-2"
          d={`m${coords.xCoord[0] - 16},${
            coords.yCoord[0] - 12
          }c-90.37,5.19-126.13,28.84-137.34,38.78-4.89,4.34-10.1,8.31-15.61,11.84-117.58,75.19-103.01,3.21-129.91-77.48-15.98-47.94,2.88-92.37,21.73-121.41,16.66-25.67,42.21-44.39,71.78-52.29,28.62-7.64,67.4-10.77,104.63,9.47,71.49,38.86,116.49,4.44,172.1,46.8,55.6,42.36,27.8,137.67-87.37,144.29Z`}
          /* filter="url(#turbulanceEffect)" */
          fill={'none'}
          stroke={'#636363'}
          strokeMiterlimit={10}
          strokeWidth={'5px'}
        />
      </g>
      <g
        id="blob__two"
        data-name="blob2"
        transform={`translate(${randomX()} ${randomY()})`}
      >
        <path
          className="cls-1"
          d="m531.08,90c-.16.61-.3,1.15-.55,1.9-14.33,44.16-50.4,77.88-95.5,89.17l-176.43,44.17c-20.39,5.11-41.69,5.38-62.19.78l-145.04-32.46c-33-7.39-47.13-37.65-27.91-59.77l37.37-43.03s29.59-54.31,175.72-62.04c145.37-7.69,313.77-13.32,294.53,61.27Z"
          fill={'#bec4aa'}
          filter="url(#displacementFilter)"
        />
        <path
          /*{`m${'339.5'},${'204.12'} */
          /*{`m${coords.xCoord[1] - 16},${
            coords.yCoord[1] - 16
          } */
          className="cls-2"
          d="m518.81,68.04c-.16.61-.3,1.15-.55,1.9-14.33,44.16-50.4,77.88-95.5,89.17l-176.43,44.17c-20.39,5.11-41.69,5.38-62.19.78l-145.04-32.46c-33-7.39-47.13-37.65-27.91-59.77l37.37-43.03S78.14,14.5,224.28,6.76c145.37-7.69,313.77-13.32,294.53,61.27Z"
          fill={'none'}
          stroke={'#636363'}
          strokeMiterlimit={10}
          strokeWidth={'5px'}
          filter="url(#displacementFilter)"
        />
      </g>
      <g
        id="blob__three"
        data-name="blob3"
        transform={`translate(${randomX()} ${randomY()})`}
      >
        <path
          className="cls-1"
          d={`m${coords.xCoord[2]},${
            coords.yCoord[2]
          },c-.13.5-.25.95-.45,1.57-11.84,36.47-41.63,${'64.32'}-78.87,73.64l-145.71,${'36.47'}c-16.84,4.22-34.43,4.44-51.36.65l-119.78-26.8c-27.25-6.1-38.92-31.09-23.05-49.36l30.86-35.54s24.44-44.85,145.12-51.24c120.05-6.35,259.13-11,243.24,50.6Z`}
          fill={'#8eb6bc'}
        />
        <path
          className="cls-2"
          d={`m${coords.xCoord[2] - 13},${
            coords.yCoord[2] - 7
          }c-.13.5-.25.95-.45,1.57-11.84,36.47-41.63,${'64.32'}-78.87,73.64l-145.71,${'36.47'}c-16.84,4.22-34.43,4.44-51.36.65l-119.78-26.8c-27.25-6.1-38.92-31.09-23.05-49.36l30.300.54S64.97,12.41,185.66,6.02C305.71-.33,${'444.79'}-4.98,428.9,56.63Z`}
          fill={'none'}
          stroke={'#636363'}
          strokeMiterlimit={10}
          strokeWidth={'5px'}
        />
      </g>
      <g
        id="blob__four"
        data-name="blob4"
        transform={`translate(${randomX()} ${randomY()})`}
      >
        <path
          className="cls-1"
          d={`m${coords.xCoord[3]},${
            coords.yCoord[3]
          }c-12-5.19-25.06-7.44-38.12-6.9-17.57.73-42.28,5.71-46.58,27.43-6.8,${'34'},26.06,46.28,7.93,85.06-18.13,38.77-3.4,73.89,31.72,53.5,32.74-19.01,124.56-124.67,45.05-159.09Z`}
          fill={'#d2dbd7'}
        />
        <path
          className="cls-2"
          d={`m${coords.xCoord[3] - 15},${
            coords.yCoord[3] - 6.3
          }c-12-5.19-25.06-7.44-38.12-6.9C32.45,3.31,7.74,${'8.29'},3.44,30.01c-6.8,34.33,26.06,46.28,7.93,85.06-18.13,38.77-3.4,73.89,31.72,53.5,32.74-19.01,124.56-124.67,45.05-159.09Z`}
          fill={'none'}
          stroke={'#636363'}
          strokeMiterlimit={10}
          strokeWidth={'5px'}
        />
      </g>
    </svg>
  );
}

export default SvgDrawing;
