import React from 'react';
import PropTypes from 'prop-types';
import { TShirtsTemplate } from '../../templates/tshirts-page';

const TShirtsPagePreview = ({ entry, widgetFor }) => (
  <TShirtsTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

TShirtsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default TShirtsPagePreview;
