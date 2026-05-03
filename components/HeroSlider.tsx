import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { fetchHeroSlider } from '../services/api';
import { useNavigate } from 'react-router-dom'; // <-- import useNavigate

interface Slide {
  id: string | number;
  image: string;
  title: string;
  subtitle: string;
}

const HeroSlider: React.FC = () => {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // <-- initialize navigate

  useEffect(() => {
    fetchHeroSlider().then(setSlides);
  }, []);

  useEffect(() => {
    if (slides.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const goToServices = () => {
    navigate('/services'); // <-- navigate to /services page
  };

  if (slides.length === 0) return <div className="h-[60vh] sm:h-[70vh] md:h-[80vh] bg-gray-100 flex items-center justify-center">Loading Hero...</div>;

  return (
    <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden group">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover transform scale-105" />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
            <div className="text-center text-white max-w-4xl">
              <h2 className={`text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 transition-all duration-1000 transform ${index === currentIndex ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                {slide.title}
              </h2>
              <p className={`text-base sm:text-lg md:text-2xl text-green-400 font-medium mb-6 sm:mb-8 transition-all duration-1000 delay-300 transform ${index === currentIndex ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                {slide.subtitle}
              </p>
              <div className={`transition-all duration-1000 delay-500 transform ${index === currentIndex ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
                <button
                  onClick={goToServices}
                  className="bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-3 rounded-full font-bold text-base sm:text-lg shadow-lg hover:shadow-green-500/20 active:scale-95 transition-all"
                >
                  Check Our Service
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button onClick={prevSlide} className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowLeft className="w-5 sm:w-6 h-5 sm:h-6" />
      </button>
      <button onClick={nextSlide} className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowRight className="w-5 sm:w-6 h-5 sm:h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-green-500 w-6 sm:w-8' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
