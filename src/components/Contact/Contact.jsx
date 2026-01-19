import React from "react";

function Contact() {
  return (
  <>
    {<style>
      {`
        @media (min-width: 768px) {
          .form {
            background-color: white;
          }
        }
      `}
    </style>}
    <section>
      <div className="container-fluid p-0 position-relative">

        {/* Background */}
        <div className="d-flex align-items-center" style={{minHeight: "100vh", backgroundImage: "url(https://images.pexels.com/photos/8867262/pexels-photo-8867262.jpeg)", backgroundSize: "cover",backgroundPosition: "center"}}>
          {/* Overlay */}
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"></div>

          {/* Content */}
          <div className="container position-relative text-white py-5">
            <h1 className="text-center mb-5">Contact Us</h1>

            {/* Form */}
            <div className="row justify-content-center mb-5">
              <div className="col-12 col-md-10 col-lg-8">
                <form>
                  <div className="d-flex flex-column flex-md-row gap-2 shadow p-2 rounded-pill form">
                    <input type="text" className="form-control rounded-pill rounded-md-0 rounded-md-start" required placeholder="Enter your name"/>
                    <input type="email" className="form-control rounded-pill rounded-md-0" required placeholder="Enter your email"/>
                    <button className="btn btn-success rounded-pill rounded-md-0 rounded-md-end px-4">Submit</button>
                  </div>
                </form>
              </div>
            </div>

            {/* Cards */}
            <div className="row justify-content-center text-center">

              {/* first card */}
              <div className="col-12 col-md-4 p-2">
                <div className="box p-4 bg-success rounded-4 h-100">
                  <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#EA3323"><path d="M796-120q-119 0-240-55.5T333-333Q231-435 175.5-556T120-796q0-18.86 12.57-31.43T164-840h147.33q14 0 24.34 9.83Q346-820.33 349.33-806l26.62 130.43q2.05 14.9-.62 26.24-2.66 11.33-10.82 19.48L265.67-530q24 41.67 52.5 78.5T381-381.33q35 35.66 73.67 65.5Q493.33-286 536-262.67l94.67-96.66q9.66-10.34 23.26-14.5 13.61-4.17 26.74-2.17L806-349.33q14.67 4 24.33 15.53Q840-322.27 840-308v144q0 18.86-12.57 31.43T796-120ZM233-592l76-76.67-21-104.66H187q3 41.66 13.67 86Q211.33-643 233-592Zm365.33 361.33q40.34 18.34 85.84 29.67 45.5 11.33 89.16 13.67V-288l-100-20.33-75 77.66ZM233-592Zm365.33 361.33Z"/></svg>
                  <h5 className="my-3">CALL US</h5>
                  <p className="mb-0">+91 (234) 567-891</p>
                  <p>+91 (234) 567-891</p>
                </div>
              </div>

              {/* second card */}
              <div className="col-12 col-md-4 p-2">
                <div className="box p-4 bg-success rounded-4 h-100">
                  <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#EA3323"><path d="M480.06-486.67q30.27 0 51.77-21.56 21.5-21.55 21.5-51.83 0-30.27-21.56-51.77-21.55-21.5-51.83-21.5-30.27 0-51.77 21.56-21.5 21.55-21.5 51.83 0 30.27 21.56 51.77 21.55 21.5 51.83 21.5ZM480-168q129.33-118 191.33-214.17 62-96.16 62-169.83 0-114.86-73.36-188.1-73.36-73.23-179.97-73.23T300.03-740.1q-73.36 73.24-73.36 188.1 0 73.67 63 169.83Q352.67-286 480-168Zm0 88Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg> 
                  <h5 className="my-3">LOCATION</h5>
                  <p className="mb-0">123 Green Valley Road, 21 Avenues.</p>
                  <p>New Springfield, CA 902-873</p>
                </div>
              </div>

              {/* third card */}
              <div className="col-12 col-md-4 p-2">
                <div className="box p-4 bg-success rounded-4 h-100">
                  <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#EA3323"><path d="M186.67-633.33h586.66v-113.34H186.67v113.34Zm0 0v-113.34 113.34Zm0 553.33q-27 0-46.84-19.83Q120-119.67 120-146.67v-600q0-27 19.83-46.83 19.84-19.83 46.84-19.83h56.66V-880h70v66.67h333.34V-880h70v66.67h56.66q27 0 46.84 19.83Q840-773.67 840-746.67v280.34q-15.78-7.86-32.39-13.1-16.61-5.24-34.28-8.24v-79H186.67v420h296.66q6.34 18.67 14.84 35 8.5 16.34 20.16 31.67H186.67Zm540.66 40q-79.95 0-136.31-56.35-56.35-56.36-56.35-136.32 0-79.95 56.35-136.31 56.36-56.35 136.31-56.35 79.96 0 136.32 56.35Q920-312.62 920-232.67q0 79.96-56.35 136.32Q807.29-40 727.33-40Zm61.17-93.67 27.83-28-75-75v-112H702V-222l86.5 88.33Z"/></svg> 
                  <h5 className="my-3">HOURS</h5>
                  <p className="mb-0">Mon – Fri: 06:00 AM – 8:00 PM </p>
                  <p>Sat – Sun: 11:00 AM – 05:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  );
}

export default Contact;











