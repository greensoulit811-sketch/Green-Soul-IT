import React, { useEffect, useState } from 'react';
import { fetchTeam } from '../services/api';
import { TeamMember } from '../types';

const About: React.FC = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  useEffect(() => {
    fetchTeam().then(setTeam);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedMember]);

  return (
    <div className="pb-24">

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-in fade-in slide-in-from-left-8 duration-700">
            <h2 className="text-3xl sm:text-5xl font-bold mb-8 text-gray-900">
              Our Story & <span className="text-green-500">Vision</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Founded in 2020, <span className='text-green-600 font-bold'>Green Soul IT</span> started with a simple mission: to help businesses navigate the complex digital landscape with transparency and results-driven strategies.
              </p>
              <p>
                Today, we are a team of passionate digital experts, designers, and developers dedicated to scaling brands globally. We believe that every business has a unique story, and our job is to tell it to the right audience using the most advanced digital tools.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <h4 className="text-4xl font-bold text-green-500 mb-2">150+</h4>
                  <p className="text-sm font-bold text-gray-500 uppercase">Projects Completed</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-green-500 mb-2">95%</h4>
                  <p className="text-sm font-bold text-gray-500 uppercase">Client Retention</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative animate-in fade-in slide-in-from-right-8 duration-700">
            <img 
              src="https://curiositygym.com/wp-content/uploads/2022/05/DM1.jpg" 
              alt="Office collab" 
              className="rounded-3xl shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-green-500/20 rounded-3xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-gray-200 rounded-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Team Section */}
 <section className="py-24 bg-gradient-to-br from-white via-green-50 to-emerald-50 relative overflow-hidden">

  {/* Soft Background Glow */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-200/40 rounded-full blur-3xl"></div>
  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-green-600 font-bold tracking-widest uppercase text-sm mb-3">
        The People
      </h2>
      <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900">
        Meet Our Expert Team
      </h3>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        A dedicated team of creatives, strategists, and marketers focused on
        growing your brand with measurable results.
      </p>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

      {team.slice(0, 5).map((member) => (
        <div
          key={member.id}
          onClick={() => setSelectedMember(member)}
          className="group cursor-pointer transition duration-500 hover:-translate-y-2"
        >

          {/* Light Glass Card */}
          <div className="backdrop-blur-lg bg-white/60 border border-white/70 
                          rounded-3xl shadow-md hover:shadow-2xl 
                          transition duration-500 overflow-hidden">

            {/* Image */}
            <div className="relative bg-white/40 flex items-center justify-center p-6">
              <img
                src={member.photo}
                alt={member.name}
                className="max-h-80 w-auto object-contain transition duration-500 group-hover:scale-105"
              />

              {/* Role badge */}
              <div className="absolute top-4 left-4 backdrop-blur-md bg-green-500/90 
                              text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                {member.role}
              </div>
            </div>

            {/* Content */}
            <div className="text-center px-6 py-6">
              <h4 className="text-xl font-bold text-gray-900">
                {member.name}
              </h4>

              <p className="text-gray-500 text-sm mt-1">
                {member.company}
              </p>

              {/* Fancy Divider */}
              <div className="w-16 h-[3px] bg-gradient-to-r from-green-500 to-emerald-400 
                              mx-auto mt-4 rounded-full opacity-80"></div>

              <p className="mt-4 text-sm text-gray-600 opacity-80 group-hover:opacity-100 transition">
                View Profile →
              </p>
            </div>

          </div>
        </div>
      ))}

    </div>

    {/* Bottom CTA */}
    <div className="text-center mt-20">
      <p className="text-gray-600 text-lg">
        Want to work with us?
      </p>

      <button className="mt-6 px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 
                         text-white font-semibold rounded-full shadow-lg 
                         hover:shadow-xl hover:scale-105 transition duration-300">
        Join Our Team
      </button>
    </div>

  </div>
</section>
      {/* Modal for Member Details */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 relative">
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
              onClick={() => setSelectedMember(null)}
            >&times;</button>
            <div className="text-center">
              <img 
                src={selectedMember.photo} 
                alt={selectedMember.name} 
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover" 
              />
              <h4 className="text-2xl font-bold mb-1">{selectedMember.name}</h4>
              <p className="text-green-600 font-medium mb-1">{selectedMember.role}</p>
              <p className="text-gray-500 text-sm mb-2">{selectedMember.company}</p>
              <p className="text-gray-600 text-sm">{selectedMember.details}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
