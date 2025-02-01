import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const [url, setUrl] = useState('');
  const [submittedUrls, setSubmittedUrls] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (url.trim()) {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/v1/accounts/scrape-profile/', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            "Authorization" : `Bearer ${localStorage.getItem('accessToken')}`
          },
          body: JSON.stringify({url}),
        });
        const data = await response.json();
        if (data.success) {
          setSubmittedUrls([...submittedUrls, url]);
            localStorage.setItem('user', JSON.stringify(data.user));
            console.log(data.user)
          navigate(`/profile`);
        } else {
          console.error('Error:', data);
        }
      } catch (error) {
        console.error('Request failed', error);
      }
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Add Upwork profile public Links</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="url" className="block text-sm font-medium text-gray-700">
            Social Media URL
          </label>
          <input
            type="url"
            id="url"
            name="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-2 px-4 rounded-md  hover:bg-gray-800 transition duration-200"
        >
          Add URL
        </button>
      </form>

      
    </div>
  );
};

export default Account;