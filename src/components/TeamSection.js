import React from 'react';

function TeamSection() {
    const teamMembers = [
        {
          name: 'Sharon Santos',
          title: 'SEO Expert',
          image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          socialLinks: [
            {
              icon: 'fab fa-facebook-f',
              link: '#',
            },
            {
              icon: 'fab fa-twitter',
              link: '#',
            },
            {
              icon: 'fab fa-google-plus-g',
              link: '#',
            },
            {
              icon: 'fab fa-linkedin-in',
              link: '#',
            },
          ],
        },
        {
          name: 'Helen Stephens',
          title: 'Content Writer',
          image: 'https://images.unsplash.com/photo-1543132220-4bf3de6e10ae?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          socialLinks: [
            {
              icon: 'fab fa-facebook-f',
              link: '#',
            },
            {
              icon: 'fab fa-twitter',
              link: '#',
            },
            {
              icon: 'fab fa-google-plus-g',
              link: '#',
            },
            {
              icon: 'fab fa-linkedin-in',
              link: '#',
            },
          ],
        },
        {
          name: 'Harold Guerrero',
          title: 'Marketing',
          image: 'https://plus.unsplash.com/premium_photo-1664540415069-bc45ce3e711e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          socialLinks: [
            {
              icon: 'fab fa-facebook-f',
              link: '#',
            },
            {
              icon: 'fab fa-twitter',
              link: '#',
            },
            {
              icon: 'fab fa-google-plus-g',
              link: '#',
            },
            {
              icon: 'fab fa-linkedin-in',
              link: '#',
            },
          ],
        },
        {
          name: 'Amy Hall',
          title: 'CEO',
          image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          socialLinks: [
            {
              icon: 'fab fa-facebook-f',
              link: '#',
            },
            {
              icon: 'fab fa-twitter',
              link: '#',
            },
            {
              icon: 'fab fa-google-plus-g',
              link: '#',
            },
            {
              icon: 'fab fa-linkedin-in',
              link: '#',
            },
          ],
        },
      ];
    
      return (
        <div className="container mx-auto px-4 py-16">
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
