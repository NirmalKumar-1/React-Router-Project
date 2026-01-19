import React from 'react'

function Register(){
    return (
    <>
        {/* Register Section */}
        <section>
            <div className="container-fluid pb-5">
                <div className="container">

                    <div className="row pb-5 px-lg-5 px-2 mb-2 ">

                        {/* LEFT CONTENT */}
                        <div className="col-lg-8 col-md-12 mb-4 mb-lg-0 pt-5">
                            <h1>Manage Project With Ease – <span className="text-success"> ProManage</span></h1>
                            <p className="my-4 text-secondary">ProManage empowers teams to plan, track, and deliver projects efficiently by providing a clean, intuitive interface that boosts productivity, improves focus, and simplifies complex project workflows.</p>
                            <p className="my-4 text-secondary">Easily organize tasks, assign clear responsibilities, set priorities, and monitor progress in real time, helping teams meet deadlines consistently without unnecessary stress or confusion.</p>
                            <p className="my-4 text-secondary">With built-in collaboration and communication tools, your team stays connected, aligned, and informed whether working remotely, in the office, or across multiple locations.</p>
                            <p className="my-4 text-secondary">ProManage seamlessly adapts to your unique workflow, making it a powerful solution for startups, growing businesses, and large enterprise teams managing projects at scale.</p>

                            <div className="d-flex flex-wrap gap-2 mt-5">
                                <button className="btn border border-success text-success px-4">Learn More</button>
                                <button className="btn btn-success px-4">Start Now</button>
                            </div>
                        </div>

                        {/* RIGHT FORM */}
                        <div className="col-lg-4 col-md-12 pt-5">
                            <form className="border shadow p-4 rounded-3">
                                <h4 className="text-center mb-3">Register Now</h4>

                                <div className="mb-3">
                                    <label htmlFor="fullname" className="form-label">Full Name</label>
                                    <input type="text" className="form-control" id="fullname" required/>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" required/>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone</label>
                                    <input type="tel" className="form-control" id="phone" minLength={10} maxLength={10} pattern="[0-9]{10}" required/>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="plan" className="form-label">Select Plan</label>
                                    <select className="form-select" id="plan">
                                        <option selected>Free Plan</option>
                                        <option>Basic</option>
                                        <option>Standard</option>
                                        <option>Premium</option>
                                    </select>
                                </div>

                                <button type="submit" className="btn btn-success w-100">Submit</button>
                            </form>
                        </div>
                    </div>

                    {/* TITLE */}
                    <div className="row text-center mb-4">
                        <h2>Unlock Your Project Power</h2>
                        <p className="text-secondary">Streamline your workflow, improve collaboration, and deliver successful projects faster with smart planning tools.</p>
                    </div>

                    {/* CARDS */}
                    <div className="row">
                        {/* first card */}
                        <div className="col-lg-3 col-md-6 col-sm-12 p-3">
                            <div className="border rounded-2 h-100">
                                <img src="https://plus.unsplash.com/premium_photo-1661367947678-e61a5a019eed?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-100 rounded-top"/>
                                <div className="p-3">
                                    <h6 className='fw-bold'>Smart Planning</h6>
                                    <p className="text-secondary mb-0">Plan projects efficiently with clear timelines, milestones, and structured task management.</p>
                                </div>
                            </div>
                        </div>

                        {/* second card */}
                        <div className="col-lg-3 col-md-6 col-sm-12 p-3">
                            <div className="border rounded-2 h-100">
                                <img src="https://images.unsplash.com/photo-1588600878108-578307a3cc9d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzZWFyY2h8ZW58MHx8MHx8fDA%3D" alt="" className="w-100 rounded-top"/>
                                <div className="p-3">
                                    <h6 className='fw-bold'>Creative Boreads</h6>
                                    <p className="text-secondary mb-0">Visualize ideas, brainstorm concepts, and organize workflows using flexible creative boards.</p>
                                </div>
                            </div>
                        </div>

                        {/* third card */}
                        <div className="col-lg-3 col-md-6 col-sm-12 p-3">
                            <div className="border rounded-2 h-100">
                                <img src="https://plus.unsplash.com/premium_photo-1677529496297-fd0174d65941?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVhbSUyMG1lZXRpbmd8ZW58MHx8MHx8fDA%3D" alt="" className="w-100 rounded-top"/>
                                <div className="p-3">
                                    <h6 className='fw-bold'>Collaboration</h6>
                                    <p className="text-secondary mb-0">Work together seamlessly with real-time updates, comments, and shared project visibility.</p>
                                </div>
                            </div>
                        </div>

                        {/* fourth card */}
                        <div className="col-lg-3 col-md-6 col-sm-12 p-3">
                            <div className="border rounded-2 h-100">
                                <img src="https://images.unsplash.com/photo-1739805591936-39f03383c9a9?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-100 rounded-top"/>
                                <div className="p-3">
                                    <h6 className='fw-bold'>AI Support</h6>
                                    <p className="text-secondary mb-0">Get intelligent insights, task suggestions, and automation powered by smart AI tools.</p>
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

export default Register;