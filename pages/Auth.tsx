import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  User as UserIcon,
  LogIn,
  UserPlus,
  Loader2,
  X,
} from "lucide-react";
import { loginUser, registerUser } from "../services/api";

interface AuthProps {
  onLoginSuccess: (user: any) => void;
}

const Auth: React.FC<AuthProps> = ({ onLoginSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [regData, setRegData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // LOGIN
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const user = await loginUser(loginData.email, loginData.password);
      onLoginSuccess(user);
      navigate("/");
    } catch {
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  // REGISTER
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const user = await registerUser(
        regData.name,
        regData.email,
        regData.password
      );
      onLoginSuccess(user);
      setIsRegisterOpen(false);
      navigate("/");
    } catch {
      setError("Registration failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-10 rounded-2xl shadow-xl border">

        {/* LOGIN HEADER */}
        <h2 className="text-center text-3xl font-extrabold text-gray-900 flex items-center justify-center">
          <LogIn className="mr-2 text-green-500" /> Login
        </h2>

        {error && (
          <div className="mt-4 bg-red-50 text-red-600 p-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        {/* LOGIN FORM */}
        <form className="mt-8 space-y-5" onSubmit={handleLogin}>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              required
              placeholder="Email address"
              className="w-full px-12 py-3 border rounded-lg focus:ring-green-500 focus:border-green-500"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              required
              placeholder="Password"
              className="w-full px-12 py-3 border rounded-lg focus:ring-green-500 focus:border-green-500"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg text-white font-bold bg-green-500 hover:bg-green-600 transition"
          >
            {loading ? <Loader2 className="mx-auto animate-spin" /> : "Sign In"}
          </button>
        </form>

        {/* REGISTER BUTTON */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?
        </p>

        <button
          onClick={() => setIsRegisterOpen(true)}
          className="mt-2 w-full py-3 rounded-lg font-bold border border-gray-300 hover:bg-gray-100 flex items-center justify-center"
        >
          <UserPlus className="mr-2" /> Create Account
        </button>
      </div>

      {/* REGISTER MODAL */}
      {isRegisterOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md p-8 rounded-2xl relative">

            <button
              onClick={() => setIsRegisterOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X />
            </button>

            <h2 className="text-2xl font-extrabold text-center mb-6 flex justify-center items-center">
              <UserPlus className="mr-2 text-green-500" /> Register
            </h2>

            <form className="space-y-4" onSubmit={handleRegister}>
              <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  className="w-full px-12 py-3 border rounded-lg"
                  value={regData.name}
                  onChange={(e) =>
                    setRegData({ ...regData, name: e.target.value })
                  }
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full px-12 py-3 border rounded-lg"
                  value={regData.email}
                  onChange={(e) =>
                    setRegData({ ...regData, email: e.target.value })
                  }
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  required
                  placeholder="Password"
                  className="w-full px-12 py-3 border rounded-lg"
                  value={regData.password}
                  onChange={(e) =>
                    setRegData({ ...regData, password: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg bg-gray-800 text-white font-bold hover:bg-gray-900"
              >
                {loading ? (
                  <Loader2 className="mx-auto animate-spin" />
                ) : (
                  "Register"
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Auth;
