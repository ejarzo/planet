import React from 'react';
import './wormhole.scss';

export default () => (
  <div className="band-name-vortex">
    {[...new Array(2)].map((_, i) => (
      <div className="cylinder" key={i}>
        {[...new Array(32)].map((_, j) => (
          <div className="side" key={`${i}${j}`} />
        ))}
      </div>
    ))}
  </div>
);
