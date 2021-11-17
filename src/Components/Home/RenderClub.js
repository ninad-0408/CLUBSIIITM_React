import React, { useState } from 'react';

import { baseUrl } from '../../Constants/baseUrl';
import Loader from '../Loader/Loader';

const RenderClub = ({ club }) => {

    const [image, setimage] = useState(false);

    const handleImage = () => {
        setimage((e) => !e);
    }

    const hide = image ? {} : { 'visibility': 'hidden' };

    return (
        <div class="col-md-6 col-lg-4 mb-5" key={club._id}>
            <a href={`club/${club._id}`}>
                <div class="portfolio-item mx-auto">
                    {!image && <Loader />}
                    <div style={hide}>
                        <img class="img-fluid" style={{ 'width': '25rem' }} src={`${baseUrl}/image/${club.image}`} alt="not found" onLoad={handleImage} />
                    </div>
                    <h2 class="text-center mt-2" style={{ 'font-family': 'Ubuntu' }}>
                        {club.name}
                    </h2>
                </div>
            </a>
        </div>
    )
};

export default RenderClub;
