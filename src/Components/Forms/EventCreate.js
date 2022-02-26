import React from 'react';
import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useParams } from 'react-router';
import { ScheduleEvent } from '../../Actions/club';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

const EventCreate = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { clubId } = useParams();
    const [datetime, setDatetime] = useState({date: new Date(), time: new Date()})


    const preview = useRef(null);

    const [event, setEvent] = useState(new FormData());
    const [rerender, setrerender] = useState(false);

    function handleDate(event){
        setDatetime({
            date: event,
            time: event
		})
    }

    function handleChange(e) {
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
        e.preventDefault();
        dispatch(ScheduleEvent(clubId, event));
        history.goBack();
    };

    return (
        <div className='profile pt-5 pb-5'>
            <div class="container mt-5 pt-5">
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0"
                    style={{ 'font-family': 'Kaushan Script,cursive' }}>Add Event
                </h2>
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>

                <form onSubmit={handleSubmit} >
                    <div class="form-group">
                        <label for="name" class="form-label">Name of Event</label>
                        <input type="text" class="form-control" id="name" name="name" value={event.name} onChange={handleChange} required />
                    </div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <div class="form-group">
                            <label for="date" class="form-label">Date of Event</label>
                            {/* <input type="date" class="form-control" id="date" name="date" value={event.date} onChange={handleChange} required /> */}
                            <DatePicker class="form-control" id="date" name="date" value={datetime.date} onChange={handleDate} placeholder="" required />
                        </div>

                        <div class="form-group">
                            <label for="time" class="form-label">Time of Event</label>
                            {/* <input type="time" class="form-control" id="time" name="time" value={event.time} onChange={handleChange} required /> */}
                            <TimePicker className="form-control" id="time" name="time" value={datetime.time} placeholder onChange={handleDate} required style={{ "padding": "10px" }} />
                        </div>
                    </MuiPickersUtilsProvider>
                    <div class="form-group">
                        <label for="meetlink" class="form-label">Meetlink</label>
                        <input type="text" class="form-control" id="meetlink" name="meetlink" value={event.meetlink} onChange={handleChange} required />
                    </div>


                    <div class="form-group">
                        <label for="description" class="form-label">Description of Event</label>
                        <input type="text" class="form-control" id="description" name="description" value={event.description} onChange={handleChange} required />
                    </div>

                    <div class="form-group">
                        <label for="image" class="btn btn-danger btn-md">
                            Choose Banner of Event
                        </label>
                        <input type="file" name="image" id="image" style={{ 'display': 'none' }} onChange={handleChange} />
                    </div>
                    <div class="form-group">
                        <img ref={preview} className='img-fluid' />
                    </div>

                    <button class="btn btn-primary" >Submit</button>

                </form>

            </div>
            <div class="scroll-to-top position-fixed"><a class="js-scroll-trigger d-block text-center text-white rounded"
                href="#body-top"><i class="fa fa-chevron-up"></i></a>
            </div>
        </div>
        // </div>
    )
};

export default EventCreate;
