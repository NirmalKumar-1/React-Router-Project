import React from 'react';
import {Link} from 'react-router-dom'
import './Home.css'


function Home(){
    return (
    <>
      {/* Home Section */}
      <section className='text-center mb-2 mx-sm-1 my-sm-2'>

        {/* Hero Section */}
        <div className="container-fluid p-0 position-relative hero-container">
          <img src="https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="banner" className="w-100 h-100 hero-img"/>
          <div className="hero-overlay"></div>
          <div className="hero-content text-white text-center px-3">
            <h1 className="hero-heading fw-bold mb-3 z-2">Manage Project with Ease – ProManage</h1>
            <p className="hero-text mb-4 z-2">ProManage helps you plan, track, and deliver projects efficiently. Stay organized, collaborate better, and meet deadlines with confidence.</p>
            <div className="d-flex justify-content-center gap-2 flex-wrap z-2">
            <Link to="/register">
              <button className="btn btn-success px-4">Get Started</button>
            </Link>
            <Link to="/about">
              <button className="btn btn-outline-light px-4">Learn More</button>
            </Link>
            </div>
          </div>
        </div>

        {/* Why Choose Us ? */}
        <div className="container-fluid py-5">
          <h1 className="text-center mb-4">Why Choose Us?</h1>
          <div className="row g-4">

            {/* first card */}
            <div className="col-12 col-md-4">
              <div className="border border-1 border-dark rounded-3 p-4 h-100">
                <h3>Quality</h3>
                <p>We deliver high-quality project management solutions designed to improve productivity, reduce errors, and ensure consistent results.</p>
              </div>
            </div>

            {/* second card */}
            <div className="col-12 col-md-4">
              <div className="border border-1 border-dark rounded-3 p-4 h-100">
                <h3>Reliability</h3>
                <p>ProManage offers a stable and dependable platform that helps teams stay organized and complete projects on time.</p>
              </div>
            </div>

            {/* third card */}
            <div className="col-12 col-md-4">
              <div className="border border-1 border-dark rounded-3 p-4 h-100">
                <h3>Support</h3>
                <p>Our support team is always available to assist you with any questions or challenges, ensuring a smooth experience.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Get Start */}
        <div className="container-fluid py-5 bg-success text-white">
          <h1>Get Started Today!</h1>
          <p>Join ProManage and take control of your projects with powerful tools, smart workflows, and seamless collaboration.</p>
          <Link to="/register">
            <button className="btn bg-white text-black mt-4 px-3">Register Now</button>
          </Link>
        </div>
      </section>
    </>
    )
}

export default Home;