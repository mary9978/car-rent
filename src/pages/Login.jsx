import Layout from "./Layout";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { useState } from "react";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import { userAuth } from "../context/AuthContext";
function Login() {
  const { logIn } = userAuth("");
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = async (values , actions) => {
    setError(null);
    try {
      await logIn(values.email, values.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
     if (!error) {
       toast("you are now sign in");
     }
     actions.resetForm();
  };
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: basicSchema,
  });
  return (
    <Layout>
      <div className="w-full h-screen bg-borderColor">
        <div className="bg-black-60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="absolute w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px]  mx-auto shadow-lg rounded-lg bg-blue-200 text-blue-500">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-plusJakarta font-bold">Login</h1>
              <form
                onSubmit={formik.handleSubmit}
                className="w-full flex flex-col py-6"
              >
                <input
                  onBlur={formik.handleBlur}
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className="p-3 my-2 bg-white rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="off"
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="my-2 text-red-400">{formik.errors.email}</p>
                )}
                <input
                  onBlur={formik.handleBlur}
                  id="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  className="p-3 my-2 bg-white rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                {formik.touched.password && formik.errors.password && (
                  <p className="my-2 text-red-400">{formik.errors.password}</p>
                )}
                <Toaster
                  position="bottom-left"
                  reverseOrder={false}
                  toastOptions={{
                    success: {
                      style: {
                        border: "2px solid #3563E9",
                        padding: "0.5rem",
                      },
                    },
                  }}
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

export default Login;
