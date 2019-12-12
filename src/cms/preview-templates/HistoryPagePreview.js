import React from 'react';
import PropTypes from 'prop-types';
import { HistoryPageTemplate } from '../../templates/history-page';

const HistoryPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs']);
  const entrySections = entry.getIn(['data', 'sections']);
  const sections = entrySections ? entrySections.toJS() : [];

  return (
    <HistoryPageTemplate
      title={entry.getIn(['data', 'title'])}
      description={entry.getIn(['data', 'description'])}
      sections={sections}
    />
  );
};

HistoryPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default HistoryPagePreview;
