import React from 'react';

const Preview = props => {
  const placeholderText = '...and watch it appear nicely formatted here.';
  const innerHtml = props.markdown || placeholderText;
  return (
    <div id="preview" dangerouslySetInnerHTML={{ __html: innerHtml }}></div>
  );
};

export default Preview;
