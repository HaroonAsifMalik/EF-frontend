import React from 'react';
import Review from './ComponentsForComponents/Customer';
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
            <Review name = "John Doe" about = "CEO, ABC Company" description = " I've been using this platform for a while now and it has completely transformed the way I find freelancers. The auto bidding functionality is a game changer." />
            <Review name = "John Doe" about = "CEO, ABC Company" description = " I've been using this platform for a while now and it has completely transformed the way I find freelancers. The auto bidding functionality is a game changer." />
            <Review name = "John Doe" about = "CEO, ABC Company" description = " I've been using this platform for a while now and it has completely transformed the way I find freelancers. The auto bidding functionality is a game changer." />
            
            </div>
          </div>
        </section>
      );
}

export default TestimonialSection;
