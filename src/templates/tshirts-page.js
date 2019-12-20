import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import { MarkdownContent } from '../components/Content';

export const TShirtPageTemplate = props => {
  const { title, description, products } = props;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <div className="content">
                <div
                  className="columns "
                  style={{ flexDirection: 'row', marginTop: 30 }}
                >
                  {products.slice(0, 2).map(({ description, image }) => (
                    <div className="column is-6">
                      <div className="shirt-box">
                        <PreviewCompatibleImage imageInfo={image} />
                      </div>
                    </div>
                  ))}
                </div>
                <MarkdownContent content={description} />
                <div
                  className="columns is-multiline"
                  style={{ marginTop: '2em' }}
                >
                  {products.slice(2).map(({ description, image }) => (
                    <div className="column is-3">
                      <div className="shirt-box">
                        <PreviewCompatibleImage imageInfo={image} />
                        <p>{description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

TShirtPageTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  products: PropTypes.array,
};

const TShirtPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <TShirtPageTemplate
        title={frontmatter.title}
        description={frontmatter.description}
        products={frontmatter.products}
      />
    </Layout>
  );
};

TShirtPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default TShirtPage;

export const TShirtPageQuery = graphql`
  query TShirtPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        products {
          description
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
