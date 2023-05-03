import React from 'react';
import FourSVG from './FourSVG';

const colors = ['#d2bca9', '#8eb6bc', '#d2dbd7', '#bec4aa'];

function SvgDrawing({ distortionParameter, randomY, randomX, style, animation }) {
  return (
    <svg viewBox="0 0 800 800" id="svg_og">

      {/* distortion filter  */}
      <filter id="displacementFilter">
        <feTurbulence
          type="turbulence"
          baseFrequency={(101 - distortionParameter.distortion) / 100}
          // calculate numOctaves based on distortion value
          numOctaves={Math.round(distortionParameter.distortion)}
          seed={distortionParameter.distortion}
          result="turbulence"
        />
        <feDisplacementMap
          in2="turbulence"
          in="SourceGraphic"
          scale={distortionParameter.distortion}
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
