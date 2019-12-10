import React from 'react';
import showdown from 'showdown';
import PropTypes from 'prop-types';
const converter = new showdown.Converter();

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

export const MarkdownContent = ({ content, className }) => {
  const htmlContent = converter.makeHtml(content);
  return <HTMLContent content={htmlContent} className={className} />;
};

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
);

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
