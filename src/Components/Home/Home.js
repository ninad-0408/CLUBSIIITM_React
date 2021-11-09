import React from 'react';

const Home = () => {

    const temp = "google.com";

    return (
        <>
        <header class="masthead bg-light text-white text-center" id="page-top">
            <div class="container d-flex align-items-center flex-column">
                <img class="masthead-avatar mb-5" src="https://i.imgur.com/eQrt2zc.png" alt="" />
                <h1 class="masthead-heading mb-0 text-dark" style={{ 'font-family': 'Kaushan Script' }}>IIITM GWALIOR
                </h1>
                <p class="pre-wrap masthead-subheading font-weight-light mb-0"></p>
            </div>
            </header>
            <div class="jumbotron bg-dark text-white">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <h1 class="masthead-heading mb-0 text-center" style={{ 'font-family': 'Kaushan Script' }}>
                                Upcoming Events:</h1>
                        </div>
                        <div class="col">
                            <div class="row h4">
                        // Forloop
                                <div class="col mt-4 mt-md-2 d-md-block">
                                    <a href={temp}>
                                    // event name
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>

            <section class="page-section portfolio" id="cultural">
                <div class="container">
                    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0"
                        style={{ 'font-family': 'Kaushan Script' }}>Cultural Clubs</h2>
                    <div class="divider-custom">
                        <div class="divider-custom-line bg-secondary"></div>
                        <div class="divider-custom-icon bg-transparent"><i class="text-secondary fas fa-star"></i></div>
                        <div class="divider-custom-line bg-secondary"></div>
                    </div>
                    <div class="row">
                            // forloop
                        <div class="col-md-6 col-lg-4 mb-5">
                            <a href={temp}>
                                <div class="portfolio-item mx-auto">
                                    <img class="img-fluid" style={{ 'width': '25em' }} src={temp} alt="not found" />
                                    <h2 class="text-center mt-2" style={{ 'font-family': 'Ubuntu' }}>
                                    // Club name
                                    </h2>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section class="page-section portfolio" id="technical">
                <div class="container">
                    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0"
                        style={{ 'font-family': 'Kaushan Script' }}>Technical Clubs</h2>
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                        <div class="divider-custom-line"></div>
                    </div>
                    <div class="row">
                        // Forloop
                        <div class="col-md-6 col-lg-4 mb-5">
                            <a href={temp}>
                                <div class="portfolio-item mx-auto">
                                    <img class="img-fluid" style={{ 'width': '25em' }} src={temp} alt="not found" />
                                    <h2 class="text-center mt-2" style={{ 'font-family': 'Ubuntu' }}>
                                    //technical club name
                                    </h2>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section class="page-section bg-dark text-white mb-0" id="about">
                <div class="container">
                    <div class="text-center">
                        <h2 class="page-section-heading d-inline-block text-white"
                            style={{ 'font-family': 'Kaushan Script' }}>ABOUT</h2>
                    </div>
                    <div class="divider-custom divider-light">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                        <div class="divider-custom-line"></div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 ml-auto">
                            <div class="wrap lead" style={{ 'font-family': 'Ubuntu' }}>This is a website which will
                                ease the recruitment process for the clubs and moreover it will help them manage their
                                activities and also it will help club heads to modify the club database of their respective
                                clubs.</div>
                        </div>
                        <div class="col-lg-4 mr-auto mt-5 mt-lg-0">
                            <p class="wrap lead" style={{ 'font-family': 'Ubuntu' }}>This website will also help
                                outsiders to know about clubs of IIITMG so that they can decide which club is better for them
                                according to their interests so that they can apply for it. </p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="page-section" id="contact">
                <div class="container">
                    <div class="text-center">
                        <h2 class="page-section-heading d-inline-block text-secondary mb-0"
                            style={{ 'font-family': 'Kaushan Script' }}>CONTACT</h2>
                    </div>
                    <div class="divider-custom">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                        <div class="divider-custom-line"></div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-4">
                            <div class="d-flex flex-column align-items-center">
                                <div class="icon-contact mb-3"><i class="fas fa-mobile-alt"></i></div>
                                <div class="text-muted">Contact Number</div>
                                <div class="lead font-weight-bold">0123456789</div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="d-flex flex-column align-items-center">
                                <div class="icon-contact mb-3"><i class="fas fa-globe"></i></div>
                                <div class="text-muted">Website</div><a class="lead font-weight-bold" href="">Visit Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Home;
