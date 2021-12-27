import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { baseUrl } from '../../Constants/baseUrl';
import Loader from '../Loader/Loader';

const RenderEvent = ({ event }) => {

    const [image, setimage] = useState(false);

    const handleImage = () => {
        setimage((e) => !e);
    }

    const hide = image ? {} : { 'visibility': 'hidden' };

    return (
        <div class="col-md-6 col-lg-4 mb-5" key={event._id}>
            <Link to={`/event/${event._id}`}>
                <div class="portfolio-item mx-auto">
                    {!image ? <Loader />:<></>}
                    <div style={hide}>
                        <img class="img-fluid" style={{ 'width': '25rem' }} src={`${baseUrl}/image/${event.image}`} alt="not found" onLoad={handleImage} />
                    </div>
                    <h2 class="text-center mt-2" style={{ 'font-family': 'Ubuntu' }}>
                        {event.name}
                    </h2>
                </div>
            </Link>
        </div>
    )
};

export default RenderEvent;
