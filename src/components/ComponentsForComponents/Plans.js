import React from "react";


function Plan(props)
{
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{props.title}</h3>
        <p className="text-gray-600 text-lg">{props.price}</p>
        <ul className="list-none p-0 mb-4">
          <li className="flex items-center mb-2">
            <i className="fas fa-check text-green-600 mr-2"></i>
            <span>{props.user}</span>
          </li>
          <li className="flex items-center mb-2">
            <i className="fas fa-check text-green-600 mr-2"></i>
            <span>{props.storage}</span>
          </li>
          <li className="flex items-center mb-2">
            <i className="fas fa-check text-green-600 mr-2"></i>
            <span>{props.support}t</span>
          </li>
        </ul>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Sign Up
        </button>
      </div>
    );
}
export default Plan;