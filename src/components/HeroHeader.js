import React from 'react';

function HeroHeader() {
  return (
    <section className="h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://fastly.picsum.photos/id/679/2000/1000.jpg?hmac=CbYBm8U2P-MeCwM9Lsioobgul4hwnHkLXKfJ11JRnls)' }}>
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <h1 className="text-4xl font-bold text-white mb-4">Transforming Freelancer Platforms with Auto Bidding</h1>
        <p className="text-xl text-gray-200 mb-8">Effortlessly streamline your bidding process and win more projects.</p>
        <div className="flex justify-center mb-8">
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Get Started</button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded ml-4">Learn More</button>
        </div>
        {/* <div className="flex justify-center">
          <img src="https://picsum.photos/100/100" alt="Hero Image" className="w-24 h-24 rounded-full" />
        </div> */}
      </div>
    </section>
  );
}

export default HeroHeader;
