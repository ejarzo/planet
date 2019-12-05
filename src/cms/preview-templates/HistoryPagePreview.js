import React from 'react';
import PropTypes from 'prop-types';
import { HistoryPageTemplate } from '../../templates/history-page';

const HistoryPagePreview = ({ entry, widgetFor }) => (
  <HistoryPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

HistoryPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default HistoryPagePreview;
