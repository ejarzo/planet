import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import { MarkdownContent } from '../components/Content';

export const HistoryPageTemplate = props => {
  const { title, sections } = props;

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <div style={{ marginTop: '2em' }}>
                {sections.map(({ description, title, image }, i) => (
                  <div
                    className="columns"
                    style={{
                      flexDirection: i % 2 ? 'row-reverse' : 'row',
                    }}
                  >
                    <div className="column" style={{ maxWidth: 400 }}>
                      <PreviewCompatibleImage imageInfo={image} />
                    </div>
                    <div className="column">
                      {title && (
                        <h2 className="title is-size-2 has-text-weight-bold is-bold-light">
                          {title}
                        </h2>
                      )}
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
        title={frontmatter.title}
        sections={frontmatter.sections}
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
          title
          description
          image {
            childImageSharp {
              fluid(maxWidth: 400, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
