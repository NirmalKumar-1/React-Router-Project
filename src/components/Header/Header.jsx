import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import image from './image.webp'

function Header(){
    return (
       <header>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid mx-sm-5 px-5">
                    <Link className="navbar-brand text-primary" href="#">
                        <img src={image} alt="" style={{height: '50px'}}/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <NavLink className={({isActive})=> `nav-link ${isActive ? "text-success" : ""}`} to="/">Home</NavLink>
                            <NavLink className={({isActive})=> `nav-link ${isActive ? "text-success" : ""}`} to="/about">About</NavLink>
                            <NavLink className={({isActive})=> `nav-link ${isActive ? "text-success" : ""}`} to="/services">Services</NavLink>
                            <NavLink className={({isActive})=> `nav-link ${isActive ? "text-success" : ""}`} to="/contact">Contact</NavLink>
                            <NavLink className={({isActive})=> `nav-link ${isActive ? "text-success" : ""}`} to="/register">Register</NavLink>
                            <NavLink className={({isActive})=> `nav-link ${isActive ? "text-success" : ""}`} to="/login">login</NavLink>
                        </div>
                    </div>
                </div>
            </nav> 
        </header> 
    )
}

export default Header;