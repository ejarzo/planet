import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

export const LocationHoursTemplate = ({
  title,
  content,
  bannerImage,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;
  return (
    <div>
      {bannerImage && (
        <div className="page-banner">
          <PreviewCompatibleImage
            style={{
              height: '100%',
              width: '100%',
            }}
            imageInfo={bannerImage}
          />
          <h1 className="shirt-box title is-size-3 has-text-weight-bold is-bold-light">
            {title}
          </h1>
        </div>
      )}
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                {!bannerImage && (
                  <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                    {title}
                  </h2>
                )}
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

LocationHoursTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const LocationHoursPage = ({ data }) => {
  const { markdownRemark: post } = data;
  console.log('DATA', data);
  return (
    <Layout>
      <LocationHoursTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        bannerImage={post.frontmatter.image}
        content={post.html}
      />
    </Layout>
  );
};

LocationHoursPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default LocationHoursPage;

export const locationHoursPageQuery = graphql`
  query LocationHoursPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
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
`;
