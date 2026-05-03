import React from "react";

const VideoSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE - TEXT CONTENT */}
           <div className="space-y-6">

          
            
            {/* VIDEO */}
            <div className="overflow-hidden rounded-2xl shadow-lg border">
              <video
                className="w-full rounded-2xl"
                controls
                muted
                loop
              >
                <source src="https://res.cloudinary.com/dqvdj8rq6/video/upload/v1772610416/greebsoul_bvctkm.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

          </div>
            {/* RIGHT SIDE - IMAGE + VIDEO */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
              Grow Your Business With{" "}
              <span className="text-green-500">Creative Digital Strategy</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              We help brands transform their online presence using powerful 
              marketing strategies, high-converting ads, and visually stunning 
              content. Our team focuses on measurable growth, audience engagement, 
              and building long-term brand authority.
            </p>

            <p className="mt-4 text-gray-500">
              Watch our introduction video to discover how we turn ideas into 
              real results and scale businesses effectively in today's digital world.
            </p>

            <button className="mt-8 bg-green-500 text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:bg-green-600 transition">
              Get Started
            </button>
          </div>


        
         

        </div>
      </div>
    </section>
  );
};

export default VideoSection;