import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import { MarkdownContent } from '../components/Content';

export const HistoryPageTemplate = props => {
  const { title, sections } = props;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <div
                className="columns is-multiline"
                style={{ marginTop: '2em' }}
              >
                {sections.slice(2).map(({ description, image }) => (
                  <div className="column is-3">
                    <div className="shirt-box">
                      <PreviewCompatibleImage
                        imageInfo={image}
                        //style={{ height: 100 }}
                      />
                      <MarkdownContent content={description} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HistoryPageTemplate.propTypes = {
  title: PropTypes.string,
  sections: PropTypes.array,
};

const HistoryPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <HistoryPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        sections={frontmatter.sections}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
      />
    </Layout>
  );
};

HistoryPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default HistoryPage;

export const HistoryPageQuery = graphql`
  query HistoryPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        sections {
          description
          image {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
