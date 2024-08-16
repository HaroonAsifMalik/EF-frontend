import React, { useState } from 'react';

const Profile = () => {
  const initialUser = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: '/images/user.jpg',
    badges: 3,
    accountType: 'Upwork',
    ratings: 12,
    responseTime: '1 hour',
    skills: ['Reactjs', 'Django', 'TailwindCSS'],
    categories: ['Web Development'],
    jobSuccessScore: 70,
  };

  const tips = [
    {
      title: 'Unknown Infostealer Data - 520 Records',
      description: 'Lorem ipsum dolor sit amet consectetur. Mattis neque.',
    },
    {
      title: 'Enhance Your Profile with a Professional Headline',
      description: 'Lorem ipsum dolor sit amet consectetur. Mattis neque.',
    },
    {
      title: 'Add Relevant Skills to Your Profile',
      description: 'Lorem ipsum dolor sit amet consectetur. Mattis neque.',
    },
  ];

  const [user, setUser] = useState(initialUser);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSkillsChange = (e) => {
    setUser({ ...user, skills: e.target.value.split(',') });
  };

  const handleCategoriesChange = (e) => {
    setUser({ ...user, categories: e.target.value.split(',') });
  };

  return (
    <div className="flex-grow p-6 bg-gray-100 text-black">
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <div className="flex items-center mb-4">
          <img src={user.avatar} alt="User" className="w-24 h-24 rounded-full mr-4" />
          <div>
            <h1 className="text-2xl font-bold">
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleInputChange}
                  className="border rounded px-2"
                />
              ) : (
                user.name
              )}
            </h1>
            <p className="text-gray-600">
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleInputChange}
                  className="border rounded px-2"
                />
              ) : (
                user.email
              )}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-lg font-bold">Badges</h2>
            <p className="text-gray-600">{user.badges}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-lg font-bold">Account</h2>
            <p className="text-gray-600">{user.accountType}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-lg font-bold">Ratings</h2>
            <p className="text-gray-600">{user.ratings}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-lg font-bold">Response Time</h2>
            <p className="text-gray-600">{user.responseTime}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-lg font-bold">Skills</h2>
            <p className="text-gray-600">
              {isEditing ? (
                <input
                  type="text"
                  value={user.skills.join(',')}
                  onChange={handleSkillsChange}
                  className="border rounded px-2"
                />
              ) : (
                user.skills.join(', ')
              )}
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-lg font-bold">Categories</h2>
            <p className="text-gray-600">
              {isEditing ? (
                <input
                  type="text"
                  value={user.categories.join(',')}
                  onChange={handleCategoriesChange}
                  className="border rounded px-2"
                />
              ) : (
                user.categories.join(', ')
              )}
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-lg font-bold">Job Success Score</h2>
            <p className="text-gray-600">{user.jobSuccessScore}%</p>
          </div>
        </div>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-bold">Tips to Enhance Profile</h2>
        <div className="mt-4">
          {tips.map((tip, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-100 rounded-lg">
              <h3 className="font-bold">{tip.title}</h3>
              <p className="text-sm text-gray-600">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
