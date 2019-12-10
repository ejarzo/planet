import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Features from '../components/Features';
// import products from '../components/products';
import Pricing from '../components/Pricing';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import { MarkdownContent } from '../components/Content';

export const TShirtPageTemplate = props => {
  const {
    image,
    title,
    heading,
    description,
    intro,
    main,
    products,
    fullImage,
    pricing,
  } = props;

  const {
    heading: mainHeading,
    description: mainDescription,
    image1,
    image2,
    image3,
  } = main || {};

  console.log('PRODUCTS', products);
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
                        <PreviewCompatibleImage
                          imageInfo={image}
                          //style={{ height: 100 }}
                        />
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
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  products: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
};

const TShirtPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <TShirtPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        products={frontmatter.products}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
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
