import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { EditClub } from '../../Actions/club';
import { useDispatch } from 'react-redux';
import Loader from '../Loader/Loader';

const ClubEdit = () => {
    const dispatch = useDispatch();
    const clubs = useSelector(state => state.clubs);
    const { clubId } = useParams();
    const club = clubs[clubId];

    const [upClub, setClub] = useState(club);

    function handleChange(event) {
        const { name, value } = event.target;
        setClub((prev) => {
            return {
                ...prev,
                [name]: value
            };
        });
    }
    const handleSubmit = (clubId) => {
        dispatch(EditClub(clubId, upClub));
    };

    const compo = (value, key) => (
        <>
        <textarea rows="2" type="text" class="form-control" id={key} name="achievements">{value}</textarea>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-file-minus float-right" viewBox="0 0 16 16" onClick={remove}>
            <path d="M5.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z" />
            <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
        </svg>
        </>
    );

    const add = () => {

    };

    const remove = () => {

    };

    return (
        club ?
            <div className="profile pt-5 pb-5">
                <div class="container mt-5 pt-5">
                    <h2 class="page-section-heading text-center text-uppercase text-secondary mt-5"
                        style={{ 'font-family': 'Kaushan Script, cursive' }}>Edit  {club.name}
                    </h2>

                    <div class="divider-custom">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                        <div class="divider-custom-line"></div>
                    </div>

                    <form >

                        <div class="form-group">
                            <label for="info" className='form-lable'>Description</label>
                            <textarea rows="2" type="text" class="form-control" id="info"
                                name="description" value={club.description} onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Acheivements</label>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-plus-square mt-3 mb-2" viewBox="0 0 16 16" id='add' onClick={add} >
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                            {compo}
                        </div>

                        <div className="form-group">
                            <label for='image' className='btn btn-outline-danger btn-md'>Upload Image</label>
                            <input type="file" id='image' name='image' className="form-control" style={{ display: 'none' }} />
                        </div>

                        <div className="form-group">
                            <img className='img-fluid' />
                        </div>

                        <div class="container mb-5">
                            <button type="submit" class="btn btn-primary" onClick={() => handleSubmit(clubId)}>Submit</button>
                        </div>
                    </form >
                </div >
            </div> : <Loader margin />
    )
};

export default ClubEdit;
