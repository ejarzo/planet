import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import IndexPagePreview from './preview-templates/IndexPagePreview';
import TShirtPagePreview from './preview-templates/TShirtPagePreview';
import HistoryPagePreview from './preview-templates/HistoryPagePreview';

import MarkdownPagePreview from './preview-templates/MarkdownPagePreview';

window.___loader = { enqueue: () => {}, hovering: () => {} };

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('about', MarkdownPagePreview);
CMS.registerPreviewTemplate('sell-trade', MarkdownPagePreview);
CMS.registerPreviewTemplate('location-hours', MarkdownPagePreview);
CMS.registerPreviewTemplate('history', HistoryPagePreview);
CMS.registerPreviewTemplate('tshirts', TShirtPagePreview);
CMS.registerPreviewTemplate('faq', MarkdownPagePreview);
