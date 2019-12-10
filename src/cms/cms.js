import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import BlogPostPreview from './preview-templates/BlogPostPreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import LocationHoursPagePreview from './preview-templates/LocationHoursPagePreview';
import HistoryPagePreview from './preview-templates/HistoryPagePreview';
import TShirtPagePreview from './preview-templates/TShirtPagePreview';
import {
  AboutPagePreview,
  SellTradePagePreview,
  FAQPagePreview,
} from './preview-templates';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('sell-trade', SellTradePagePreview);
CMS.registerPreviewTemplate('location-hours', LocationHoursPagePreview);
CMS.registerPreviewTemplate('history', HistoryPagePreview);
CMS.registerPreviewTemplate('tshirts', TShirtPagePreview);
CMS.registerPreviewTemplate('faq', FAQPagePreview);
