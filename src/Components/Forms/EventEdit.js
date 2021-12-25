import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getEvent } from '../../Actions/event';
import Loader from '../Loader/Loader';
import { editEvent } from '../../Actions/event'
import { useState } from 'react';

const EventEdit = () => {

    const dispatch = useDispatch();

    const { eventId } = useParams();
    const events = useSelector(state => state.events);
    const event = events[eventId];
    const [upevent, setevent] = useState(event);

    function handleChange(event) {
        const { name, value } = event.target;
        setevent((prev) => {
            return {
                ...prev,
                [name]: value
            };
        });

    }
    // const handleSubmit =  (eventId) => {
    //     await dispatch(editEvent(eventId, upevent));
    // };


    useEffect(() => {
        if (!event)
            dispatch(getEvent(eventId));
    }, [dispatch]);

    return (
        event ?
            <>
                <div className='profile pt-5 pb-5'>
                    <div class="container mt-5 pt-5">
                        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0"
                            style={{ 'font-family': 'Kaushan Script,cursive'}}>Edit  Event
                        </h2>
                        
                        <div class="divider-custom">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                            <div class="divider-custom-line"></div>
                        </div>

                        <form >
                            <div class="form-group">
                                <label for="name" class="form-label">Name of Event</label>
                                <input type="text" class="form-control" id="name" name="name" value={event.name} required />
                            </div>

                            <div class="form-group">
                                <label for="date" class="form-label">Date of Event</label>
                                <input type="date" class="form-control" id="date" value={ `${event.date.substring(0,10)}` } name="date" required />
                            </div>

                            <div class="form-group">
                                <label for="time" class="form-label">Time of Event</label>
                                <input type="time" class="form-control" id="time" value={`${event.date.substring(11,13)}:${event.date.substring(14,16)}` } name="time" required />
                            </div>

                            <div class="form-group">
                                <label for="meetlink" class="form-label">Meetlink</label>
                                <input type="text" class="form-control" id="meetlink" value={event.meetlink} name="meetlink" required />
                            </div>


                            <div class="form-group">
                                <label for="description" class="form-label">Description of Event</label>
                                <input type="text" class="form-control" id="description" value={event.description} name="description" required />
                            </div>

                            <div class="form-group">
                                <label for="image" class="btn btn-danger btn-md">
                                    Choose Banner of Event
                                </label>
                                <input type="file" name="image" id="image" onchange="loadFile(event)" style={{ "display": "none" }} />
                            </div>
                            <div class="form-group">
                                <img src="/image/" id="output" width="600px" />
                            </div>

                            <button type="submit" class="btn btn-primary">Submit</button>

                        </form>

                    </div>
                </div>
            </> : <Loader margin />
    )
};

export default EventEdit;
