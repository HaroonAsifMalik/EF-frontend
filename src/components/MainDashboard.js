import React from 'react';

const MainDashboard = () => {
  return (
    <div className="flex-grow p-6 bg-gray-100 text-black">
      {/* Dashboard Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Welcome back, User!</h1>
        <p className="text-gray-600">Here’s a quick overview of your current status.</p>
      </div>

      {/* Dashboard Overview Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-all">
          <h2 className="text-lg font-semibold text-gray-800">Total Proposals</h2>
          <p className="text-3xl text-gray-900">16</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-all">
          <h2 className="text-lg font-semibold text-gray-800">Proposals Checked</h2>
          <p className="text-3xl text-gray-900">4</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-all">
          <h2 className="text-lg font-semibold text-gray-800">Current Projects</h2>
          <p className="text-3xl text-gray-900">7</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-all">
          <h2 className="text-lg font-semibold text-gray-800">Total Connects</h2>
          <p className="text-3xl text-gray-900">100</p>
        </div>
      </div>

      {/* Simplified Timeline Section */}
      <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-all mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Proposals Sent Timeline</h2>
        <div className="h-48 bg-gray-200 rounded-lg mt-4"></div> {/* Placeholder for chart */}
      </div>

      {/* User Info Section */}
      <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-all mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Profile Overview</h2>
        <ul className="mt-4 text-gray-600">
          <li> <strong>Account:</strong> Upwork</li>
          <li> <strong>Skills:</strong> Reactjs, Django, Tailwindcss</li>
          <li> <strong>Job Success Score:</strong> 70%</li>
        </ul>
      </div>

      {/* Actionable Tips */}
      <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-all mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Quick Tips to Boost Your Profile</h2>
        <ul className="mt-4 text-gray-600">
          <li>Optimize your profile picture and description to attract more clients.</li>
          <li>Update your skills regularly to stay relevant in job trends.</li>
          <li>Respond quickly to job invitations to increase your chances of success.</li>
        </ul>
      </div>
    </div>
  );
};

export default MainDashboard;
