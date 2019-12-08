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
      title={entry.getIn(['data', 'title'])}
      description={entry.getIn(['data', 'description'])}
      intro={{ blurbs }}
      products={products}
    />
  );
};

TShirtPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default TShirtPagePreview;
