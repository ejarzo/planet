import React from 'react';

import { AboutPageTemplate } from '../../templates/about-page';
import { FAQPageTemplate } from '../../templates/faq-page';
import { SellTradeTemplate } from '../../templates/sell-trade-page';
import { PageWithBannerTemplate } from '../../templates/page-with-banner';
import MarkdownPagePreview from './MarkdownPagePreview';

export const AboutPagePreview = props => (
  <MarkdownPagePreview Template={PageWithBannerTemplate} {...props} />
);

export const FAQPagePreview = props => (
  <MarkdownPagePreview Template={PageWithBannerTemplate} {...props} />
);

export const SellTradePagePreview = props => (
  <MarkdownPagePreview Template={PageWithBannerTemplate} {...props} />
);

export const LocationHoursPagePreview = props => (
  <MarkdownPagePreview Template={PageWithBannerTemplate} {...props} />
);
