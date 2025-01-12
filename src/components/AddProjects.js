import React, { useState, useEffect } from 'react';

const AddProjects = () => {
  const [projects, setProjects] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProject, setCurrentProject] = useState({
    id: null,
    image: '',
    title: '',
    description: '',
    languages: [],
    link: '',
  });

  // Fetch projects from backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://your-backend-api.com/projects'); // Replace with your backend API endpoint
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentProject({ ...currentProject, [name]: value });
  };

  const handleLanguagesChange = (e) => {
    setCurrentProject({ ...currentProject, languages: e.target.value.split(',') });
  };

  const handleAddProject = async () => {
    try {
      const response = await fetch('https://your-backend-api.com/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currentProject),
      });
      const newProject = await response.json();

      // Check if the backend successfully returned the new project
      if (newProject) {
        // Update the frontend with the newly added project
        setProjects([...projects, newProject]);
      }

      setCurrentProject({ id: null, image: '', title: '', description: '', languages: [], link: '' });
      setIsEditing(false);
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  const handleEditProject = (project) => {
    setCurrentProject(project);
    setIsEditing(true);
  };

  const handleSaveEditProject = async () => {
    try {
      const response = await fetch(`https://your-backend-api.com/projects/${currentProject.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currentProject),
      });
      const updatedProject = await response.json();

      setProjects(
        projects.map((project) =>
          project.id === updatedProject.id ? updatedProject : project
        )
      );
      setCurrentProject({ id: null, image: '', title: '', description: '', languages: [], link: '' });
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating project:', error);
    }
  };

  return (
    <div className="flex-grow p-6 bg-gray-100 text-black">
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h1 className="text-2xl font-bold mb-4">Projects</h1>
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-50 p-4 rounded-lg shadow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-32 object-cover mb-4 rounded-lg"
                />
                <h2 className="text-lg font-bold">{project.title}</h2>
                <p className="text-gray-600">{project.description}</p>
                <p className="text-gray-600">{project.languages.join(', ')}</p>
                <a
                  href={project.link}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.link}
                </a>
                <button
                  onClick={() => handleEditProject(project)}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                  Edit
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h2 className="text-gray-600">No projects available. Add your first project below!</h2>
          </div>
        )}
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-bold">{isEditing ? 'Edit Project' : 'Add Project'}</h2>
        <div className="mt-4">
          <input
            type="text"
            name="image"
            value={currentProject.image}
            onChange={handleInputChange}
            placeholder="Image URL"
            className="border rounded px-2 py-1 mb-2 w-full"
          />
          <input
            type="text"
            name="title"
            value={currentProject.title}
            onChange={handleInputChange}
            placeholder="Title"
            className="border rounded px-2 py-1 mb-2 w-full"
          />
          <input
            type="text"
            name="description"
            value={currentProject.description}
            onChange={handleInputChange}
            placeholder="Description"
            className="border rounded px-2 py-1 mb-2 w-full"
          />
          <input
            type="text"
            name="languages"
            value={currentProject.languages.join(', ')}
            onChange={handleLanguagesChange}
            placeholder="Languages (comma separated)"
            className="border rounded px-2 py-1 mb-2 w-full"
          />
          <input
            type="text"
            name="link"
            value={currentProject.link}
            onChange={handleInputChange}
            placeholder="Project Link"
            className="border rounded px-2 py-1 mb-2 w-full"
          />
          <button
            onClick={isEditing ? handleSaveEditProject : handleAddProject}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            {isEditing ? 'Save' : 'Add'}
          </button>
        </div>
      </div>
    </div>
  );
};


export default AddProjects;
