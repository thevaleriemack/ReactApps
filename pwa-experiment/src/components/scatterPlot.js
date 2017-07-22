import React from 'react';
import * as d3 from 'd3';

const normalGenerator = d3.randomNormal();
function generateFrom(intercept, slope, noise, n) {
  let points = [];
  for (var i = 0; i < n; i++) {
    const x = normalGenerator();
    // Fill in the noisy y value
    const y = x * slope + intercept + noise * normalGenerator(); 
    points.push({ x: x, y: y });
  }
  return points;
}

type Props = {
  height: number,
  width: number,
  dataPoints: number,
};

export default ({
  height,
  width,
  dataPoints,
}: Props) => {
  const xExtent = [-3, 3];
  const yExtent = [-3, 3];

  const xScale = d3.scaleLinear().domain(xExtent).range([0, width]);
  const yScale = d3.scaleLinear().domain(yExtent).range([height, 0]);
  
  const points = generateFrom(0.0, 0.5, 0.5, dataPoints);
  
  const circlePoints = points.map(function(p) {
    let newP = {};
    newP['x'] = xScale(p.x);
    newP['y'] = yScale(p.y);
    return newP;
  });
  
  // comment this out when not debugging
  window.points = points;
  
  return (
    <svg className="plot plot-1" height={height} width={width}>
      <g>
        {circlePoints.map(circlePoint => (
          <circle
            cx={circlePoint.x}
            cy={circlePoint.y}
            key={`${circlePoint.x},${circlePoint.y}`}
            r={3}
          />
        ))}
      </g>
    </svg>
  );
};