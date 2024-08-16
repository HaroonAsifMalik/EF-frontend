import React from "react";
;
export function AboutSection() {
    return (
       
            <div className="container mx-auto p-4">
              <h1 className="text-4xl font-bold mb-4">ABOUT US</h1>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1661963212517-830bbb7d76fc?q=80&w=2886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="About us"
                    className="rounded-lg"
                  />
                </div>
                <div className="md:w-1/2 p-4">
                  <p className="mb-4">
                    Hackney started as a small interior design firm in downtown
                    Michigan, aiming to help home buyers to make do with the new
                    space that they had acquired. It soon became obvious that it would
                    make sense to help our clients see beyond the walls and floor
                    plans, and be there with them from the get-go.
                  </p>
                  <p className="mb-4">
                    Currently, we offer house realtor, interior design, and architecture
                    services in order to help our customers find their forever homes as
                    seamlessly and painlessly as possible. We value our customers
                    above everything else, meaning that we won't take "OK" as an
                    answer.
                  </p>
                </div>
              </div>
            </div>
          );
        };
  
  export default AboutSection;