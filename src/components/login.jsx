import Logo from "../assets/LOGO.png";
import axios from "axios";
import { AuthContext } from "../context/ContextProvider";
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";

export default function Login() {
  const { admin, setAdmin } = useContext(AuthContext);
  const [login, setLogin] = useState({
    adminID: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const LoginUrl = "https://eat-right-server.onrender.com/app/signIn";

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const loginPayload = {
      adminID: login.adminID,
      password: login.password,
    };

    try {
      const response = await axios.post(LoginUrl, loginPayload, {
        withCredentials: true,
      });
      alert("You have successfully signed in");
      setAdmin(response.data.user);
    } catch (error) {
      console.error(error);
      alert("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  if (admin) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex min-h-full flex-1 flex-col bg-zinc-800 justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img alt="Eat Right" src={Logo} className="mx-auto h-20 w-auto" />
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-yellow-600">
          Sign in Admin account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleLogin} method="POST" className="space-y-6">
          <div>
            <label
              htmlFor="adminID"
              className="block text-sm font-medium text-yellow-600"
            >
              Admin ID
            </label>
            <div className="mt-2">
              <input
                id="adminID"
                name="adminID"
                value={login.adminID}
                onChange={(e) =>
                  setLogin({ ...login, adminID: e.target.value })
                }
                required
                placeholder="Enter Admin ID"
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-yellow-600"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-yellow-300 hover:text-white"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={login.password}
                onChange={(e) =>
                  setLogin({ ...login, password: e.target.value })
                }
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className={`flex w-full justify-center rounded-md bg-yellow-500 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
