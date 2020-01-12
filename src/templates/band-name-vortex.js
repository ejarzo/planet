import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import BandName from '../components/BandName';
import Vortex from '../components/Vortex';
import { shuffle } from '../utils/shuffle';

export const BandNameVortexTemplate = props => {
  const {
    title,
    description,
    buttonLabel,
    checkboxLabel,
    generalBandNames,
    nsfwBandNames,
  } = props;

  const [index, setIndex] = useState(0);
  const [includeNSFW, setIncludeNSFW] = useState(false);
  const listContainer = useRef([
    '',
    ...shuffle([...generalBandNames, ...nsfwBandNames]),
  ]);

  const shuffledList = listContainer.current;
  const { value: bandName } = shuffledList[index];

  const setBandName = () => {
    let nextI = 1;
    if (!includeNSFW) {
      while (
        shuffledList[index + nextI] &&
        shuffledList[index + nextI].isNsfw
      ) {
        nextI++;
      }
    }
    if (shuffledList[index + nextI]) {
      setIndex(index + nextI);
    } else {
      setIndex(0);
    }
  };

  return (
    <section className="BandNameVortexPage">
      <div>
        <Vortex />
        <div className="container">
          <div
            className="section"
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                flex: '0 0 calc(100%/3)',
              }}
            >
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <p>{description}</p>
            </div>
            <BandName bandName={bandName} />
            <div
              style={{
                flex: '0 0 calc(100%/3)',
              }}
            >
              <div>
                <button className="summon-band-name" onClick={setBandName}>
                  {buttonLabel}
                </button>

                <div>
                  <input
                    id="includeNSFW"
                    type="checkbox"
                    onChange={() => setIncludeNSFW(!includeNSFW)}
                    value={includeNSFW}
                  />
                  <label htmlFor="includeNSFW">{checkboxLabel}</label>
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
};

const BandNameVortex = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout isTransparent>
      <BandNameVortexTemplate
        title={frontmatter.title}
        description={frontmatter.description}
        buttonLabel={frontmatter.buttonLabel}
        checkboxLabel={frontmatter.checkboxLabel}
        generalBandNames={frontmatter.generalBandNames
          .split('\n')
          .map(name => ({ value: name, isNsfw: false }))}
        nsfwBandNames={frontmatter.nsfwBandNames
          .split('\n')
          .map(name => ({ value: name, isNsfw: true }))}
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
        description
        buttonLabel
        checkboxLabel
        generalBandNames
        nsfwBandNames
      }
    }
  }
`;
