import React from "react";
import { Link } from "react-router-dom";

function About(){
    return(
  <>
    {/*ABOUT SECTION*/}
    <section className="mb-2">
      <div className="container-fluid">

        <div className="row p-3 p-md-5 align-items-center">

          {/* Image */}
          <div className="col-12 col-md-6 d-flex justify-content-center mb-4 mb-md-0">
            <img src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg" className="img-fluid" style={{width: "250px",aspectRatio: "1/1",objectFit: "cover",borderRadius: "50%",border: "1px solid green"}}></img>
          </div>

          {/* Text */}
          <div className="col-12 col-md-6 text-center text-md-start">
            <h1>About Us</h1>
            <h5 className="fw-bold">Who We Are ?</h5>
            <p>ProManage is a modern project management platform designed to help teams plan, track, and deliver projects efficiently.</p>
            <p>We focus on simplicity, productivity, and collaboration—so teams can stay organized, meet deadlines, and achieve goals with confidence.</p>
            <button className="btn text-success border-success px-3">READ MORE →</button>
          </div>
        </div>

        {/* TITLE */}
        <div className="row text-center py-4">
          <h2>Manage Project With <span className="text-success">ProManage</span></h2>
          <p className="text-secondary">A smarter way to plan, collaborate, and succeed together.</p>
        </div>

        {/* CARDS */}
        <div className="row pb-5 justify-content-center">

          <div className="col-12 col-lg-10">
            <div className="row">

              {/* FIRST BLACK CARD */}
              <div className="col-12 col-md-6 p-2">
                <div className="box h-100 bg-dark p-4 text-white rounded-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">ProManage Essentials</h5>
                    <button className="btn btn-outline-success btn-sm disabled">Weekend</button>
                  </div>
                  <div className="mt-4" style={{color: "#9a9893"}}>
                    <p className="m-0">21st December, Saturday</p>
                    <p className="m-0">10:00 AM – 12:00 PM</p>
                    <p className="m-0">Online</p>
                  </div>
                  <Link to='/register'>
                    <button className="btn btn-outline-success rounded-pill px-4 mt-3">Enroll Now →</button>
                  </Link>
                </div>
              </div>

              {/* FIRST WHITE CARD */}
              <div className="col-12 col-md-6 p-2">
                <div className="box h-100 p-4 rounded-4 shadow">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">Advanced Project Planning</h5>
                    <button className="btn btn-outline-success btn-sm disabled">Weekend</button>
                  </div>
                  <div className="mt-4 text-secondary">
                    <p className="m-0">28th December, Saturday</p>
                    <p className="m-0">10:00 AM – 12:00 PM</p>
                    <p className="m-0">Online</p>
                  </div>
                  <Link to='/register'>
                    <button className="btn btn-outline-success rounded-pill px-4 mt-3">Enroll Now →</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              {/* SECOND BLACK CARD */}
              <div className="col-12 col-md-6 p-2 order-3 order-md-2">
                <div className="box h-100 bg-dark p-4 text-white rounded-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">Team Collaboration Mastery</h5>
                    <button className="btn btn-outline-success btn-sm disabled">Weekend</button>
                  </div>
                  <div className="mt-4 text-secondary">
                    <p className="m-0">7th January, Tuesday</p>
                    <p className="m-0">10:00 AM – 12:00 PM</p>
                    <p className="m-0">Online</p>
                  </div>
                  <Link to='/register'>
                    <button className="btn btn-outline-success rounded-pill px-4 mt-3">Enroll Now →</button>
                  </Link>
                </div>
              </div>
              {/* SECOND WHITE CARD */}
              <div className="col-12 col-md-6 p-2 order-4 order-md-1">
                <div className="box h-100 p-4 rounded-4 shadow">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">Risk Management & Reporting</h5>
                    <button className="btn btn-outline-success btn-sm disabled">Weekend</button>
                  </div>
                  <div className="mt-4" style={{color: "#9a9893"}}>
                    <p className="m-0">5th January, Sunday</p>
                    <p className="m-0">6:00 PM – 8:00 PM</p>
                    <p className="m-0">Online</p>
                  </div>
                  <Link to='/register'>
                    <button className="btn btn-outline-success rounded-pill px-4 mt-3">Enroll Now →</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
    )
}

export default About;

