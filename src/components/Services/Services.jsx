import React from 'react'
import image from './1020.jpg'
import { Link } from 'react-router-dom'

function Services() {
  return (
    <>
      {/* Service Section */}
      <section>
        <div className="container-fluid p-0 position-relative text-center">

          {/* Background */}
          <div className="w-100 position-relative" style={{minHeight: '100vh', backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
          
            {/* Overlay */}
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

            {/* Content */}
            <div className="position-relative text-white py-5 ">
              <h1 className="mb-5 mt-sm-5 mt-2 py-lg-5">OUR SERVICES</h1>

              {/* Cards */}
              <div className="container">
                <div className="row justify-content-center g-3">

                  {/* first card */}
                  <div className="col-12 col-sm-6 col-lg-3">
                    <div className="bg-white text-dark rounded-3 shadow p-4 h-100">
                      <svg xmlns="http://www.w3.org/2000/svg" height="48px" className='m-4' viewBox="0 -960 960 960" width="48px" fill="#198754"><path d="M194.95-80Q114-80 57-137.05q-57-57.06-57-138Q0-356 57.05-413q57.06-57 138-57Q276-470 333-412.95q57 57.06 57 138Q390-194 332.95-137q-57.06 57-138 57Zm.05-60q57 0 96-39t39-96q0-57-39-96t-96-39q-57 0-96 39t-39 96q0 57 39 96t96 39Zm255-66v-200L315-525q-11-9-16-21.84-5-12.83-5-27 0-14.16 5.5-26.16t15.5-22l119-119q11-11 24.59-16t28.5-5q14.91 0 28.41 5t24.5 16l78 78q30 30 68.25 48T767-597v60q-55.22 0-105.11-22T573-620l-40-40-111 112 88 95v247h-60Zm169.08-548q-30.08 0-51.58-21.42t-21.5-51.5q0-30.08 21.42-51.58t51.5-21.5q30.08 0 51.58 21.42t21.5 51.5q0 30.08-21.42 51.58t-51.5 21.5ZM764.95-80Q684-80 627-137.05q-57-57.06-57-138Q570-356 627.05-413q57.06-57 138-57Q846-470 903-412.95q57 57.06 57 138Q960-194 902.95-137q-57.06 57-138 57Zm.05-60q57 0 96-39t39-96q0-57-39-96t-96-39q-57 0-96 39t-39 96q0 57 39 96t96 39Z"/></svg>
                      <h4>WorkOuts</h4>
                      <p className="text-muted">Customized IT solutions designed to meet client needs.</p>
                      <Link to='/about'>
                        <button className="btn text-success fw-bold text-decoration-underline">MORE</button>
                      </Link>
                    </div>
                  </div>

                  {/* second card */}
                  <div className="col-12 col-sm-6 col-lg-3">
                    <div className="bg-white text-dark rounded-3 shadow p-4 h-100">
                      <svg xmlns="http://www.w3.org/2000/svg" height="48px" className='m-4' viewBox="0 -960 960 960" width="48px" fill="#198754"><path d="M38-160v-94q0-35 18-63.5t50-42.5q73-32 131.5-46T358-420q62 0 120 14t131 46q32 14 50.5 42.5T678-254v94H38Zm700 0v-94q0-63-32-103.5T622-423q69 8 130 23.5t99 35.5q33 19 52 47t19 63v94H738ZM358-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42Zm360-150q0 66-42 108t-108 42q-11 0-24.5-1.5T519-488q24-25 36.5-61.5T568-631q0-45-12.5-79.5T519-774q11-3 24.5-5t24.5-2q66 0 108 42t42 108ZM98-220h520v-34q0-16-9.5-31T585-306q-72-32-121-43t-106-11q-57 0-106.5 11T130-306q-14 6-23 21t-9 31v34Zm260-321q39 0 64.5-25.5T448-631q0-39-25.5-64.5T358-721q-39 0-64.5 25.5T268-631q0 39 25.5 64.5T358-541Zm0 321Zm0-411Z"/></svg>
                      <h4>Community</h4>
                      <p className="text-muted">Building strong client relationships through collaboration and trust.</p>
                      <Link to='/about'>
                        <button className="btn text-success fw-bold text-decoration-underline">MORE</button>
                      </Link>
                    </div>
                  </div>

                  {/* third card */}
                  <div className="col-12 col-sm-6 col-lg-3">
                    <div className="bg-white text-dark rounded-3 shadow p-4 h-100">
                      <svg xmlns="http://www.w3.org/2000/svg" height="48px" className='m-4' viewBox="0 -960 960 960" width="48px" fill="#198754"><path d="m385-412 36-115-95-74h116l38-119 37 119h117l-95 74 35 115-94-71-95 71ZM244-40v-304q-45-47-64.5-103T160-560q0-136 92-228t228-92q136 0 228 92t92 228q0 57-19.5 113T716-344v304l-236-79-236 79Zm236-260q109 0 184.5-75.5T740-560q0-109-75.5-184.5T480-820q-109 0-184.5 75.5T220-560q0 109 75.5 184.5T480-300ZM304-124l176-55 176 55v-171q-40 29-86 42t-90 13q-44 0-90-13t-86-42v171Zm176-86Z"/></svg>
                      <h4>Membership</h4>
                      <p className="text-muted">Reliable ongoing services with dedicated customer support.</p>
                      <Link to='/about'>
                        <button className="btn text-success fw-bold text-decoration-underline">MORE</button>
                      </Link>
                    </div>
                  </div>
                  
                  {/* fourth card */}
                  <div className="col-12 col-sm-6 col-lg-3">
                    <div className="bg-white text-dark rounded-3 shadow p-4 h-100">
                      <svg xmlns="http://www.w3.org/2000/svg" height="48px" className='m-4' viewBox="0 -960 960 960" width="48px" fill="#198754"><path d="M433-228 295-365l42-42 96 94 184-184 42 43-226 226ZM180-80q-24 0-42-18t-18-42v-620q0-24 18-42t42-18h65v-60h65v60h340v-60h65v60h65q24 0 42 18t18 42v620q0 24-18 42t-42 18H180Zm0-60h600v-430H180v430Zm0-490h600v-130H180v130Zm0 0v-130 130Z"/></svg>
                      <h4>Events</h4>
                      <p className="text-muted">Client-focused tech sessions, demos, and service updates.</p>
                      <Link to='/about'>
                        <button className="btn text-success fw-bold text-decoration-underline">MORE</button>
                      </Link>
                    </div>
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

export default Services
