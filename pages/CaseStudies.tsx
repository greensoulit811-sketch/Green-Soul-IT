import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const caseStudies = [
  {
    id: '1',
    title: 'Social Media Campaign',
    description: 'Boosted engagement and lead generation by 70% using data-driven social media strategies across Instagram and LinkedIn.',
    image: 'https://www.suryainformatics.com/wp-content/uploads/2023/12/wp3950068.jpg',
    category: 'Digital Strategy',
    link: '/case-studies/1', // link to details page
  },
  {
    id: '2',
    title: 'Organic Traffic Growth',
    description: 'Increased website visits by 200% in 6 months through advanced SEO optimization and content marketing.',
    image: 'https://virtuonai.com/assets/images/seo.webp',
    category: 'SEO & Analytics',
    link: '/case-studies/2',
  },
  {
    id: '3',
    title: 'Lead Conversion Funnel',
    description: 'Implemented automated email campaigns and content funnels, increasing lead conversions by 45% within 3 months.',
    image: 'https://timesinternet.in/blog/wp-content/uploads/2023/12/Shutterstock_1814591309.jpg',
    category: 'Email Marketing',
    link: '/case-studies/3',
  },
];

const CaseStudies: React.FC = () => {
  return (
    <section className="py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-green-500 font-bold tracking-widest uppercase text-sm mb-3">
              Our Work
            </h2>
            <h3 className="text-4xl font-bold text-gray-900">Recent Case Studies</h3>
          </div>
          <a
            href="/case-studies"
            className="mt-4 md:mt-0 text-green-500 font-bold hover:underline flex items-center"
          >
            See more projects
            <ArrowUpRight className="ml-1 w-4 h-4" />
          </a>
        </div>

        {/* Grid for Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="group relative overflow-hidden rounded-3xl shadow-lg bg-white hover:shadow-2xl transition-shadow duration-500"
            >
              {/* Image */}
              <div className="w-full h-64 overflow-hidden relative">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <span className="text-green-500 font-bold text-sm mb-2 uppercase tracking-widest">
                    {study.category}
                  </span>
                  <h4 className="text-2xl font-bold mb-3">{study.title}</h4>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-4">
                    {study.description}
                  </p>
                </div>
                <a
                  href={study.link}
                  className="inline-flex items-center px-4 py-2 rounded-full font-bold text-sm bg-green-600 text-white hover:bg-green-500 transition-colors"
                >
                  View Details <ArrowUpRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
