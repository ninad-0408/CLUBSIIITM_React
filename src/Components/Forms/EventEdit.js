import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { getEvent } from '../../Actions/event';
import Loader from '../Loader/Loader';
import { patchEvent } from '../../Actions/event'
import { useState } from 'react';

const EventEdit = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const { eventId } = useParams();
    const events = useSelector(state => state.events);
    const event = events[eventId];
    const [upevent, setevent] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setevent((prev) => {
            return {
                ...prev,
                [name]: value
            };
        });

    }

    const handleSubmit = (e) => {
        dispatch(patchEvent(eventId, upevent));
        history.push(`/event/${eventId}`);
    };

    useEffect(() => {
        if (!event)
            dispatch(getEvent(eventId));
    }, [dispatch]);

    useEffect(() => {
        const date = `${event?.date.substring(0,10)}`;
        const time = `${event?.date.substring(11,13)}:${event?.date.substring(14,16)}`;
        setevent({ ...event, date: date, time: time });
    }, [event]);

    return (
        upevent ?
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

                        <form onSubmit={handleSubmit}>
                            <div class="form-group">
                                <label for="name" class="form-label">Name of Event</label>
                                <input type="text" class="form-control" id="name" name="name" value={upevent.name} onChange={handleChange} required />
                            </div>

                            <div class="form-group">
                                <label for="date" class="form-label">Date of Event</label>
                                <input type="date" class="form-control" id="date" value={upevent.date} name="date" onChange={handleChange} required />
                            </div>

                            <div class="form-group">
                                <label for="time" class="form-label">Time of Event</label>
                                <input type="time" class="form-control" id="time" value={upevent.time} name="time" onChange={(e) => console.log(e)} required />
                            </div>

                            <div class="form-group">
                                <label for="meetlink" class="form-label">Meetlink</label>
                                <input type="text" class="form-control" id="meetlink" value={upevent.meetlink} name="meetlink" onChange={handleChange} required />
                            </div>


                            <div class="form-group">
                                <label for="description" class="form-label">Description of Event</label>
                                <input type="text" class="form-control" id="description" value={upevent.description} name="description" onChange={handleChange} required />
                            </div>

                            <div class="form-group">
                                <label for="image" class="btn btn-danger btn-md">
                                    Choose Banner of Event
                                </label>
                                <input type="file" name="image" id="image" onChange="loadFile(event)" style={{ "display": "none" }} />
                            </div>
                            <div class="form-group">
                                <img class="img-fluid" src="/image/" id="output" />
                            </div>

                            <button class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </> : <Loader margin />
    )
};

export default EventEdit;
