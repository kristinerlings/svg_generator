import React, { useState, useEffect } from 'react';
import { colors } from './SvgDrawing';

function FourSVG({ randomX, randomY, animation, style }) {
  //Fill color for each shape
  const [fill1, setFill1] = useState();
  const [fill2, setFill2] = useState();
  const [fill3, setFill3] = useState();
  const [fill4, setFill4] = useState();

  const [xCoord, setXCoord] = useState(['200', '33', '439', '103']);
  const [yCoord, setYCoord] = useState(['222', '220', '75', '16']);

  //useEffect : https://dev.to/hajarnasr/react-hooks-useeffect-1816
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
      case 'Pattern':
        setFill1(`url(#pattern-chevron)`);
        setFill2(`url(#pattern-chevron)`);
        setFill3(`url(#pattern-chevron)`);
        setFill4(`url(#pattern-chevron)`);
        break;
    }
  }, [style]); //dependency array - only re-render when style changes

  return (
    <>
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
      {/*  Pattern : https://css-tricks.com/snippets/svg/svg-patterns/ */}
      <pattern
        id="pattern-chevron"
        x="0"
        y="0"
        patternUnits="userSpaceOnUse"
        width="20"
        height="30"
        viewBox="0 0 10 18"
      >
        {/* <!-- Group the chevron shapes --> */}
        <g id="chevron">
          <path className="pattern left" d="M5 0l5 3v5l-5 -3z"></path>
          <path className="pattern right" d="M10 0l-5 3v5l5 -3"></path>
        </g>
        {/* <!-- Use the pattern --> */}
        <use x="0" y="9" xlinkHref="#chevron"></use>
      </pattern>

      <g
        id="blob__one"
        data-name="blob1"
        transform={`translate(${randomX / 2} ${randomY + 200})`}
      >
        <path
          className="cls-1"
          d={`m200,222c-90.37,5.19-126.13,28.84-137.34,38.78-4.89,4.34-10.1,8.31-15.61,11.84-117.58,75.19-103.01,3.21-129.91-77.48-15.98-47.94,2.88-92.37,21.73-121.41,16.66-25.67,42.21-44.39,71.78-52.29s67.4-10.77,104.63,9.47c71.49,38.86,116.49,4.44,172.1,46.8,55.6,42.36,27.8,137.67-87.37,144.29Z`}
          filter="url(#displacementFilter)"
          fill={fill1}
          style={{ rotate: animation, transition: 'all 0.5s ease-in-out' }}
        />
        <path
          className="cls-2"
          d={`m${xCoord[0] - 16},${
            yCoord[0] - 12
          }c-90.37,5.19-126.13,28.84-137.34,38.78-4.89,4.34-10.1,8.31-15.61,11.84-117.58,75.19-103.01,3.21-129.91-77.48-15.98-47.94,2.88-92.37,21.73-121.41,16.66-25.67,42.21-44.39,71.78-52.29,28.62-7.64,67.4-10.77,104.63,9.47,71.49,38.86,116.49,4.44,172.1,46.8,55.6,42.36,27.8,137.67-87.37,144.29Z`}
          fill={'none'}
          stroke={'#636363'}
          strokeMiterlimit={10}
          strokeWidth={'4px'}
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
          className="cls-2"
          d="m518.81,68.04c-.16.61-.3,1.15-.55,1.9-14.33,44.16-50.4,77.88-95.5,89.17l-176.43,44.17c-20.39,5.11-41.69,5.38-62.19.78l-145.04-32.46c-33-7.39-47.13-37.65-27.91-59.77l37.37-43.03S78.14,14.5,224.28,6.76c145.37-7.69,313.77-13.32,294.53,61.27Z"
          fill={'none'}
          stroke={'#636363'}
          strokeMiterlimit={10}
          strokeWidth={'4px'}
          filter="url(#displacementFilter)"
          style={{ rotate: animation, transition: 'all 0.5s ease-in-out' }}
        />
      </g>
      <g
        id="blob__three"
        data-name="blob3"
        transform={`translate(${randomX - 300} ${randomY - 200})`}
      >
        <path
          className="cls-1"
          d={`m531.08,90c-.16.61-.3,1.15-.55,1.9-14.33,44.16-50.4,77.88-95.5,89.17l-176.43,44.17c-20.39,5.11-41.69,5.38-62.19.78l-145.04-32.46c-33-7.39-47.13-37.65-27.91-59.77l37.37-43.03s29.59-54.31,175.72-62.04c145.37-7.69,313.77-13.32,294.53,61.27Z`}
          fill={fill3}
          filter="url(#displacementFilter)"
          style={{ rotate: animation, transition: 'all 0.5s ease-in-out' }}
        />
        <path
          className="cls-2"
          d={`m518.81,68.04c-.16.61-.3,1.15-.55,1.9-14.33,44.16-50.4,77.88-95.5,89.17l-176.43,44.17c-20.39,5.11-41.69,5.38-62.19.78l-145.04-32.46c-33-7.39-47.13-37.65-27.91-59.77l37.37-43.03S78.14,14.5,224.28,6.76c145.37-7.69,313.77-13.32,294.53,61.27Z`}
          fill={'none'}
          stroke={'#636363'}
          strokeMiterlimit={10}
          strokeWidth={'4px'}
          filter="url(#displacementFilter)"
          style={{ rotate: animation, transition: 'all 0.5s ease-in-out' }}
        />
      </g>
      <g
        id="blob__four"
        data-name="blob4"
        transform={`translate(${randomX + 400} ${randomY})`}
      >
        <path
          className="cls-1"
          d={`m196.64,29.75c-24.51-10.61-51.19-15.2-77.87-14.09-35.89,1.49-86.36,11.66-95.15,56.03-13.89,70.14,53.23,94.55,16.2,173.75-37.03,79.21-6.94,150.95,64.8,109.29,66.88-38.84,254.45-254.68,92.02-324.98Z`}
          fill={fill4}
          filter="url(#displacementFilter)"
          style={{ rotate: animation, transition: 'all 0.5s ease-in-out' }}
        />
        <path
          className="cls-2"
          d={`m177.44,16.75C152.93,6.15,126.25,1.56,99.57,2.66,63.68,4.15,13.21,14.32,4.42,58.69c-13.89,70.14,53.23,94.55,16.2,173.75-37.03,79.21-6.94,150.95,64.8,109.29,66.88-38.84,254.45-254.68,92.02-324.98Z`}
          fill={'none'}
          stroke={'#636363'}
          strokeMiterlimit={10}
          strokeWidth={'4px'}
          filter="url(#displacementFilter)"
          style={{ rotate: animation, transition: 'all 0.5s ease-in-out' }}
        />
      </g>
    </>
  );
}

export default FourSVG;
