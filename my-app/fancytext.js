import React from 'react';
import './FancyText.css'; // Have to add some basic styling to FancyText.css

function FancyText({ title, text }) {
  return (
    <div className={title === 'true' ? 'fancy-title' : 'fancy-text'}>
      {text}
    </div>
  );
}

export default FancyText;
