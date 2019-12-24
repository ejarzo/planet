import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import BandName from '../components/BandName';

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0, transform: 'rotate(20deg) scale(5)' },
  exited: { opacity: 0, transform: 'rotate(20deg) scale(5)' },
};

export const BandNameVortexTemplate = () => {
  const [bandName, setBandName] = useState('');
  const [includeNSFW, setIncludeNSFW] = useState(false);
  const url = `/.netlify/functions/get-band-name/?includeNSFW=${includeNSFW}`;
  const fetchBandName = () => {
    fetch(url)
      .then(response => response.json())
      .then(({ bandName }) => {
        setBandName(bandName);
      });
  };

  return (
    <div style={{ minHeight: 600 }}>
      <section className="band-name-vortex">
        {[...new Array(2)].map((_, i) => (
          <div className="cylinder" key={i}>
            {[...new Array(32)].map((_, j) => (
              <div className="side" key={`${i}${j}`} />
            ))}
          </div>
        ))}
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section" style={{ minHeight: '100vh' }}>
                <div>
                  <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                    Band Name Vortex
                  </h2>
                  <p>
                    Another quest of the staff of Planet Records is the search
                    for the greatest band name. Our research and development
                    department works tirelessly every day producing the cream of
                    the crop. Click the button to find your favorite band name.
                  </p>
                </div>
                <BandName bandName={bandName} />
                <div className="button-container">
                  <div>
                    <button
                      className="summon-band-name"
                      onClick={fetchBandName}
                    >
                      Summon Forth A Band Name
                    </button>

                    <div>
                      <input
                        id="includeNSFW"
                        type="checkbox"
                        onChange={() => setIncludeNSFW(!includeNSFW)}
                        value={includeNSFW}
                      />
                      <label htmlFor="includeNSFW">ALLOW PRURIENT FILTH</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

BandNameVortexTemplate.propTypes = {
  title: PropTypes.string,
  sections: PropTypes.array,
};

const BandNameVortex = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout isTransparent>
      <BandNameVortexTemplate
        title={frontmatter.title}
        sections={frontmatter.sections}
      />
    </Layout>
  );
};

BandNameVortex.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default BandNameVortex;

export const HistoryPageQuery = graphql`
  query BandNameVortex($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;
