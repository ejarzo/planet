import React from 'react';
import PropTypes from 'prop-types';

const MarkdownPagePreview = ({ Template, entry, widgetFor }) => (
  <Template
    title={entry.getIn(['data', 'title'])}
    bannerImage={entry.getIn(['data', 'image'])}
    content={widgetFor('body')}
  />
);

MarkdownPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default MarkdownPagePreview;
