import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/authSlice";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import useToast from "../hooks/useToast";
import { ToastContainer } from "react-toastify";
import { ArrowLeft } from "lucide-react";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const { success, error: showError } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    dispatch(loginUser({ email: data.email, password: data.password }))
      .unwrap()
      .then(() => {
        success("Welcome on board");
        setTimeout(() => {
          navigate("/home");
        }, 2000); 
      })
      .catch((err) => {
        console.log("Login failed:", err);
        showError("Login Failed. Please try again.");
      });
  };

  const handleGoBack = () => {
    navigate("/home");
  };

  return (
    <div className="signup-background">
      <button 
        onClick={handleGoBack} 
        className="btn btn-outline-primary position-absolute d-flex align-items-center"
        style={{ 
          top: '40px', 
          left: '40px', 
          zIndex: 1000 
        }}
      >
        <ArrowLeft className="me-2" />
        Go Back
      </button>

      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card shadow-lg p-4 rounded-lg" style={{ width: "100%", maxWidth: "450px" }}>
          <div className="card-body">
            <h2 className="card-title text-center mb-4">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label htmlFor="email" className="form-label text-muted">
                  Email
                </label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  id="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email.message}</div>
                )}
              </div>

              <div className="mb-4 position-relative">
                <label htmlFor="password" className="form-label text-muted">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  className={`form-control ${errors.password ? "is-invalid" : ""}`}
                  id="password"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password.message}</div>
                )}
                <div
                  className="password-toggle-icon"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {/* {showPassword ? <FaEyeSlash /> : <FaEye />} */}
                </div>
              </div>

              {error && (
                <div className="alert alert-danger" role="alert">
                  {error.error}
                </div>
              )}

              <Button
                text="Login"
                loading={loading}
                disabled={loading}
                onClick={handleSubmit(onSubmit)}
                className="btn-primary btn-block"
              />

              <div className="text-center mt-3">
                <a href="#" className="text-decoration-none small text-muted">
                  Forgot Password?
                </a>
              </div>
              <div className="text-center mt-3">
                <span className="small text-muted">Don't have an account? </span>
                <a href="/signup" className="text-decoration-none small">
                  Register Now
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;