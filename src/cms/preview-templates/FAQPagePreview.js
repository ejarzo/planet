import React from 'react';
import PropTypes from 'prop-types';
import { FAQTemplate } from '../../templates/faq-page';

const FAQPreview = ({ entry, widgetFor }) => (
  <FAQTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

FAQPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default FAQPreview;
