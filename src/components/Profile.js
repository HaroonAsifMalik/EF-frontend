import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState({
    id: null,
    name: '',
    email: '',
    phone: '',
    bio: '',
    image: '',
  });
  const [isEditing, setIsEditing] = useState(false);

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
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        <div>
          <img
            src={profile.image}
            alt={profile.name}
            className="w-32 h-32 object-cover mb-4 rounded-full"
          />
          {isEditing ? (
            <>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="border rounded px-2 py-1 mb-2 w-full"
              />
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="border rounded px-2 py-1 mb-2 w-full"
              />
              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleInputChange}
                placeholder="Phone"
                className="border rounded px-2 py-1 mb-2 w-full"
              />
              <textarea
                name="bio"
                value={profile.bio}
                onChange={handleInputChange}
                placeholder="Bio"
                className="border rounded px-2 py-1 mb-2 w-full"
              />
              <input
                type="text"
                name="image"
                value={profile.image}
                onChange={handleInputChange}
                placeholder="Image URL"
                className="border rounded px-2 py-1 mb-2 w-full"
              />
              <button
                onClick={handleSaveProfile}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              >
                Save
              </button>
            </>
          ) : (
            <>
              <h2 className="text-lg font-bold">{profile.name}</h2>
              <p className="text-gray-600">{profile.email}</p>
              <p className="text-gray-600">{profile.phone}</p>
              <p className="text-gray-600">{profile.bio}</p>
              <a
                href={profile.image}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {profile.image}
              </a>
              <button
                onClick={() => setIsEditing(true)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              >
                Edit
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};


export default Profile;
