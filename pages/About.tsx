import React, { useEffect, useState } from 'react';
import { fetchTeam } from '../services/api';
import { TeamMember } from '../types';

const SocialIcon = ({ type, link }: { type: string, link?: string }) => (
  <a 
    href={link || '#'} 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-white/60 hover:text-white transition-colors cursor-pointer"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      {type === 'linkedin' && <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>}
      {type === 'twitter' && <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>}
      {type === 'github' && <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>}
      {type === 'facebook' && <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>}
    </svg>
  </a>
);

const TeamCard = ({ member, onClick }: { member: TeamMember, onClick: () => void }) => (
  <div 
    onClick={onClick}
    className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-lg group cursor-pointer border-2 border-white/5 transition-all duration-500 hover:scale-[1.02]"
  >
    {/* Base Image */}
    <img src={member.photo} alt={member.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
    
    {/* Constant Bottom Gradient (for name readability like the image) */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
    
    {/* Hover Details Overlay */}
    <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/40 backdrop-blur-[2px]">
       <div className="mb-16 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
         <div className="flex items-center gap-2 mb-2">
           <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
           <span className="text-white text-[10px] font-black uppercase tracking-widest">{member.role}</span>
         </div>
         <p className="text-white/80 text-xs leading-relaxed line-clamp-4">{member.details}</p>
         <div className="flex gap-3 mt-4">
            {member.facebook && <SocialIcon type="facebook" link={member.facebook} />}
            {member.linkedin && <SocialIcon type="linkedin" link={member.linkedin} />}
            {member.twitter && <SocialIcon type="twitter" link={member.twitter} />}
            {member.github && <SocialIcon type="github" link={member.github} />}
         </div>
       </div>
    </div>

    {/* Name - Always Visible at the bottom like the image */}
    <div className="absolute bottom-6 left-6 right-6 z-20">
      <h4 className="text-white text-lg font-bold leading-tight drop-shadow-2xl">{member.name}</h4>
    </div>
  </div>
);

const About: React.FC = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetchTeam().then(setTeam);
  }, []);

  // Limit members to 8 initially unless showAll is true
  const visibleTeam = showAll ? team : team.slice(0, 8);

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
                Founded in 2020, <span className="text-green-600 font-bold">Green Soul IT</span> started with a simple mission: to help businesses navigate the complex digital landscape with transparency and results-driven strategies.
              </p>
              <p>
                Today, we are a team of passionate digital experts, designers, and developers dedicated to scaling brands globally.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://curiositygym.com/wp-content/uploads/2022/05/DM1.jpg" 
              alt="Office collab" 
              className="rounded-3xl shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-green-500/20 rounded-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Website Solutions Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://img.freepik.com/free-vector/website-setup-concept-illustration_114360-4256.jpg" 
                  alt="Premium Website Solutions" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div>
              <h2 className="text-green-600 font-bold tracking-widest uppercase text-sm mb-4">Our Digital Craftsmanship</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">Building Websites That <span className="text-green-600">Accelerate Growth</span></h3>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">We combine aesthetic excellence with technical perfection to create websites that scale your business.</p>
            </div>
          </div>
        </div>
      </section>

        {/* Founder Hero Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-white rounded-xl shadow-[0_30px_100px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col md:flex-row items-stretch">
              {/* Founder Image Side */}
              <div className="md:w-[45%] relative min-h-[450px]">
                <img 
                  src="/tareque.jpg" 
                  alt="Founder" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-bold mb-3">Tareque Mahmud (CEO & Founder)</h3>
                  <div className="flex gap-3 opacity-80">
                    <SocialIcon type="facebook" link="https://facebook.com/tarequemahmud" />
                    <SocialIcon type="linkedin" link="https://linkedin.com/in/tarequemahmud" />
                    <SocialIcon type="twitter" link="https://twitter.com/tareque" />
                  </div>
                </div>
              </div>
              
              {/* Founder Message Side */}
              <div className="md:w-[55%] p-12 md:p-16 flex flex-col justify-center bg-white">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">A Message From</span>
                <h4 className="text-3xl font-black text-gray-900 mb-8 leading-tight">
                  <span className="text-green-500">Our Guiding Visionary</span>
                </h4>
                <p className="text-gray-500 italic text-lg leading-relaxed mb-10">
                  "We're building the future of digital experiences. Join us on this exciting journey as we push the boundaries of what's possible."
                </p>
                <div className="w-16 h-1 bg-blue-600"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Banner Section */}
        <section className="py-6 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="relative h-[200px] rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200" 
                alt="Team Banner" 
                className="w-full h-full object-cover brightness-[0.5]"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-5xl md:text-7xl font-black text-white tracking-widest opacity-90">OUR TEAM</h2>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: The Collective (Static Grid) */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16 text-center">
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-4">
                Meet Our <span className="text-green-500">Team</span>
              </h3>
              <p className="text-gray-400 text-sm font-medium max-w-xl mx-auto">
                The brilliant minds behind our success. Hover over each member to discover their role and passion.
              </p>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {visibleTeam.map((member) => (
                <TeamCard key={member.id} member={member} onClick={() => setSelectedMember(member)} />
              ))}
            </div>
            
            {/* View All / Show Less Button - Only show if there are more than 8 members */}
            {team.length > 8 && (
              <div className="mt-16 text-center">
                <button 
                  onClick={() => setShowAll(!showAll)}
                  className="px-8 py-3 bg-green-600 rounded-lg font-bold text-white font-bold  hover:bg-green-700 transition-all duration-300 uppercase tracking-widest text-[12px] shadow-lg"
                >
                  {showAll ? 'Show Less' : 'View All'}
                </button>
              </div>
            )}
          </div>
        </section>

      {/* Modal for Member Details */}
      {selectedMember && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden relative shadow-2xl scale-in-center">
            <button onClick={() => setSelectedMember(null)} className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="grid md:grid-cols-2">
              <div className="aspect-[4/5] bg-gray-100">
                <img src={selectedMember.photo} alt={selectedMember.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-green-600 font-bold uppercase tracking-wider text-sm mb-2">{selectedMember.role}</span>
                <h3 className="text-3xl font-black text-gray-900 mb-4">{selectedMember.name}</h3>
                <p className="text-gray-600 leading-relaxed mb-8">{selectedMember.details}</p>
                <div className="flex gap-4">
                  <button className="bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-700 transition-all duration-300">Connect</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
