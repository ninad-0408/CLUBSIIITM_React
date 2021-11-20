import React from 'react';
import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';

const Navbar = ({ home, club }) => {

    const googleSuccess = (res) => {
        
    }

    const googleFailure = (error) => {
        console.log(error);
    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-dark text-uppercase fixed-top" id="mainNav">
                <div class="container">
                    <Link class="navbar-brand js-scroll-trigger" to="/">Clubs<strong
                        style={{ color: "#9CC3D5" }}>IIITM</strong></Link>
                    <button
                        class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
                        type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i>
                    </button>

                    {
                        home ?

                            <div class="collapse navbar-collapse" id="navbarResponsive">

                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                        href="#cultural" style={{ color: "white" }}>CULTURALS</a>
                                    </li>
                                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                        href="#technical" style={{ color: "white" }}>TECHNICALS</a>
                                    </li>
                                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                        href="#about" style={{ color: "white" }}>ABOUT</a>
                                    </li>
                                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                        href="#contact" style={{ color: "white" }}>CONTACT</a>
                                    </li>
                                    <GoogleLogin
                                        clientId='1062251839932-k1o0jo6frah99qlv3hod50b5hsvvtlep.apps.googleusercontent.com'
                                        render={(renderProps) => {
                                            return (
                                                <li class="nav-item mx-0 mx-lg-1">
                                                <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" onClick={renderProps.onClick}
                                                    style={{'color': 'white'}, {'cursor': 'pointer'}}>Login</a>
                                                </li>
                                            )

                                        }}
                                        onSuccess={googleSuccess}
                                        onFailure={googleFailure}
                                        cookiePolicy='single_host_origin'
                                    />
                                </ul>
                            </div> : club ? <div class="collapse navbar-collapse" id="navbarResponsive">

                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                        href="#Description" style={{ color: "white" }}>Description</a>
                                    </li>
                                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                        href="#achievements" style={{ color: "white" }}>achievements</a>
                                    </li>
                                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                        href="#events" style={{ color: "white" }}>events</a>
                                    </li>
                                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                        href="#members" style={{ color: "white" }}>MEMBERS</a>
                                    </li>
                                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                        href="#about" style={{ color: "white" }}>ABOUT</a>
                                    </li>
                                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                        href="#contact" style={{ color: "white" }}>CONTACT</a>
                                    </li>
                                    admin
                                </ul>

                            </div> : <div></div>
                    }
                </div>
            </nav>
        </div>
    )
};

export default Navbar;
