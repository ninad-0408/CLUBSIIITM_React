import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import RenderClub from './RenderClub';
import Loader from '../Loader/Loader';
import Footer from '../Footer/Footer';

const Home = () => {

    const clubs = useSelector(state => state.clubs);
    const upcomingevents = useSelector(state => state.upcomingevents);

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
                        <div class="col-12 col-lg-4">
                            <h1 class="masthead-heading mb-0 text-center" style={{ 'font-family': 'Kaushan Script' }}>
                                Upcoming Events:</h1>
                        </div>
                        <div class="col">
                            <div class="row align-items-centre h4">
                                {
                                    upcomingevents.length ?
                                        upcomingevents.map((event) => (
                                            <div class="col-12 col-sm-4 mt-4 mt-md-2 d-md-block">
                                                <Link to={`/event/${event._id}`}>
                                                    {event.name}
                                                </Link>
                                            </div>
                                        )) : 'No Upcoming Events...'
                                }
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
                        {Object.entries(clubs).length ? Object.entries(clubs).map((p) => p[1].typeofclub === "Cultural" ? <RenderClub club={p[1]} />: <></>) : <Loader />}
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
                        {Object.entries(clubs).length ? Object.entries(clubs).map((p) => p[1].typeofclub === "Technical" ? <RenderClub club={p[1]} />: <></>) : <Loader />}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
};

export default Home;
