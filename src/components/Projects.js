import React, { useState, useEffect } from 'react';

const Projects = () => {
  // State to hold project data, loading status, and error state
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching project data from the backend API
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/v1/ai_textgen/jobs/');
        const data = await response.json();

        if (data.status === 'success') {
          setProjects(data.jobs);
        } else {
          setError('Failed to load projects');
        }
      } catch (error) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    // Loading spinner or message
    return (
      <div className="p-6 bg-gray-100 text-black flex justify-center items-center">
        <p>Loading projects...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-gray-100 text-black flex justify-center items-center">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 text-black flex flex-col space-y-6">
      <h1 className="text-2xl font-bold">Projects</h1>
      {projects.length > 0 ? (
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold text-gray-800">{project.title}</h2>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <div className="mt-4">
                <p>
                  <strong>Posted:</strong> {project.posted_date}
                </p>
                <p>
                  <strong>Price:</strong> {project.est_budget}
                </p>
                <p>
                  <strong>Time Taken:</strong> {project.fixed_price}
                </p>
                <div className="mt-2">
                  <strong>Tags:</strong>{' '}
                  <span className="flex flex-wrap gap-2 mt-1">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No projects available.</p>
      )}
    </div>
  );
};

export default Projects;
