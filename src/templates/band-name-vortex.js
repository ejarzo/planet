import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import BandName from '../components/BandName';
import Vortex from '../components/Vortex';

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
    <section className="BandNameVortexPage">
      <div>
        <Vortex />
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div
                className="section"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ flex: '0 0 calc(100%/3)' }}>
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
                <div style={{ flex: '0 0 calc(100%/3)' }}>
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
      </div>
    </section>
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
