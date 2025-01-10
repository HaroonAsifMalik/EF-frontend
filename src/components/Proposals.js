import React from 'react';

const Proposals = () => {
  const proposals = [
    {
      title: 'Website Development Project',
      client: 'ABC Corp',
      budget: '$500 - $1000',
      proposal: 'I am excited to work on your project. I have 5+ years of experience in web development using React, Django, and more...',
      accuracy: 85,  // Accuracy percentage
      deadline: '2025-01-15',
      status: 'Pending',
    },
    {
      title: 'Mobile App Design',
      client: 'XYZ Ltd',
      budget: '$1000 - $2000',
      proposal: 'I have extensive experience designing user-friendly and visually appealing mobile apps. I am confident in meeting your requirements.',
      accuracy: 90,
      deadline: '2025-01-20',
      status: 'Pending',
    },
  ];

  return (
    <div className="p-6 bg-gray-100 text-black">
      <h1 className="text-2xl font-bold mb-4">Proposals</h1>
      {proposals.length > 0 ? (
        <div className="space-y-4">
          {proposals.map((proposal, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-bold">{proposal.title}</h2>
              <p className="text-gray-600">
                <strong>Client:</strong> {proposal.client} | <strong>Budget:</strong> {proposal.budget}
              </p>
              <p className="mt-2">{proposal.proposal}</p>
              <div className="mt-4">
                <p><strong>Proposal Accuracy:</strong> {proposal.accuracy}%</p>
                <p><strong>Deadline:</strong> {proposal.deadline}</p>
                <p><strong>Status:</strong> {proposal.status}</p>
              </div>
              <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">
                Send Proposal
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No proposals available.</p>
      )}
    </div>
  );
};

export default Proposals;
