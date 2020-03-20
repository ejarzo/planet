import React from 'react';
import './wormhole.scss';
import vortexVideo from '../img/vortex-loop.mp4';

export default () => (
  <div className="band-name-vortex">
    <video autoPlay muted loop src={vortexVideo} />
  </div>
);
