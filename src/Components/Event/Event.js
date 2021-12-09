import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getEvent } from '../../Actions/event';
import Loader from '../Loader/Loader';

const Event = () => {

    const dispatch = useDispatch();

    const { eventId } = useParams();
    const events = useSelector(state => state.events);
    const event = events[eventId];

    useEffect(() => {

        if (!event)
            dispatch(getEvent(eventId));

    }, [dispatch]);

    console.log(event);

    return (
        (event !== undefined) ?
            <div>
                <h1 style={{"text-align": "center"}}>Event Details</h1>
                <div class="container">
                    <div class="row">
                        <div class="col mt-5 text-center">
                            <div class="mt-4 h4">
                                <img src={`/image/${event.image}`} alt="" width="400px" height="300px" />
                            </div>
                        </div>

                        <div class="col mt-5 text-center">

                            <div class="mt-4 h4">
                                <span class="font-weight-bold">Event Name : </span>
                                {event.name}
                            </div>

                            <div class="mt-4 h4">
                                <span class="font-weight-bold">Event Date : </span>
                                {/* <%=event.date.getDate()%>/<%=event.date.getMonth()%>/<%=event.date.getFullYear()%> */}
                            </div>

                            <div class="mt-4 h4">
                                <span class="font-weight-bold">Event Time : </span>
                                {/* <%=event.date.getHours()%>:<%=event.date.getMinutes()%>:<%=event.date.getSeconds()%> */}
                                {/* (IST) */}
                            </div>

                            <div class="mt-4 h4">
                                <span class="font-weight-bold">Event Description : </span>
                                {event.description}
                            </div>

                            <div class="mt-4 h4">
                                <span class="font-weight-bold">Event Meetlink : </span>
                                <a target="_blank" href={`${event.meetlink}`}>
                                    {event.meetlink}
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <% if(ispresident) { %> */}
                    <div class="row">
                                <a href={`${event._id}/edit`} class="mt-5 offset-md-5 col-md-2 btn btn-primary btn-lg">
                                    Edit Event
                                </a>
                                <form  class="mt-5 offset-md-5 col-md-2 ">
                                    <label for="submit" class="btn btn-danger btn-lg">
                                        Delete Event
                                    </label>
                                    <input  style={{"display": "none"}}/>
                                </form>
                            </div>
                </div>
            </div>
            : <Loader margin />
    )
};

export default Event;
