import React from 'react';

function FeatureCard({ img, altText, title, description, className = "" }) {
  return (
    <div className={className}>
      {img && (
        <div className="w-24 h-24 mb-4 mx-auto">
          <img src={img} alt={altText} />
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

export default FeatureCard;
