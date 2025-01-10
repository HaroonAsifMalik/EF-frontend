import React from 'react';
import teamMembers from '../TeamMembers';

function TeamSection() {
    
      return (
        <div
  id="our-team" // Add this ID for smooth scrolling
  className="container mx-auto px-4 py-16"
>
  <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {teamMembers.map((member) => (
      <div key={member.name} className="rounded-lg shadow-md p-6 bg-white">
        <img
          src={member.image}
          alt={member.name}
          className="w-full rounded-full mb-4"
        />
        <h3 className="text-xl font-bold mb-2">{member.name}</h3>
        <p className="text-gray-600 mb-4">{member.title}</p>
        <div className="flex justify-center">
          {member.socialLinks.map((link) => (
            <a
              key={link.icon}
              href={link.link}
              className="text-gray-500 hover:text-blue-500 mx-2"
            >
              <i className={`fab ${link.icon} fa-lg`}></i>
            </a>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>

      );
    };

export default TeamSection;
