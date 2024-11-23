import React from 'react';
import './HeroHeader.css'

function HeroHeader() {
  return (
    <section
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(https://images.pexels.com/photos/15913108/pexels-photo-15913108.jpeg?cs=srgb&dl=pexels-marcin-jozwiak-199600-15913108.jpg&fm=jpg)' }}
    >
      <div className="container mx-auto p-4 pt-50 md:p-6 lg:p-12">
        <h1 style={{ paddingTop: '100px', paddingLeft: '50px'}} className="text-4xl font-bold text-white mb-4">
          <span className="span-txt one animate-fadeInUp">
            Transforing
          </span>
          <br />
          <span className="span-txt two animate-fadeInUp">
            Freelancing
          </span>
          <br />
          <span className="span-txt three animate-fadeInUp">
            Platforms with
          </span>
          <br />
          <span className="span-txt four animate-fadeInUp">
            auto-bidding
          </span>
        
        </h1>
      </div>
    </section>
  );
}

export default HeroHeader;
