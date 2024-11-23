import React from 'react';


function Feature(props)
{
    return (
        <div className="unlock-feature">
          <div className="w-24 h-24 mb-4 mx-auto">
            <img src={props.img} alt={props.altText} />
          </div>             
          <h3 className="text-xl font-semibold mb-2">{props.title}</h3>
          <p className="text-gray-700">{props.description}</p>
        </div>
      );
}

export default Feature;