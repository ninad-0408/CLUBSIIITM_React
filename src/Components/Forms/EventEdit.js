import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { getEvent } from '../../Actions/event';
import Loader from '../Loader/Loader';
import { patchEvent } from '../../Actions/event'
import { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

import { baseUrl } from '../../Constants/baseUrl';

const EventEdit = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const preview = useRef();

    const { eventId } = useParams();
    const events = useSelector(state => state.events);
    const event = events[eventId];

    const [upevent, setEvent] = useState(new FormData());
    const [rerender, setrerender] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name !== 'image')
            setEvent((prev) => {
                prev.set(name, value);
                return prev;
            });

        else
            setEvent((prev) => {
                prev.set(name, e.target.files[0]);
                preview.current.src = URL.createObjectURL(e.target.files[0]);
                return prev;
            });
        setrerender(!rerender);
    }

    const handleSubmit = (e) => {
        e.date=datetime.date;
        e.time=datetime.time;
        dispatch(patchEvent(eventId, upevent));
        history.push(`/event/${eventId}`);
    };

    useEffect(() => {
        if (!event)
            dispatch(getEvent(eventId));
    }, [dispatch]);

    useEffect(() => {
        if(event)
        {
            const date = event?.date.substring(0,10);
            const time = `${event?.date.substring(11,13)}:${event?.date.substring(14,16)}`;
            preview.current.src = `${baseUrl}/image/${event?.image}`;

            Object.entries(event).forEach(([key, value]) => {
                setEvent((prev) => {
                    prev.append(key, event[key]);
                    return prev;
                });
            });
            

            setEvent((prev) => {
                prev.append('time', time);
                prev.set('date', date);
                return prev;
            });

        }
        setrerender(!rerender);
    }, [dispatch, event]);

    return (
        upevent ?
            <>
                <div className='profile pt-5 pb-5'>
                    <div class="container mt-5 pt-5">
                        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0"
                            style={{ 'font-family': 'Kaushan Script,cursive' }}>Edit  Event
                        </h2>

                        <div class="divider-custom">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                            <div class="divider-custom-line"></div>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div class="form-group">
                                <label for="name" class="form-label">Name of Event</label>
                                <input type="text" class="form-control" id="name" name="name" value={upevent.get('name')} onChange={handleChange} required />
                            </div>

                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <div class="form-group">
                                <label for="date" class="form-label">Date of Event</label>
                                <DatePicker type="date" class="form-control" id="date" name="date" value={upevent.get('date')} onChange={handleChange} required />
                            </div>

                            <div class="form-group">
                                <label for="time" class="form-label">Time of Event</label>
                                <TimePicker type="time" class="form-control" id="time" value={upevent.get('time')} name="time" onChange={handleChange} required />
                            </div>
                            </MuiPickersUtilsProvider>
                            <div class="form-group">
                                <label for="meetlink" class="form-label">Meetlink</label>
                                <input type="text" class="form-control" id="meetlink" value={upevent.get('meetlink')} name="meetlink" onChange={handleChange} required />
                            </div>


                            <div class="form-group">
                                <label for="description" class="form-label">Description of Event</label>
                                <input type="text" class="form-control" id="description" value={upevent.get('description')} name="description" onChange={handleChange} required />
                            </div>

                            <div class="form-group">
                                <label for="image" class="btn btn-danger btn-md">
                                    Choose Banner of Event
                                </label>
                                <input type="file" name="image" id="image" onChange={handleChange} style={{ "display": "none" }} />
                            </div>
                            <div class="form-group">
                                <img className="img-fluid" ref={preview} />
                            </div>

                            <button class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </> : <Loader margin />
    )
};

export default EventEdit;
