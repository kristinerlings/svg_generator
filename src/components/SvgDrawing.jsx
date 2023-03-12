import React from 'react';
import { useState, useEffect } from 'react';

function SvgDrawing({ parameter, randomY, randomX, style, animation }) {
  const [coords, setCoords] = useState({
    xCoord: ['200', '33', '439', '103'],
    yCoord: ['222', '220', '75', '16'],
  });

  //colours -> style: gradient vs solid
  const [fill1, setFill1] = useState();
  const [fill2, setFill2] = useState();
  const [fill3, setFill3] = useState();
  const [fill4, setFill4] = useState();
  const colors = ['#d2bca9', '#8eb6bc', '#d2dbd7', '#bec4aa'];

  //useEffect : https://dev.to/hajarnasr/react-hooks-useeffect-1816
  //render on style change only
  useEffect(() => {
    // block
    switch (style) {
      case 'Solid':
        setFill1(colors[0]);
        setFill2(colors[1]);
        setFill3(colors[2]);
        setFill4(colors[3]);
        break;
      case 'Gradients':
        setFill1(`url(#Gradient1)`);
        setFill2(`url(#Gradient2)`);
        setFill3(`url(#Gradient3)`);
        setFill4(`url(#Gradient4)`);
        break;
      //default:
      // break;
    }
  }, [style]); //dependency array -> tell react it only needs to run useEffect when style changes. React starts by checking the value of the dependency array. If the value has changed, it will run the effect. If the value has not changed, it will skip the effect.

  //m = coordinates (relative to the previous point in the path)
  //c = cubic bezier curves
  //s = smooth cubic bezier curves
  //z = close path

  /* const random = () => Math.round(Math.random() * 4); */ //generate different value every time I call it -> need to find a way not to change each time i change the distortion. TrieduseMemo and useCallback. Didnt'work

  //const randomX = () => Math.round(Math.random() * 200); // bug => calls the function every time it re-renderd. Fix= make it a state, not a function
  //const randomY = () => Math.round(Math.random() * 200); random()

  /**
   * baseFreq [0.5, 0.25] - the smaller the more distortion
   * baseFreq = (100 - distsortion) / 100
   * needs to be fractional value, as I increase the distortion it gets larger and larger but I want it to be the opposite, want it to be smaller and smaller. That's why I take 100 - distortion to get a smaller value - the fraction gets smaller.
   */

  return (
    <svg viewBox="0 0 600 600">
      <defs>
        <linearGradient id="Gradient1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="gray" />
          <stop offset="50%" stopColor={colors[0]} />
        </linearGradient>
        <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="gray" />
          <stop offset="50%" stopColor={colors[1]} />
        </linearGradient>
        <linearGradient id="Gradient3" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="gray" />
          <stop offset="50%" stopColor={colors[2]} />
        </linearGradient>
        <linearGradient id="Gradient4" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="gray" />
          <stop offset="50%" stopColor={colors[3]} />
        </linearGradient>
      </defs>
      {/*   <!-- Define the pattern --> */}
      {/*    https://css-tricks.com/snippets/svg/svg-patterns/ */}
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
{/*       https://css-tricks.com/creating-patterns-with-svg-filters/ */}
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
          baseFrequency={(101 - parameter.distortion) / 100} //not sure why, but by doing 101 instead of 100, it works better (it doesn't end being 0)
          // calculate numOctaves based on distortion
          numOctaves={Math.round(parameter.distortion)} //get round number of octaves
          /* numOctaves="4" */
          seed={parameter.distortion}
          result="turbulence"
        />
        <feDisplacementMap
          in2="turbulence"
          in="SourceGraphic"
          scale={parameter.distortion}
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
      {/* <rect width="100%" height="100%" filter="url(#turbulanceEffect)" /> */}
      <g
        id="blob__one"
        data-name="blob1"
        /* filter="url(#turbulanceEffect)" */
        transform={`translate(${randomX / 2} ${randomY + 200})`}
      >
        <path
          className="cls-1"
          d={`m200,222c-90.37,5.19-126.13,28.84-137.34,38.78-4.89,4.34-10.1,8.31-15.61,11.84-117.58,75.19-103.01,3.21-129.91-77.48-15.98-47.94,2.88-92.37,21.73-121.41,16.66-25.67,42.21-44.39,71.78-52.29s67.4-10.77,104.63,9.47c71.49,38.86,116.49,4.44,172.1,46.8,55.6,42.36,27.8,137.67-87.37,144.29Z`}
          /*  filter='url(#displacementFilter)'  */
          filter="url(#displacementFilter)"
          fill={fill1}
          style={{ rotate: animation, transition: 'all 0.5s ease-in-out' }}
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
          filter="url(#displacementFilter)"
          style={{ rotate: animation, transition: 'all 0.5s ease-in-out' }}
        />
      </g>
      <g
        id="blob__two"
        data-name="blob2"
        transform={`translate(${randomX} ${randomX - 60})`}
      >
        <path
          className="cls-1"
          d="m531.08,90c-.16.61-.3,1.15-.55,1.9-14.33,44.16-50.4,77.88-95.5,89.17l-176.43,44.17c-20.39,5.11-41.69,5.38-62.19.78l-145.04-32.46c-33-7.39-47.13-37.65-27.91-59.77l37.37-43.03s29.59-54.31,175.72-62.04c145.37-7.69,313.77-13.32,294.53,61.27Z"
          fill={fill2}
          filter="url(#displacementFilter)"
          style={{ rotate: animation, transition: 'all 0.5s ease-in-out' }}
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
          style={{ rotate: animation, transition: 'all 0.5s ease-in-out' }}
        />
      </g>
      <g
        id="blob__three"
        data-name="blob3"
        transform={`translate(${randomX} ${randomX - 200})`}
      >
        <path
          className="cls-1"
          d={`m${coords.xCoord[2]},${
            coords.yCoord[2]
          },c-.13.5-.25.95-.45,1.57-11.84,36.47-41.63,${'64.32'}-78.87,73.64l-145.71,${'36.47'}c-16.84,4.22-34.43,4.44-51.36.65l-119.78-26.8c-27.25-6.1-38.92-31.09-23.05-49.36l30.86-35.54s24.44-44.85,145.12-51.24c120.05-6.35,259.13-11,243.24,50.6Z`}
          fill={fill3}
          filter="url(#displacementFilter)"
          style={{ rotate: animation, transition: 'all 0.5s ease-in-out' }}
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
          filter="url(#displacementFilter)"
          style={{ rotate: animation, transition: 'all 0.5s ease-in-out' }}
        />
      </g>
      <g
        id="blob__four"
        data-name="blob4"
        transform={`translate(${randomX} ${randomX})`}
      >
        <path
          className="cls-1"
          d={`m${coords.xCoord[3]},${
            coords.yCoord[3]
          }c-12-5.19-25.06-7.44-38.12-6.9-17.57.73-42.28,5.71-46.58,27.43-6.8,${'34'},26.06,46.28,7.93,85.06-18.13,38.77-3.4,73.89,31.72,53.5,32.74-19.01,124.56-124.67,45.05-159.09Z`}
          /* fill={'#d2dbd7'} */
          fill={fill4}
          filter="url(#displacementFilter)"
          style={{ rotate: animation, transition: 'all 0.5s ease-in-out' }}
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
          filter="url(#displacementFilter)"
          style={{ rotate: animation, transition: 'all 0.5s ease-in-out' }}
        />
      </g>
    </svg>
  );
}

export default SvgDrawing;
