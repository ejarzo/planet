import React from 'react';

import { AboutPageTemplate } from '../../templates/about-page';
import { FAQPageTemplate } from '../../templates/faq-page';
import { SellTradeTemplate } from '../../templates/sell-trade-page';
import MarkdownPagePreview from './MarkdownPagePreview';

export const AboutPagePreview = props => (
  <MarkdownPagePreview Template={AboutPageTemplate} {...props} />
);

export const FAQPagePreview = props => (
  <MarkdownPagePreview Template={FAQPageTemplate} {...props} />
);

export const SellTradePagePreview = props => (
  <MarkdownPagePreview Template={SellTradeTemplate} {...props} />
);
