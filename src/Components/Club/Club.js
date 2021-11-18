import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { getClub } from '../../Actions/club';
import { baseUrl } from '../../Constants/baseUrl';
import Loader from '../Loader/Loader';
import Footer from '../Footer/Footer';

const Club = () => {

    const dispatch = useDispatch();
    const clubs = useSelector(state => state.clubs);
    const { clubId } = useParams();
    const club = clubs[clubId];

    useEffect(() => {
        if (!(club !== undefined && club.achievements !== undefined))
            dispatch(getClub(clubId));
    }, [dispatch, clubId]);

    const handleJoinClub = () => {

    };

    const removeStudent = (studentId) => {

    };

    return (
        (club !== undefined && club.achievements !== undefined) ?
            <>
                <header class="masthead bg-primary text-white text-center" id="page-top">
                    <div class="container d-flex align-items-center flex-column">
                        <img class="masthead-avatar mb-5" src={`${baseUrl}/image/${club.image}`} alt="not found" />
                        <h1 class="masthead-heading text-uppercase mb-0"
                            style={{ 'font-family': 'Kaushan Script, cursive' }}>
                            {club.name}
                        </h1>
                        <div class="divider-custom divider-light">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                            <div class="divider-custom-line"></div>
                        </div>
                        <button type="submit" class="btn btn-success" onClick={handleJoinClub}>JOIN</button>
                    </div>
                </header>

                <section class="page-section portfolio" id="Description" >
                    <div class="container">
                        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0"
                            style={{ 'font-family': 'Kaushan Script, cursive' }}>Description</h2>
                        <div class="divider-custom">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                            <div class="divider-custom-line"></div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 col-lg-12 mb-5">
                                <div class="portfolio-item mx-auto" style={{ 'font-family': 'Ubuntu, sans serif' }}>
                                    <figure class="text-center">
                                        <blockquote class="blockquote">
                                            {club.description}
                                        </blockquote>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >

                <section class="page-section portfolio" id="achievements" >
                    <div class="container">
                        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0"
                            style={{ 'font-family': 'Kaushan Script, cursive' }}>Achievements</h2>
                        <div class="divider-custom">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                            <div class="divider-custom-line"></div>
                        </div>

                        <div class="row">
                            <div class="col-md-12 col-lg-12 mb-5">
                                <div class="portfolio-item mx-auto" style={{ 'font-family': 'Ubuntu, sans-serif' }}>
                                    <ul class="list-group">
                                        {
                                            club.achievements.length ? club.achievements.map((achievement) =>
                                                <li class="list-group-item">
                                                    {achievement}
                                                </li>
                                            ) : 'No Achevivements'
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >

                <section class="page-section portfolio" id="events" >
                    <div class="container">
                        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0"
                            style={{ 'font-family': 'Kaushan Script, cursive' }}>Events</h2>
                        <div class="divider-custom">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                            <div class="divider-custom-line"></div>
                        </div>
                        <div class="row">
                            {
                                club.eventids.length ? club.eventids.map((event) => (
                                    <div class="col-md-6 col-lg-4 mb-5">
                                        <Link to={`/event/${event.image}`}>
                                            <div class="portfolio-item mx-auto">
                                                <img class="img-fluid" src={`${baseUrl}/image/${event.image}`} alt="not found" />
                                                <h2 class="text-center mt-2" style={{ 'font-family': 'Ubuntu, sans-serif' }}>
                                                    {event.name}
                                                </h2>
                                            </div>
                                        </Link>
                                    </div>
                                )) : 'No Current Events'
                            }
                        </div>
                        <a href="<%=club._id%>/event" class="mt-5 col offset-md-4 col-md-4 btn btn-secondary btn-lg"
                            style={{ 'font-family': 'Ubuntu, sans-serif' }}>Add Event</a>
                    </div>
                </section >

                <section class="page-section portfolio" id="members" >
                    <div class="container">
                        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0"
                            style={{ 'font-family': 'Kaushan Script, cursive' }}>MEMBERS</h2>
                        <div class="divider-custom">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                            <div class="divider-custom-line"></div>
                        </div>
                        <ul class="list-group">
                            {
                                club.memberids.length ? club.memberids.map((member) => (
                                    <li class="list-group-item row">
                                        <Link to={`/student/${member._id}/profile`}
                                            style={{ 'color': 'rgb(0,0,139)' }, { 'font-family': 'Ubuntu, sans-serif' }} class="col colordark">
                                            {member.name}
                                        </Link>
                                        <button class="btn btn-danger" onClick={removeStudent(member._id)}>Remove</button>
                                    </li>
                                )) : 'No Current Events'
                            }
                        </ul>
                    </div>
                </section >

                {club.approvals?.length &&
                    <section class="page-section">
                        <div class="container">
                            <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0"
                                style={{ 'font-family': 'Kaushan Script, cursive' }}>New Approvals</h2>
                            <div class="divider-custom">
                                <div class="divider-custom-line"></div>
                                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                <div class="divider-custom-line"></div>
                            </div>
                            <ul class="list-group">
                    // for loop
                                <li class="list-group-item row">
                                    <a href="/student/<%= approvals[request].studentid._id %>/profile" class="col-xs-6 col-md-8"
                                        style={{ 'color': 'darkblue' }, { 'font-family': 'Ubuntu, sans-serif' }}>
                                        student name of approval
                                    </a>
                                    <div class="col-xs-6 col-md-4">
                                        <a href="/approval/<%= approvals[request]._id %>/approve"
                                            class="btn btn-success btn-sm">Approve</a>
                                        <a href="/approval/<%= approvals[request]._id %>/meet"
                                            class="btn btn-warning btn-sm">Schedule
                                            Meet</a>
                                        <a href="/approval/<%= approvals[request]._id %>/decline"
                                            class="btn btn-danger btn-sm">Reject</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>
                }
                <Footer />
            </> : <Loader />
    )
};

export default Club;
