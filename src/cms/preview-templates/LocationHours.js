import React from 'react';
import PropTypes from 'prop-types';
import { LocationHoursTemplate } from '../../templates/location-hours-page';

const LocationHoursPagePreview = ({ entry, widgetFor }) => (
  <LocationHoursTemplate
    ads={console.log('als;dfkja;sldfkj')}
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

LocationHoursPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default LocationHoursPagePreview;
