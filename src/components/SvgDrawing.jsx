import React from 'react';
import FourSVG from './FourSVG';

const colors = ['#d2bca9', '#8eb6bc', '#d2dbd7', '#bec4aa'];

function SvgDrawing({ parameter, randomY, randomX, style, animation }) {
  return (
    <svg viewBox="0 0 800 800" id="svg_og">
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

      {/* distortion filter  */}
      <filter id="displacementFilter">
        <feTurbulence
          type="turbulence"
          baseFrequency={(101 - parameter.distortion) / 100}
          // calculate numOctaves based on distortion value
          numOctaves={Math.round(parameter.distortion)}
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
      <FourSVG
        randomX={randomX}
        randomY={randomY}
        animation={animation}
        style={style}
      />
    
    </svg>
  );
}

export default SvgDrawing;
export { colors };
