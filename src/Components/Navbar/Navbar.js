import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {

    var isLogin = false;
    var admin=true;
    var loggedin;
    if(admin){
            admin=<li class="nav-item mx-0 mx-lg-1"><Link
                    class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="<%=club._id%>/edit"
                    style={{color:"white"}}>Edit</Link>
            </li>
    }
    else{
        admin=<></>;
    }
    if (isLogin) {
        loggedin = <li class="nav-item mx-0 mx-lg-1"><Link
            class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
            to="/student/<%=studentId%>/profile" style={{ color: "white" }}>
            {/* User: <%=studentName%> */}USER
    </Link>
        </li>
    }
    else {
        loggedin = <li class="nav-item mx-0 mx-lg-1"><Link
            class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/auth/google"
            style={{ color: "white" }}>Login</Link>
        </li>
    }
    if(props.home ===true)
    {return (
        <div>
            <nav class="navbar navbar-expand-lg bg-dark text-uppercase fixed-top" id="mainNav">
                <div class="container">
                    <a class="navbar-brand js-scroll-trigger" href="#page-top">Clubs<strong
                        style={{ color: "#9CC3D5" }}>IIITM</strong></a>
                    <button
                        class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
                        type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i>
                    </button>

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
                            {/* </li> */}
                            {loggedin}

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )}
    else if(props.club)
    {
        return (
            <div>
                <nav class="navbar navbar-expand-lg bg-dark text-uppercase fixed-top" id="mainNav">
        <div class="container">
            <a class="navbar-brand js-scroll-trigger" href="/home">Clubs<strong
                    style="color: #9CC3D5;">IIITM</strong></a>
            <button
                class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
                type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive"
                aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarResponsive">

                <ul class="navbar-nav ml-auto">
                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                            href="#Description" style={{color:"white"}}>Description</a>
                    </li>
                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                            href="#achievements" style={{color:"white"}}>achievements</a>
                    </li>
                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                            href="#events" style={{color:"white"}}>events</a>
                    </li>
                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                            href="#members" style={{color:"white"}}>MEMBERS</a>
                    </li>
                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                            href="#about" style={{color:"white"}}>ABOUT</a>
                    </li>
                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                            href="#contact" style={{color:"white"}}>CONTACT</a>
                    </li>

                     {admin}
                </ul>

            </div>
        </div>
    </nav>

            </div>
        )
    }
        return <></>;
    
};

export default Navbar;
