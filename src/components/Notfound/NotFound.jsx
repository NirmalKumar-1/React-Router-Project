import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
        <div className="text-center p-4 p-md-5 shadow rounded-4" style={{ maxWidth: "500px" }}>
            <h1 className="display-1 fw-bold text-danger">404</h1>
            <h4 className="mb-3">Page Not Found</h4>
            <p className="text-secondary mb-4">Sorry, the page you are looking for doesn’t exist or has been moved.</p>
            <Link to="/" className="btn btn-success px-4 py-2 rounded-pill">Go Back Home</Link>
        </div>
    </div>
  );
}

export default NotFound;