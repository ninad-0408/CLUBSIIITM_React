import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { ScheduleEvent } from '../../Actions/club';
import { useParams } from 'react-router';

const EventCreate = () => {
    const dispatch = useDispatch();
	const history = useHistory();
    const {clubId} = useParams();

    const [event, setEvent] = useState({
        name:"",
        date:"",
        time:"",
        meetlink:"",
        description:"",
        image: null
    });

    function handleChange(e){
        const {name,value} = e.target;
        if(name !== 'image')
        setEvent((prev) => {
            return {
                ...prev,
              [name]: value
            };
          });
        
        else
        setEvent((prev) => {
            console.log(e);
            return {
                ...prev,
              'image': e.target.files[0]
            };
          });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(event);
        dispatch(ScheduleEvent(clubId, event));
		// history.push(`/club/${clubId}`);
    }; 

    return (
        <div>
            <div class="container mt-5 pt-5">
        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0"
            style={{'font-family': 'Kaushan Script,cursive'}}>Add Event
        </h2>
        <div class="divider-custom">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
            <div class="divider-custom-line"></div>
        </div>

        <form onSubmit={handleSubmit} >
            <div class="form-group">
                <label for="name" class="form-label">Name of Event</label>
                <input type="text" class="form-control" id="name" name="name" value={event.name} onChange={handleChange} required/>
            </div>

            <div class="form-group">
                <label for="date" class="form-label">Date of Event</label>
                <input type="date" class="form-control" id="date" name="date" value={event.date} onChange={handleChange} required/>
            </div>

            <div class="form-group">
                <label for="time" class="form-label">Time of Event</label>
                <input type="time" class="form-control" id="time" name="time" value={event.time} onChange={handleChange} required/>
            </div>

            <div class="form-group">
                <label for="meetlink" class="form-label">Meetlink</label>
                <input type="text" class="form-control" id="meetlink" name="meetlink" value={event.meetlink} onChange={handleChange} required/>
            </div>


            <div class="form-group">
                <label for="description" class="form-label">Description of Event</label>
                <input type="text" class="form-control" id="description" name="description" value={event.description} onChange={handleChange} required/>
            </div>

            <div class="form-group">
                <label for="image" class="btn btn-danger btn-md">
                    Choose Banner of Event
                </label>
                <input type="file" name="image" id="image"  style={{'display': 'none'}} onChange={handleChange} />
            </div>
            <div class="form-group">
                <img id="output" width="600px"/>
            </div>

            <button class="btn btn-primary" >Submit</button>
            
            </form> 

    </div>
    <div class="scroll-to-top position-fixed"><a class="js-scroll-trigger d-block text-center text-white rounded"
            href="#body-top"><i class="fa fa-chevron-up"></i></a></div> 
         </div>
        // </div>
    )
};

export default EventCreate;
