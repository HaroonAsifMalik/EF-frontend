import React, { useState, useEffect } from 'react';

const Profile = () => {

  const getInitialUser = () => {
    const storedUser = localStorage.getItem('user');
    return storedUser
      ? JSON.parse(storedUser)
      : {
          display_name: '',
          email: '',
          accounts: [],
          badges: 0,
          rating: 0,
          response_time: 0,
          skills: [],
          categories: [],
          job_success_rate: 0,
        };
  };

  const [user, setUser] = useState(getInitialUser());
  const [isEditing, setIsEditing] = useState(false);
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the user profile data from the backend
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('https://your-backend-api.com/profile'); // Replace with your backend API endpoint
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  useEffect(() => {
    const fetchTips = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/v1/guidance/tips/');
        if (!response.ok) {
          throw new Error('Failed to fetch tips');
        }
        const data = await response.json();
        setTips(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTips();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSaveProfile = async () => {
    try {
      const response = await fetch(`https://your-backend-api.com/profile/${profile.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profile),
      });
      const updatedProfile = await response.json();

      // Update the frontend with the updated profile
      setProfile(updatedProfile);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="flex-grow p-6 bg-gray-100 text-black">
      <div className="bg-white p-6 rounded-lg shadow mb-6">


        <div className="flex items-center mb-4">
          <img src={user.image_url || '/default-avatar.png'} alt="User" className="w-24 h-24 rounded-full mr-4" />
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
                user.display_name
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
          {/* User Stats */}
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-lg font-bold">Badges</h2>
            <p className="text-gray-600">{user.badges|| 0}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-lg font-bold">Account</h2>
            <p className="text-gray-600">{user.accounts.join(', ')}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-lg font-bold">Ratings</h2>
            <p className="text-gray-600">{user.rating}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-lg font-bold">Response Time</h2>
            <p className="text-gray-600">{user.response_time}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-lg font-bold">Skills</h2>
            <p className="text-gray-600">
              {isEditing ? (
                <input
                  type="text"
                  value={user.skills.join(', ')}
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
                  value={user.categories.join(', ')}
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
            <p className="text-gray-600">{user.job_success_rate}%</p>
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
        {loading ? (
          <p>Loading tips...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="mt-4">
            {tips.map((tip, index) => (
              <div key={index} className="mb-4 p-4 bg-gray-100 rounded-lg">
                <h3 className="font-bold">{tip.title}</h3>
                <p className="text-sm text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};


export default Profile;
