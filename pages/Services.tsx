import React, { useEffect, useMemo, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { fetchServices } from "../services/api";
import { Service } from "../types";
import { CheckCircle2, ArrowRight } from "lucide-react";

const Services: React.FC = () => {
  const { slug } = useParams<{ slug?: string }>();
  const navigate = useNavigate();

  const [services, setServices] = useState<Service[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getServices = async () => {
      try {
        setLoading(true);
        const data = await fetchServices();
        setServices(data);
      } catch (e) {
        console.error("Failed to load services:", e);
        setServices([]);
      } finally {
        setLoading(false);
      }
    };
    getServices();
  }, []);

  const activeService = useMemo(() => {
    if (!slug) return null;
    return services.find((s) => String(s.slug) === String(slug)) || null;
  }, [services, slug]);

  const goToService = (s: Service) => {
    navigate(`/services/${encodeURIComponent(s.slug)}`);
  };

  // Loading
  if (loading) {
    return (
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">Loading services...</p>
        </div>
      </div>
    );
  }

  // Invalid slug
  if (slug && !activeService) {
    return (
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Service not found
          </h2>
          <p className="text-gray-600 mb-8">
            এই সার্ভিসটা পাওয়া যায়নি। All Services এ ফিরে যান।
          </p>
          <Link
            to="/services"
            className="inline-flex bg-green-500 text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition-colors"
          >
            Back to All Services
          </Link>
        </div>
      </div>
    );
  }

  // Detail view
  if (activeService) {
    return (
      <div className="py-24 bg-white animate-in fade-in duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 mb-6">
            <Link
              to="/services"
              className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
            >
              All Services
            </Link>

            {services.map((service) => (
              <button
                key={service.id}
                className={`px-4 py-2 rounded-full font-medium ${
                  activeService.id === service.id
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-green-100"
                }`}
                onClick={() => goToService(service)}
                type="button"
              >
                {service.title}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <img
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-auto rounded-3xl shadow-2xl object-cover select-none"
                draggable={false}
              />
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[1, 2].map((i) => (
                  <img
                    key={i}
                    src={activeService.image}
                    alt={`${activeService.title} ${i}`}
                    className="rounded-2xl shadow-sm object-cover w-full h-48 select-none"
                    draggable={false}
                  />
                ))}
              </div>
            </div>

            <div>
              <span className="text-green-500 font-bold uppercase tracking-wider text-sm">
                Service Details
              </span>

              <h2 className="text-4xl font-bold mt-4 mb-8 text-gray-900">
                {activeService.title}
              </h2>

              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                {activeService.description}
              </p>

              <h4 className="text-xl font-bold mb-6">Key Benefits:</h4>

              <ul className="space-y-4 mb-10">
                {[
                  "Data-driven strategy tailored to your industry",
                  "Dedicated account manager for transparent comms",
                  "Advanced analytics and performance tracking",
                  "Continuous optimization for maximum ROI",
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <CheckCircle2 className="text-green-500 w-5 h-5 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-green-50 p-8 rounded-3xl border border-green-100 mb-10">
                <h5 className="text-lg font-bold mb-2">Ready to grow?</h5>
                <p className="text-gray-600 mb-6">
                  Schedule a free strategy call with our specialists today.
                </p>

                <Link
                  to="/services"
                  className="bg-green-500 text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition-colors inline-flex"
                >
                  Back to All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid view
  const displayedServices = showAll ? services : services.slice(0, 6);

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-green-500 font-bold tracking-widest uppercase text-sm mb-3">
            Expertise
          </h2>
          <h3 className="text-4xl font-bold text-gray-900">
            Solutions for Growth
          </h3>
        </div>

        {/* ✅ FINAL: whole card clickable (image সহ) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayedServices.map((service) => (
            <div
              key={service.id}
              role="button"
              tabIndex={0}
              onClick={() => goToService(service)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  goToService(service);
                }
              }}
              className="cursor-pointer group bg-white p-6 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {/* ✅ IMPORTANT: child elements click block করবে না */}
              <div className="flex flex-col h-full pointer-events-none">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover rounded-2xl mb-6 select-none"
                  draggable={false}
                />

                <h4 className="text-2xl font-bold mb-4 text-gray-900">
                  {service.title}
                </h4>

                <p className="text-gray-600 mb-6 line-clamp-3">
                  {service.description}
                </p>

                <span className="inline-flex items-center text-green-500 font-bold mt-auto">
                  Learn Details
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {!showAll && services.length > 6 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="bg-green-500 text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition-colors"
              type="button"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;