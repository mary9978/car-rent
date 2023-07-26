
import Layout from './Layout';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { userAuth } from "../context/AuthContext"; 
function Login() {
  const {  logIn } = userAuth("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
      const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
        try {
          await logIn(email, password);
          navigate("/");
        } catch (error) {
          setError(error.message);
        }
      };
    return (
      <Layout>
        <div className="w-full h-screen bg-borderColor">
          <div className="bg-black-60 fixed top-0 left-0 w-full h-screen"></div>
          <div className="absolute w-full px-4 py-24 z-50">
            <div className="max-w-[450px] h-[600px]  mx-auto shadow-lg rounded-lg bg-blue-200 text-blue-500">
              <div className="max-w-[320px] mx-auto py-16">
                <h1 className="text-3xl font-plusJakarta font-bold">Login</h1>
                <form
                  onSubmit={handleSubmit}
                  className="w-full flex flex-col py-6"
                >
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-3 my-2 bg-white rounded"
                    type="email"
                    placeholder="Email"
                    autoComplete="off"
                  />
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-3 my-2 bg-white rounded"
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                  />
                  <button className="bg-blue-500 py-3 my-6 rounded font-bold text-white">
                    Sign In
                  </button>
                  <div>
                    {error ? (
                      <p className="font-plusJakarta font-semibold text-xl">
                        {error}
                      </p>
                    ) : null}
                  </div>
                  <div className="flex text-sm text-gray-400 justify-between items-center">
                    <p>
                      <input className="mr-2" type="checkbox" />
                      Remember me
                    </p>
                    <p>Need help</p>
                  </div>
                  <p className="py-8">
                    <span className="text-gray-500 font-plusJakarta font-semibold text-normal">
                      Already subscribe to NORENT ?
                    </span>
                    <Link to="/signup"> Sign Up</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
}

export default Login