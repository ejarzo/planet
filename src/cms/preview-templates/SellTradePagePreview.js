import React from 'react';
import PropTypes from 'prop-types';
import { SellTradeTemplate } from '../../templates/sell-trade-page';

const SellTradePagePreview = ({ entry, widgetFor }) => (
  <SellTradeTemplate
    ads={console.log('als;dfkja;sldfkj')}
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

SellTradePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default SellTradePagePreview;
