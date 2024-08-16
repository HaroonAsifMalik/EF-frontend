import React from 'react';

const MainDashboard = () => {
  return (
    <div className="flex-grow p-6 bg-gray-100 text-black">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-bold">Total Proposals</h2>
          <p className="text-2xl">16</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-bold">Proposals Checked</h2>
          <p className="text-2xl">4</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-bold">Current Projects</h2>
          <p className="text-2xl">7</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-bold">Total Connect</h2>
          <p className="text-2xl">100</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow col-span-2">
          <h2 className="text-lg font-bold">Proposals Sent Timeline</h2>
          <p className="text-gray-600">Weekly</p>
          <div className="h-64 bg-gray-200 rounded-lg mt-4"></div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-bold">Basic User info</h2>
          <ul className="mt-4 text-gray-600">
            <li> <strong> Badges:</strong> 3</li>
            <li> <strong> Badges:</strong> 3</li>
            <li> <strong> Account: </strong> Upwork</li>
            <li> <strong> Ratings:</strong> 12</li>
            <li> <strong> Response Time:</strong>1 hour </li>
            <li> <strong> Skills: </strong> Reactjs , Django, Tailwindcss </li>
            <li> <strong> Categories: </strong> Web-development</li>
            <li> <strong> Job Success Score:</strong> 70%</li>
          </ul>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-bold">Tips to Enhance Profile</h2>
        <div className="mt-4">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-100 rounded-lg">
              <h3 className="font-bold">Unknown Infostealer Data - 520 Records</h3>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur. Mattis neque.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
