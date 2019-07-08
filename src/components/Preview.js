import React from 'react';

const Preview = props => {
  const placeholderText = '...and watch it appear nicely formatted here.';
  return <div id="preview">{props.markdown || placeholderText}</div>;
};

export default Preview;
