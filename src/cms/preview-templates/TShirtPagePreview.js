import React from 'react';
import PropTypes from 'prop-types';
import { TShirtPageTemplate } from '../../templates/tshirts-page';

const TShirtPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs']);
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : [];

  const entryProducts = entry.getIn(['data', 'products']);
  const products = entryProducts ? entryProducts.toJS() : [];

  const entryPricingPlans = entry.getIn(['data', 'pricing', 'plans']);
  const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : [];

  return (
    <TShirtPageTemplate
      image={entry.getIn(['data', 'image'])}
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      intro={{ blurbs }}
      main={{
        heading: entry.getIn(['data', 'main', 'heading']),
        description: entry.getIn(['data', 'main', 'description']),
        image1: {
          image: getAsset(entry.getIn(['data', 'main', 'image1', 'image'])),
          alt: entry.getIn(['data', 'main', 'image1', 'alt'])
        },
        image2: {
          image: getAsset(entry.getIn(['data', 'main', 'image2', 'image'])),
          alt: entry.getIn(['data', 'main', 'image2', 'alt'])
        },
        image3: {
          image: getAsset(entry.getIn(['data', 'main', 'image3', 'image'])),
          alt: entry.getIn(['data', 'main', 'image3', 'alt'])
        }
      }}
      fullImage={entry.getIn(['data', 'full_image'])}
      products={products}
      pricing={{
        heading: entry.getIn(['data', 'pricing', 'heading']),
        description: entry.getIn(['data', 'pricing', 'description']),
        plans: pricingPlans
      }}
    />
  );
};

TShirtPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default TShirtPagePreview;
