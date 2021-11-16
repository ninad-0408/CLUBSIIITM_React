import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {

    const temp = "google.com";

    const clubs = useSelector(state => state.clubs);

    console.log(clubs);

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

           
        </>
    )
};

export default Home;
