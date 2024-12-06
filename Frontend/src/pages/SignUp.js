import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../redux/authSlice';
import Button from "../components/Button";
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ToastContainer } from 'react-toastify';
import useToast from "../hooks/useToast"; 

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { success, error: showError } = useToast();

  const { 
    register, 
    handleSubmit, 
    watch, 
    formState: { errors } 
  } = useForm({
    mode: 'onBlur'
  });

  const password = watch('password');  

  const onSubmit = (data) => {
    dispatch(signupUser({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password
    }))
      .unwrap()
      .then(() => {
        success("Account Created Successfully");
        setTimeout(() => {
          navigate("/login");
        }, 2000); 
      })
      .catch((err) => {
        console.log("Signup failed:", err);
        showError("Signup Failed. Please try again.");
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
        <div className="card shadow-sm" style={{ width: '100%', maxWidth: '400px' }}>
          <div className="card-body p-4">
            <h2 className="card-title text-center mb-4">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label text-muted">First Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                  id="firstName"
                  placeholder="Enter your first name"
                  {...register('firstName', {
                    required: 'first name is required',
                    minLength: {
                      value: 3,
                      message: 'first name must be at least 3 characters'
                    }
                  })}
                />
                {errors.firstName && (
                  <div className="invalid-feedback">
                    {errors.firstName.message}
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label text-muted">Last Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                  id="lastName"
                  placeholder="Enter your last name"
                  {...register('lastName', {
                    required: 'last name is required',
                    minLength: {
                      value: 3,
                      message: 'last name must be at least 3 characters'
                    }
                  })}
                />
                {errors.lastName && (
                  <div className="invalid-feedback">
                    {errors.lastName.message}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label text-muted">Email</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  id="email"
                  placeholder="Enter your email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: 'Invalid email address'
                    }
                  })}
                />
                {errors.email && (
                  <div className="invalid-feedback">
                    {errors.email.message}
                  </div>
                )}
              </div>

              <div className="mb-3 position-relative">
                <label htmlFor="password" className="form-label text-muted">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                  id="password"
                  placeholder="Create a password"
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters'
                    }
                  })}
                />
                {errors.password && (
                  <div className="invalid-feedback">
                    {errors.password.message}
                  </div>
                )}
              </div>

              <div className="mb-3 position-relative">
                <label htmlFor="confirmPassword" className="form-label text-muted">Confirm Password</label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  {...register('confirmPassword', {
                    required: 'Please confirm your password',
                    validate: (value) => 
                      value === password || 'Passwords do not match'
                  })}
                />
                {errors.confirmPassword && (
                  <div className="invalid-feedback">
                    {errors.confirmPassword.message}
                  </div>
                )}
              </div>

              {error && (
                <div className="alert alert-danger" role="alert">
                  {error.error}
                </div>
              )}

              <div className="d-grid">

                <Button
                  text="Sign Up"
                  loading={loading}
                  disabled={loading}
                  onClick={handleSubmit(onSubmit)}
                />
              </div>

              <div className="text-center mt-3">
                <span className="small">Already have an account? </span>
                <a href="/login" className="text-decoration-none small">Login</a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
