import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Star, Target } from "lucide-react";

const VideoSection: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT SIDE - VIDEO (Restored to original style) */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl border-8 border-gray-50">
              <video
                className="w-full"
                controls
                muted
                loop
                playsInline
              >
                <source src="https://res.cloudinary.com/dqvdj8rq6/video/upload/v1772610416/greebsoul_bvctkm.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* RIGHT SIDE - BEAUTIFUL CONTENT */}
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-xs font-bold w-fit mb-8 shadow-sm">
              <Target className="w-4 h-4" />
              DIGITAL STRATEGY & GROWTH
            </div>

            <h2 className="text-4xl md:text-5xl font-black leading-tight text-gray-900 mb-6">
              Grow Your Business With <br />
              <span className="text-green-600">Creative Digital Strategy</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We help brands transform their online presence using powerful 
              marketing strategies, high-converting ads, and visually stunning 
              content.
            </p>

            {/* Premium Feature List */}
            <div className="space-y-4 mb-10">
              {[
                "Measurable Growth & ROI Tracking",
                "High-Converting Ad Campaigns",
                "Visual Content That Captivates",
                "Building Long-Term Brand Authority"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Action Area with Social Proof */}
            <div className="flex flex-wrap items-center gap-8">
              <Link to="/contact" className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-green-600/20 transition-all flex items-center gap-2 active:scale-95">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <img 
                      key={i}
                      src={`https://i.pravatar.cc/100?img=${i + 45}`} 
                      className="w-11 h-11 rounded-full border-2 border-white object-cover shadow-sm"
                      alt="Client"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-bold text-gray-900">4.9/5</span>
                  </div>
                  <p className="text-xs text-gray-500 font-medium">500+ Happy Clients</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VideoSection;



