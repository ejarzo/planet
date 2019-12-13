import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import logo from '../img/planet-logo-test.svg';
import Layout from '../components/Layout';
import Features from '../components/Features';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import { MarkdownContent } from '../components/Content';

export const IndexPageTemplate = props => {
  const { image, title, heading, subheading, description, intro } = props;

  return (
    <div>
      <div className="full-width-image margin-top-0" style={{ height: 450 }}>
        <div
          className="index-page-banner"
          style={{ height: '100%', position: 'fixed', top: 0, width: '100%' }}
        >
          <PreviewCompatibleImage
            style={{ height: '100%', width: '100%' }}
            imageInfo={image}
          />
        </div>
        <div
          style={{
            display: 'flex',
            width: '100%',
            maxWidth: 450,
            padding: '0 1em',
            lineHeight: '1',
            justifyContent: 'space-around',
            alignItems: 'left',
            flexDirection: 'column',
            textAlign: 'center',
            zIndex: 2,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              color: 'white',
              lineHeight: '1',
              position: 'absolute',
              left: -9999,
              padding: '0.25em',
            }}
          >
            {title}
          </h1>
          <img
            src={logo}
            alt="Planet Records"
            style={{
              margin: '2em auto 1em',
              width: '90%',
              filter: 'drop-shadow(-3px -3px 0px #003268)',
            }}
          />
          {subheading && (
            <h3
              className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
              style={{
                color: 'white',
                lineHeight: '1',
                padding: '0.25em',
                filter: 'drop-shadow(-2px -2px 0px #003268)',
              }}
            >
              {subheading}
            </h3>
          )}
        </div>
      </div>
      <section
        className="section section--gradient"
        style={{ background: 'white', position: 'relative', zIndex: 20 }}
      >
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <MarkdownContent content={description} />
                    </div>
                  </div>
                  <h2>{intro.heading}</h2>
                  <Features gridItems={intro.blurbs} />
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/tshirts">
                        See all merch
                      </Link>
                    </div>
                  </div>
                  {/* <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest stories
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
                      </Link>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  console.log('DATA', data);
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 500, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
