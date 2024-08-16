import React, { useState } from 'react';

const Settings = () => {
  const [settings, setSettings] = useState({
    enableNotifications: true,
    enableMFA: false,
    enableAutoSending: true,
    enableEmailUpdates: true,
    enableProfileVisibility: true,
    enableWeeklyReports: false,
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleTogglePassword = (type) => {
    switch (type) {
      case 'current':
        setShowCurrentPassword((prev) => !prev);
        break;
      case 'new':
        setShowNewPassword((prev) => !prev);
        break;
      case 'confirm':
        setShowConfirmPassword((prev) => !prev);
        break;
      default:
        break;
    }
  };

  const handleToggleChange = (e) => {
    const { name, checked } = e.target;
    setSettings({ ...settings, [name]: checked });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSettings({ ...settings, [name]: value });
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    // Handle password change logic here
    console.log('Password changed');
  };

  return (
    <div className="flex-grow p-6 bg-gray-100 text-black">
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Preferences</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-lg shadow">
              <span>Enable Notifications</span>
              <input
                type="checkbox"
                name="enableNotifications"
                checked={settings.enableNotifications}
                onChange={handleToggleChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
            </div>
            <div className="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-lg shadow">
              <span>Enable Multi-Factor Authentication (MFA)</span>
              <input
                type="checkbox"
                name="enableMFA"
                checked={settings.enableMFA}
                onChange={handleToggleChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
            </div>
            <div className="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-lg shadow">
              <span>Enable Auto-Sending Proposals</span>
              <input
                type="checkbox"
                name="enableAutoSending"
                checked={settings.enableAutoSending}
                onChange={handleToggleChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
            </div>
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Change Password</h2>
          <form onSubmit={handleChangePassword} className="bg-gray-50 p-6 rounded-lg shadow space-y-4">
            <div>
              <label htmlFor="currentPassword" className="block text-gray-700 font-semibold">
                Current Password
              </label>
              <div className="relative">
                <input
                  type={showCurrentPassword ? 'text' : 'password'}
                  id="currentPassword"
                  name="currentPassword"
                  value={settings.currentPassword}
                  onChange={handleInputChange}
                  className="border rounded px-4 py-2 w-full mt-1"
                />
                <button
                  type="button"
                  onClick={() => handleTogglePassword('current')}
                  className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                >
                  {showCurrentPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18.364 15.636a9 9 0 11-12.728 0 9 9 0 0112.728 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18.364 15.636a9 9 0 11-12.728 0 9 9 0 0112.728 0z"
                      />
                      <path d="M2 4L22 4M2 20l9.737-9.737m4.95 4.95L22 20" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            {/* Repeat similar structure for newPassword and confirmPassword */}
            {/* New Password */}
            <div>
              <label htmlFor="newPassword" className="block text-gray-700 font-semibold">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  id="newPassword"
                  name="newPassword"
                  value={settings.newPassword}
                  onChange={handleInputChange}
                  className="border rounded px-4 py-2 w-full mt-1"
                />
                <button
                  type="button"
                  onClick={() => handleTogglePassword('new')}
                  className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                >
                  {showNewPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18.364 15.636a9 9 0 11-12.728 0 9 9 0 0112.728 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18.364 15.636a9 9 0 11-12.728 0 9 9 0 0112.728 0z"
                      />
                      <path d="M2 4L22 4M2 20l9.737-9.737m4.95 4.95L22 20" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold">
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={settings.confirmPassword}
                  onChange={handleInputChange}
                  className="border rounded px-4 py-2 w-full mt-1"
                />
                <button
                  type="button"
                  onClick={() => handleTogglePassword('confirm')}
                  className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                >
                  {showConfirmPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18.364 15.636a9 9 0 11-12.728 0 9 9 0 0112.728 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18.364 15.636a9 9 0 11-12.728 0 9 9 0 0112.728 0z"
                      />
                      <path d="M2 4L22 4M2 20l9.737-9.737m4.95 4.95L22 20" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700"
            >
              Change Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};



export default Settings;