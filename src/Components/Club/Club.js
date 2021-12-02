import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { baseUrl } from '../../Constants/baseUrl';
import { getClub, getClubApprovals, postApproval, removeMember } from '../../Actions/club';
import { approveApproval, declineApproval } from '../../Actions/approval';
import Loader from '../Loader/Loader';
import Footer from '../Footer/Footer';
import Meet from '../Forms/ScheduleMeeting';
import { render } from '@testing-library/react';
import { Redirect } from "react-router-dom";

const Club = ({ setapp }) => {

    const [disabledRemove, setdisabledRemove] = useState([]);
    const [approve, setapprove] = useState([]);
    const [decline, setdecline] = useState([]);

    const user = JSON.parse(localStorage.getItem('cookie'))?.profile;

    const dispatch = useDispatch();
    const clubs = useSelector(state => state.clubs);
    const approvals = useSelector(state => state.approvals);
    const { clubId } = useParams();
    // console.log(clubId);
    const approval = approvals[clubId];
    // console.log(approval);
    const club = clubs[clubId];
    const [admin, setadmin] = useState(false);

    useEffect(() => {
        if (admin && approval === undefined)
            dispatch(getClubApprovals(clubId));

        if (club === undefined || club.presidentid === undefined)
            dispatch(getClub(clubId));

        setadmin((user?._id === club?.presidentid?._id));

    }, [dispatch, club, user, approval]);

    const handleJoinClub = () => {
        dispatch(postApproval(clubId));
    };

    const removeStudent = (studentId) => {
        setdisabledRemove([...disabledRemove, studentId]);
        dispatch(removeMember(clubId, studentId));
    };

    const handleApprove = (approvalId) => {
        setapprove([...approve, approvalId]);
        dispatch(approveApproval(approvalId, clubId));
    };

    const handleDecline = (approvalId) => {
        setdecline([...decline, approvalId]);
        dispatch(declineApproval(approvalId, clubId));
    };

    return (
        (club !== undefined && club.presidentid !== undefined) ?
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
                        {
                            (club.memberids.filter((member) => member._id === user?._id).length === 0) &&
                            <button type="submit" class="btn btn-success" onClick={handleJoinClub}>JOIN</button>
                        }
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
                                        <Link to={`/event/${event._id}`}>
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
                        {
                            admin &&
                            <a href="<%=club._id%>/event" class="mt-5 col offset-md-4 col-md-4 btn btn-secondary btn-lg"
                                style={{ 'font-family': 'Ubuntu, sans-serif' }}>Add Event</a>
                        }
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
                                        {admin && (member._id !== user?._id) &&

                                            ((disabledRemove.indexOf(member._id) === -1) ?
                                                <button class="btn btn-danger" onClick={() => removeStudent(member._id)}>Remove</button>
                                                : <button class="btn btn-danger" disabled>
                                                    <span class="spinner-border spinner-border-sm text-primary" role="status" aria-hidden="true"></span>
                                                    Removing...
                                                </button>
                                            )
                                        }
                                    </li>
                                )) : 'No Current Events'
                            }
                        </ul>
                    </div>
                </section >

                {approval !== undefined && approval.length &&
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
                                {
                                    approval.length ? approval.map((app) => (
                                        <li class="list-group-item row">
                                            <Link to={`/student/${app.studentid._id}/profile`} class="col-xs-6 col-md-8 colordark"
                                                style={{ 'color': 'darkblue' }, { 'font-family': 'Ubuntu, sans-serif' }}>
                                                {app.studentid.name}
                                            </Link>
                                            <div class="btn-group col-xs-6 col-md-4">
                                                {
                                                    (approve.indexOf(app._id) === -1) ?
                                                        <a role='button' onClick={() => handleApprove(app._id)}
                                                            class="btn btn-success btn-sm">Approve</a>
                                                        :
                                                        <button class="btn btn-success btn-sm" disabled>
                                                            <span class="spinner-border spinner-border-sm text-primary" role="status" aria-hidden="true"></span>
                                                            Approving...
                                                        </button>
                                                }
                                                <Link to={`/approval/${app._id}/meet`} >
                                                <a role='button'
                                                    class="btn btn-warning btn-sm" onClick={() => setapp(app)}>Schedule
                                                    Meet</a></Link>
                                                {
                                                    (decline.indexOf(app._id) === -1) ?
                                                        <a role='button' onClick={() => handleDecline(app._id)}
                                                            class="btn btn-danger btn-sm">Reject</a>
                                                        :
                                                        <button class="btn btn-danger btn-sm" disabled>
                                                            <span class="spinner-border spinner-border-sm text-primary" role="status" aria-hidden="true"></span>
                                                            Rejecting...
                                                        </button>
                                                }
                                            </div>
                                        </li>
                                    ))
                                        : 'No Pending Approvals'
                                }
                            </ul>
                        </div>
                    </section>
                }
                <Footer />
            </> : <Loader margin />
    )
};

export default Club;
