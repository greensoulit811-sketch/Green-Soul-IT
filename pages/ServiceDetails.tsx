import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchServices } from "../services/api"; // ✅ তোমার path অনুযায়ী ঠিক করো
// যদি fetchServices অন্য জায়গায় থাকে, path change করবা

type Service = {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
};

const ServiceDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchServices();
        setServices(data);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-12">
        <p className="text-gray-600">Loading service details...</p>
      </div>
    );
  }

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800">Service Not Found</h2>
        <p className="text-gray-600 mt-2">
          এই slug এর কোন service পাওয়া যায়নি: <span className="font-semibold">{slug}</span>
        </p>
        <Link
          to="/"
          className="inline-block mt-6 bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600"
        >
          Back Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-start bg-white shadow-lg rounded-2xl p-6 md:p-10">
        {/* Image */}
        <div className="overflow-hidden rounded-xl border">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-72 md:h-full object-cover"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            {service.title}
          </h1>
          <p className="mt-4 text-gray-700 leading-relaxed">
            {service.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600"
            >
              Contact Us
            </Link>

            <Link
              to="/"
              className="bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200"
            >
              Back Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;