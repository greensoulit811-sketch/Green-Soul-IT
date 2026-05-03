
import React, { useEffect, useState } from 'react';
import { fetchBlogs } from '../services/api';
import { Blog } from '../types';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetchBlogs().then(setBlogs);
  }, []);

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogs.map((blog, idx) => (
            <article 
              key={blog.id} 
              className="flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="relative h-64 overflow-hidden rounded-3xl mb-8">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="flex items-center space-x-4 text-gray-400 text-sm mb-4">
                <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {blog.date}</span>
                <span className="flex items-center"><User className="w-4 h-4 mr-1" /> By Admin</span>
              </div>
              <h4 className="text-2xl font-bold mb-4 hover:text-green-500 transition-colors cursor-pointer">{blog.title}</h4>
              <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">{blog.summary}</p>
              <button className="self-start text-green-500 font-bold flex items-center hover:translate-x-2 transition-transform">
                Read Full Article <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
