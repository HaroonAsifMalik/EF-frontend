import React from 'react';

function Feature(props) {
  return (
    <div className="auto-bid-feature">
      <h3 className="text-xl font-semibold mb-2">{props.title}</h3>
      <p className="text-gray-700">{props.description}</p>
    </div>
  );
}

export default Feature;

