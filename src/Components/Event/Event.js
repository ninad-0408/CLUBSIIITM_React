import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getEvent } from '../../Actions/event';

const Event = () => {

    const dispatch = useDispatch();

    const { eventId } = useParams();
    const events = useSelector(state => state.events);
    const event = events[eventId];

    useEffect(()=> {

        if(!event)
        dispatch(getEvent(eventId));

    }, [dispatch]);

    console.log(event);
    
    return (
        <div>
            Event
        </div>
    )
};

export default Event;
