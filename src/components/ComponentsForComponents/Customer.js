import React from 'react';

function Review(props)
{
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    <img
                      src="https://picsum.photos/50"
                      alt="John Doe"
                      className="rounded-full w-10 h-10"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">{props.name}</h4>
                    <p className="text-gray-600">{props.about}</p>
                  </div>
                </div>
                <p className="text-gray-600">{props.description} </p>
              </div>
    );
}

export default Review;