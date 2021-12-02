import React from 'react';


const ClubEdit = () => {
   
    return (
        <div class="container mt-5 pt-5">
            <h2 class="page-section-heading text-center text-uppercase text-secondary mt-5"
                style={{ 'font-family': 'Kaushan Script, cursive' }}>Edit  club name
            </h2>

            <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div>

            <form action="/club/<%=club._id%>" id="form" method="POST" >
                <div class="form-group">
                    <label for="info">New Description</label>
                    <textarea rows="2" type="text" class="form-control" id="info"
                        name="description">club.description</textarea>
                </div>
              
                
            </form >
        </div >


    )
};

export default ClubEdit;
