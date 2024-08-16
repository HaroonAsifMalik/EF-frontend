import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen p-4 flex flex-col justify-between">
      <div>
        <div className="mb-8">
          <Link to='/'> LOGO</Link>   
        </div>
        <nav className="">
          <Link to="/dashboard" className="block py-2 px-4 bg-gray-800 hover:bg-gray-700">Dashboard</Link>
          <Link to="/add-project" className="block py-2 px-4 bg-gray-800 hover:bg-gray-700">Add Projects</Link>
          <Link to="/proposals" className="block py-2 px-4 bg-gray-800 hover:bg-gray-700">Proposals</Link>
          <Link to="/linkpage" className="block py-2 px-4 bg-gray-800 hover:bg-gray-700">Link Your Accounts</Link>
          <Link to="/profile" className="block py-2 px-4 bg-gray-800 hover:bg-gray-700">Profile</Link>
          <Link to="/settings" className="block py-2 px-4 bg-gray-800 hover:bg-gray-700">Settings</Link>
        </nav>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between px-4">
          <span>Dark mode</span>
          <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
        </div>
        <Link to="/help-support" className="block py-2 px-4 hover:bg-gray-800 rounded">Help/Support</Link>
        <Link to="/" className="block py-2 px-4 hover:bg-gray-800 rounded">Log out</Link>
      </div>
    </div>
  );
};

export default Sidebar;
