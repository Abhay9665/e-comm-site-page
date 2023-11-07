import React from 'react'
import { FaHeart,FaRegHeart } from "react-icons/fa";
const Navbar = () => {
    return (
        <div className='sticky-navbar'>
            <nav className="nav-main-container navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
           
                <div className="container-fluid navbar-text-field">
                    <a className="navbar-brand" href="#">SWISS BEUTY</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse nav-text" id="navbarNavDropdown">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">FACE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">EYE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">LIPS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">NAILS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">BRUSH & TOOLS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">NEW ARRIVALS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">GIFTING</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">SPECIAL OFFERS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{color:'red'}}>BUY ANY 3</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
            </nav>
        </div>
    )
}

export default Navbar