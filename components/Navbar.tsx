// src/components/Navbar.tsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X, User as UserIcon } from "lucide-react";

// ✅ fetchServices import path ঠিক করো:
import { fetchServices } from "../services/api"; 
// উদাহরণ: যদি file থাকে src/services/serviceApi.ts তাহলে:
// import { fetchServices } from "../services/serviceApi";

interface User {
  name: string;
}

interface NavbarProps {
  user: User | null;
  onLogout: () => void;
}

type Service = {
  id: string;
  title: string;
  slug: string;
};

const Navbar: React.FC<NavbarProps> = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate();

  // ✅ Services এখন API থেকে আসবে (slug mismatch হবে না)
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const data = await fetchServices();
        // শুধু title + slug লাগবে navbar এ
        const mapped = data.map((s: any) => ({
          id: s.id,
          title: s.title,
          slug: s.slug,
        }));
        setServices(mapped);
      } catch (e) {
        // fallback: empty থাকলেও navbar ভাঙবে না
        setServices([]);
      }
    };

    loadServices();
  }, []);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src="https://i.ibb.co/CsWG4pPh/Whats-App-Image-2026-01-27-at-6-26-53-PM.jpg"
              alt="Logo"
              className="h-14 w-auto rounded-md"
            />
            <span className="ml-2 text-xl font-medium text-gray-500 hidden sm:block group-hover:text-gray-800 transition">
              Digital Agency
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                className="flex items-center nav-link"
                onMouseEnter={() => setIsServicesOpen(true)}
              >
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>

              {isServicesOpen && (
                <div
                  className="absolute left-0 mt-2 w-80 bg-white shadow-xl rounded-lg py-2 z-50 max-h-96 overflow-y-auto"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {services.length === 0 ? (
                    <div className="px-4 py-2 text-sm text-gray-500">
                      No services found
                    </div>
                  ) : (
                    services.map((service) => (
                      <button
                        key={service.id}
                        // ✅ slug সরাসরি ডাটা থেকে নাও
                        onClick={() => navigate(`/services/${service.slug}`)}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                      >
                        {service.title}
                      </button>
                    ))
                  )}
                </div>
              )}
            </div>

            <Link to="/case-studies" className="nav-link">Case Studies</Link>
            <Link to="/invoice" className="nav-link">Payment</Link>
            <Link to="/contact" className="nav-link">Contact</Link>

            {/* Auth */}
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="flex items-center text-sm text-gray-600">
                  <UserIcon className="w-4 h-4 mr-1 text-green-500" />
                  {user.name}
                </span>
                <button
                  onClick={onLogout}
                  className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-100"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/auth"
                className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 pb-6 space-y-2">
          {["/", "/about", "/case-studies", "/blog", "/contact"].map((path, i) => (
            <Link
              key={i}
              to={path}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-gray-700"
            >
              {path === "/" ? "Home" : path.replace("/", "")}
            </Link>
          ))}

          {/* Mobile Services Dropdown */}
          <div className="border-t pt-2">
            <p className="text-gray-600 font-semibold mb-2">Services</p>

            {services.length === 0 ? (
              <p className="text-sm text-gray-500 px-2">No services found</p>
            ) : (
              services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => {
                    navigate(`/services/${service.slug}`);
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-2 py-1 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 rounded"
                >
                  {service.title}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;