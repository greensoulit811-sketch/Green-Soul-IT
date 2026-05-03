
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Quote } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import { fetchServices, fetchCaseStudies, fetchTestimonials } from '../services/api';
import { Service, CaseStudy, Testimonial } from '../types';

import ImageCollection from './ImageCollection';
import VideoSection from '@/components/VideoSection';

const Home: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    fetchServices().then(data => setServices(data.slice(0, 3)));
    fetchCaseStudies().then(setCaseStudies);
    fetchTestimonials().then(setTestimonials);
  }, []);

  useEffect(() => {
    if (testimonials.length === 0) return;
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials]);

  return (
    <div className="flex flex-col w-full">
      <HeroSlider />

      <VideoSection></VideoSection>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-green-500 font-bold tracking-widest uppercase text-sm mb-3">What We Offer</h2>
            <h3 className="text-4xl font-bold text-gray-900">Our Premium Services</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service) => (
              <div key={service.id} className="group bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-56 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold mb-4 group-hover:text-green-500 transition-colors">{service.title}</h4>
                  <p className="text-gray-600 mb-6 line-clamp-2">{service.description}</p>
                  <Link to={`/services/${service.slug}`} className="inline-flex items-center text-green-500 font-bold hover:translate-x-2 transition-transform">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="inline-block border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-8 py-3 rounded-full font-bold transition-all">
              View All Services
            </Link>
          </div>
        </div>
      </section>

    

    <ImageCollection></ImageCollection>




      {/* Case Studies */}
<section className="py-24 bg-green-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
      <div>
        <h2 className="text-green-500 font-bold tracking-widest uppercase text-sm mb-3">Our Work</h2>
        <h3 className="text-4xl font-bold text-gray-900">Recent Case Studies</h3>
      </div>
      <Link to="/case-studies" className="mt-4 md:mt-0 text-green-500 font-bold hover:underline flex items-center">
        See more projects <ArrowRight className="ml-1 w-4 h-4" />
      </Link>
    </div>

    {/* Grid for Case Studies */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Case Study 1 */}
      <div className="bg-white rounded-3xl overflow-hidden  duration-300">
        <div className="w-full h-64 overflow-hidden">
          <img
            src="https://www.suryainformatics.com/wp-content/uploads/2023/12/wp3950068.jpg"
            alt="Digital Marketing Strategy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="p-8 flex flex-col justify-center">
          <span className="text-green-500 font-bold text-sm mb-2">Digital Strategy</span>
          <h4 className="text-2xl font-bold mb-4">Social Media Campaign </h4>
          <p className="text-gray-600 text-base mb-6">
            Boosted engagement and lead generation by 70% using data-driven social media strategies across Instagram and LinkedIn.
          </p>
          <button className="self-start bg-green-600 text-white px-6 py-2 rounded-full font-bold hover:bg-green-500 transition-colors">
            Read Case Study
          </button>
        </div>
      </div>

      {/* Case Study 2 */}
      <div className="bg-white rounded-3xl overflow-hidden  duration-300">
        <div className="w-full h-64 overflow-hidden">
          <img
            src="https://virtuonai.com/assets/images/seo.webp"
            alt="SEO Optimization"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="p-8 flex flex-col justify-center">
          <span className="text-green-500 font-bold text-sm mb-2">SEO & Analytics</span>
          <h4 className="text-2xl font-bold mb-4">Organic Traffic Growth</h4>
          <p className="text-gray-600 text-base mb-6">
            Increased website visits by 200% in 6 months through advanced SEO optimization, content marketing.
          </p>
          <button className="self-start bg-green-500 text-white px-6 py-2 rounded-full font-bold hover:bg-green-500 transition-colors">
            Read Case Study
          </button>
        </div>
      </div>

      {/* Case Study 3 */}
      <div className="bg-white rounded-3xl overflow-hidden  duration-300">
        <div className="w-full h-64 overflow-hidden">
          <img
            src="https://timesinternet.in/blog/wp-content/uploads/2023/12/Shutterstock_1814591309.jpg"
            alt="Email & Content Marketing"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="p-8 flex flex-col justify-center">
          <span className="text-green-500 font-bold text-sm mb-2">Email Marketing</span>
          <h4 className="text-2xl font-bold mb-4">Lead Conversion Funnel</h4>
          <p className="text-gray-600 text-base mb-6">
            Implemented automated email campaigns and content funnels, increasing lead conversions by 45% within 3 months.
          </p>
          <button className="self-start bg-green-500 text-white px-6 py-2 rounded-full font-bold hover:bg-green-500 transition-colors">
            Read Case Study
          </button>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Quote className="absolute top-0 left-0 w-32 h-32 text-gray-50 -z-10" />
          <div className="text-center mb-16">
            <h2 className="text-green-500 font-bold tracking-widest uppercase text-sm mb-3">Clients Say</h2>
            <h3 className="text-4xl font-bold text-gray-900">Customer Success Stories</h3>
          </div>

          <div className="relative h-96">
            {testimonials.map((t, idx) => (
              <div
                key={t.id}
                className={`absolute inset-0 transition-all duration-1000 transform ${idx === activeTestimonial ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20 pointer-events-none'}`}
              >
                <div className="max-w-3xl mx-auto text-center">
                  <div className="flex justify-center space-x-1 mb-8">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-6 h-6 fill-green-500 text-green-500" />)}
                  </div>
                  <p className="text-2xl italic text-gray-700 mb-10 leading-relaxed">"{t.feedback}"</p>
                  <div className="flex flex-col items-center">
                    <img src={t.photo} alt={t.name} className="w-20 h-20 rounded-full object-cover border-4 border-green-100 mb-4" />
                    <h5 className="text-xl font-bold">{t.name}</h5>
                    <p className="text-gray-500">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeTestimonial ? 'bg-green-500 w-8' : 'bg-gray-200'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-400/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl -ml-48 -mb-48"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h3 className="text-3xl md:text-5xl font-bold text-black mb-8">Ready to Scale Your Business?</h3>
          <p className="text-black/80 text-xl mb-10 max-w-2xl mx-auto">Join hundreds of successful companies growing with our data-driven strategies.</p>
          <Link to="/contact" className="bg-white text-green-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 shadow-xl transition-all inline-block">
            Start Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
