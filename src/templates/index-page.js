import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Features from '../components/Features';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import { MarkdownContent } from '../components/Content';
import PlanetRecordsLogo from '../img/PlanetRecordsLogo';

export const IndexPageTemplate = props => {
  const {
    image,
    title,
    heading,
    subheading,
    description,
    intro,
    shoppingOnlineSection,
    lowerSection,
  } = props;

  return (
    <div className="IndexPage">
      <div className="full-width-image margin-top-0" style={{ height: 450 }}>
        <div
          className="index-page-banner"
          style={{ height: 450, position: 'fixed', top: 50, width: '100%' }}
        >
          <PreviewCompatibleImage
            style={{ height: '100%', width: '100%' }}
            imageInfo={image}
          />
        </div>
        <div className="IndexPage__TitleContainer">
          <h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen">
            {title}
          </h1>
          <PlanetRecordsLogo className="IndexPage__TitleContainer__Logo" />
          {subheading && (
            <h3 className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen">
              {subheading}
            </h3>
          )}
        </div>
      </div>

      <section>
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <section>
                    <div className="columns">
                      <div className="column is-12">
                        <h3 className="has-text-weight-semibold is-size-2">
                          {heading}
                        </h3>
                        <MarkdownContent content={description} />
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="inverted">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  {shoppingOnlineSection && (
                    <div>
                      <div style={{ marginBottom: '1em' }}>
                        <MarkdownContent
                          content={shoppingOnlineSection.description}
                        />
                      </div>
                      <div className="columns">
                        {shoppingOnlineSection.links.map(
                          ({ title, url, image }) => (
                            <div className="column is-3">
                              <a
                                href={url}
                                target="blank"
                                className="RetailerCard"
                                title={title}
                              >
                                <div
                                  style={{
                                    height: 80,
                                    backgroundImage: `url(${image.publicURL})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'contain',
                                    backgroundPosition: 'center',
                                  }}
                                />
                                {/* <h3>{title}</h3> */}
                              </a>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  {lowerSection && (
                    <section>
                      <MarkdownContent content={lowerSection} />
                    </section>
                  )}

                  <section>
                    <h2>{intro.heading}</h2>
                    <Features gridItems={intro.blurbs} />
                    <div className="columns">
                      <div className="column is-12 has-text-centered">
                        <Link className="btn" to="/tshirts">
                          See all merch
                        </Link>
                      </div>
                    </div>
                  </section>
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
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <IndexPageTemplate {...frontmatter} />
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
        shoppingOnlineSection {
          description
          links {
            title
            url
            image {
              extension
              publicURL
            }
          }
        }
        description
        lowerSection
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
