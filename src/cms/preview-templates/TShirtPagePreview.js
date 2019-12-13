import React from 'react';
import PropTypes from 'prop-types';
import { TShirtPageTemplate } from '../../templates/tshirts-page';

const TShirtPagePreview = ({ entry, getAsset }) => {
  const entryProducts = entry.getIn(['data', 'products']);
  const products = entryProducts ? entryProducts.toJS() : [];

  return (
    <TShirtPageTemplate
      title={entry.getIn(['data', 'title'])}
      description={entry.getIn(['data', 'description'])}
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
