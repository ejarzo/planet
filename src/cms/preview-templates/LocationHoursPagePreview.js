import React from 'react';
import PropTypes from 'prop-types';
import { PageWithBannerTemplate } from '../../templates/page-with-banner';

const LocationHoursPagePreview = ({ entry, widgetFor }) => (
  <PageWithBannerTemplate
    title={entry.getIn(['data', 'title'])}
    bannerImage={entry.getIn(['data', 'image'])}
    content={widgetFor('body')}
  />
);

LocationHoursPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default LocationHoursPagePreview;
