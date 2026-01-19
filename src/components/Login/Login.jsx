import React from 'react';
import lockicon from './lockicon.jpg';
import { Link } from 'react-router-dom';

function Login() {
  return (
  <>
    <style>
      {`
        .form-control::placeholder {
          color: #6c757d;
          opacity: 0.7;
        }
      `}
    </style>

    {/* Login Section */}
    <section>
      <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
        <div className="container py-4">
          <div className="row justify-content-center shadow">

            {/* Left panel */}
            <div className="col-lg-4 col-md-6 col-12 text-center bg-light d-flex flex-column align-items-center justify-content-center p-4">
              <img src={lockicon} style={{ height: '100px' }} alt="lock" />
              <h5 className="mt-3 fw-bold">Secure Login</h5>
              <p className="mb-0 text-secondary">Safe login with strong protection</p>
            </div>

            {/* Middle (form) */}
            <div className="col-lg-4 col-md-6 col-12 bg-white p-4">
              <h4 className="text-success text-center fw-bold mb-4">Login</h4>
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label fw-bold">Username *</label>
                  <input type="text" className="form-control" id="username" placeholder="Enter your username" required />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label fw-bold">Password *</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter your password" required/>
                </div>

                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="rememberMe"/>
                  <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
                </div>

                <button type="submit" className="btn btn-success w-100">Login</button>
              </form>
            </div>

            {/* Right panel */}
            <div className="col-lg-4 col-12 text-center bg-light d-flex flex-column align-items-center justify-content-center p-4">
              <h5 className="text-success fw-bold" style={{ cursor: "pointer" }}>Forgot Password?</h5>
              <Link to="/register">
                <button className='btn text-success my-3'>
                  <h5 className="fw-bold">Create New Account</h5>
                </button>
              </Link>
              <p className="text-secondary mb-0">&copy; 2025 ProManage</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  );
}

export default Login;