import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useHistory } from 'react-router-dom';

import { baseUrl } from '../../Constants/baseUrl';
import { getEvent, delEvent } from '../../Actions/event';
import Loader from '../Loader/Loader';

const Event = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const { eventId } = useParams();

    const events = useSelector(state => state.events);
    const clubs = useSelector(state => state.clubs);

    const event = events[eventId];

    const handleDelete = () => {
        var clubId = null;
        Object.entries(clubs).forEach(([key, value]) => {
            clubs[key].eventids?.forEach((item) => {
                if (item._id == eventId)
                    clubId = key;
            });
        });

        dispatch(delEvent(clubId, eventId));
        history.goBack();
    };

    useEffect(() => {
        if (!event)
            dispatch(getEvent(eventId));
    }, [dispatch]);

    const [image, setimage] = useState(false);

    const handleImage = () => {
        setimage((e) => !e);
    }

    const hide = image ? {} : { 'visibility': 'hidden' };

    return (
        (event !== undefined) ?
            <div className='profile pt-5'>
                <div class="container mt-5 pt-5">
                    <h2 class="page-section-heading text-center text-uppercase text-secondary"
                        style={{ 'font-family': 'Kaushan Script, cursive' }}>Event Details
                    </h2>

                    <div class="divider-custom">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                        <div class="divider-custom-line"></div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 mt-5">
                            {!image ? <Loader /> : <></>}
                            <div style={hide}>
                                <img class="img-fluid" src={`${baseUrl}/image/${event.image}`} alt="not found" onLoad={handleImage} />
                            </div>
                        </div>

                        <div class="col-lg-6 mt-5 text-center">

                            <div class="mt-4 h4">
                                <span class="font-weight-bold">Event Name : </span>
                                {event.name}
                            </div>

                            <div class="mt-4 h4">
                                <span class="font-weight-bold">Event Date : </span>
                                {
                                    `${event.date.substring(8, 10)}/${event.date.substring(5, 7)}/${event.date.substring(0, 4)}`
                                }
                            </div>

                            <div class="mt-4 h4">
                                <span class="font-weight-bold">Event Time : </span>
                                {`${event.date.substring(11, 13)} : ${event.date.substring(14, 16)} (IST)`}
                            </div>

                            <div class="mt-4 h4">
                                <span class="font-weight-bold">Event Description : </span>
                                {event.description}
                            </div>

                            <div class="mt-4 h4">
                                <span class="font-weight-bold">Event Meetlink : </span>
                                <a target="_blank" href={`${event.meetlink}`}>
                                    Link
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="row mt-5 pb-5">
                        <Link to={`${event._id}/edit`} class="col offset-lg-3 col-lg-2 btn btn-primary btn-lg">
                            Edit Event
                        </Link>
                        <button class="col col-lg-2 offset-lg-2 btn btn-danger btn-lg" onClick={handleDelete}>
                            Delete Event
                        </button>
                    </div>
                </div>
            </div>
            : <Loader margin />
    )
};

export default Event;
