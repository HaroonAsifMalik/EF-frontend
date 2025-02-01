import React, { useState, useEffect } from "react";

const Profile = () => {
  const getInitialUser = () => {
    const storedUser = localStorage.getItem("user");
    return storedUser
      ? JSON.parse(storedUser)
      : {
          display_name: "",
          email: "",
          image: "", 
          accounts: [],
          badges: 0,
          contract_status: '',
          hour_rate: '',
          skills: [],
          categories: [],
          job_count: 0,
        };
  };

  const [user, setUser] = useState(getInitialUser());
  const [isEditing, setIsEditing] = useState(false);
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const fetchTips = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/v1/guidance/tips/"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch tips");
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
    setUser({ ...user, [name]: value });
  };

  const handleSkillsChange = (e) => {
    setUser({
      ...user,
      skills: e.target.value.split(",").map((skill) => skill.trim()),
    });
  };

  const handleCategoriesChange = (e) => {
    setUser({
      ...user,
      categories: e.target.value.split(",").map((category) => category.trim()),
    });
  };

  const handleSaveProfile = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/v1/accounts/profile/`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        }
      );
      const updatedProfile = await response.json();

      setUser(updatedProfile);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="flex-grow p-6 bg-gray-100 text-black">
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <div className="flex items-center mb-4">
          <img
            src={user.image || "/default-avatar.png"}
            alt="User"
            className="w-24 h-24 rounded-full mr-4"
          />
          <div>
            <h1 className="text-2xl font-bold">
              {isEditing ? (
                <input
                  type="text"
                  name="display_name"
                  value={user.display_name}
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
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-lg font-bold">Badges</h2>
            <p className="text-gray-600">{user.badges || "None"}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-lg font-bold">Contract status</h2>
            <p className="text-gray-600">{user.contract_status}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-lg font-bold">hour rate</h2>
            <p className="text-gray-600">{user.hour_rate}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-lg font-bold">Skills</h2>
            <p className="text-gray-600">{user.skills?.join(", ") || "No skills listed"}</p>

          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-lg font-bold">Categories</h2>
            <p className="text-gray-600">{user.categories?.join(", ") || "No categories listed"}</p>

          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-lg font-bold">Job Success Score</h2>
            <p className="text-gray-600">{user.job_count}%</p>
          </div>
        </div>
        {/* <button
          onClick={isEditing ? handleSaveProfile : () => setIsEditing(true)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          {isEditing ? "Save" : "Edit"}
        </button> */}
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
