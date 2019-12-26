import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './BandName.scss';

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0, transform: 'rotate(20deg) scale(5)' },
  exited: { opacity: 0, transform: 'rotate(20deg) scale(5)' },
};

const BandName = ({ bandName }) => {
  return (
    <TransitionGroup appear className="BandNames">
      {bandName && [
        <CSSTransition unmountOnExit key={bandName} timeout={400}>
          {state => (
            <div
              style={{
                transition: 'all 0.4s cubic-bezier(1, 0.02, 0.66, 1.24)',
                position: 'absolute',
                left: 0,
                right: 0,
                top: 'calc(50% - 2em)',
                zIndex: 200,
                ...transitionStyles[state],
              }}
            >
              <div className="BandName">{bandName}</div>
            </div>
          )}
        </CSSTransition>,
      ]}
    </TransitionGroup>
  );
};

export default BandName;
