import React from 'react';

function TestimonialSection() {
    return (
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">What our customers say</h2>
              <p className="text-lg text-gray-600">
                Don't just take our word for it. Hear from our satisfied customers!
              </p>
            </div>
    
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    <img
                      src="https://picsum.photos/50"
                      alt="John Doe"
                      className="rounded-full w-10 h-10"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">John Doe</h4>
                    <p className="text-gray-600">CEO, ABC Company</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  I've been using this platform for a while now and it has
                  completely transformed the way I find freelancers. The auto
                  bidding functionality is a game changer.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    <img
                      src="https://picsum.photos/50"
                      alt="John Doe"
                      className="rounded-full w-10 h-10"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">John Doe</h4>
                    <p className="text-gray-600">CEO, ABC Company</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  I've been using this platform for a while now and it has
                  completely transformed the way I find freelancers. The auto
                  bidding functionality is a game changer.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    <img
                      src="https://picsum.photos/50"
                      alt="John Doe"
                      className="rounded-full w-10 h-10"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">John Doe</h4>
                    <p className="text-gray-600">CEO, ABC Company</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  I've been using this platform for a while now and it has
                  completely transformed the way I find freelancers. The auto
                  bidding functionality is a game changer.
                </p>
              </div>
    
              {/* Add more testimonials as needed */}
            </div>
          </div>
        </section>
      );
}

export default TestimonialSection;
