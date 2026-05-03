
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (location.pathname === '/') return null;

  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, ' ');

  return (
    <div className="relative h-48 sm:h-64 flex items-center overflow-hidden">
      {/* Blurred background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 transform hover:scale-105"
        style={{ backgroundImage: 'url(https://static.vecteezy.com/system/resources/thumbnails/072/497/787/small/a-single-white-daisy-with-a-yellow-center-stands-illuminated-against-a-dark-blue-and-green-ethereal-background-photo.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 animate-in fade-in slide-in-from-left-4 duration-500">
          {pathnames.length > 0 ? capitalize(pathnames[pathnames.length - 1]) : 'Page'}
        </h1>
        <nav className="flex text-white/80 text-sm font-medium items-center space-x-2 animate-in fade-in slide-in-from-left-6 duration-700">
          <Link to="/" className="hover:text-green-400 transition-colors">Home</Link>
          {pathnames.map((value, index) => {
            const last = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;

            return (
              <React.Fragment key={to}>
                <ChevronRight className="w-4 h-4 text-white/40" />
                {last ? (
                  <span className="text-green-400 font-bold">{capitalize(value)}</span>
                ) : (
                  <Link to={to} className="hover:text-green-400 transition-colors">
                    {capitalize(value)}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumbs;
