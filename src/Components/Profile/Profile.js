import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { getStudent } from '../../Actions/student';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';


const Profile = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const students = useSelector(state => state.students);
    const { studentId } = useParams();

    const student = students[studentId];

    const user = JSON.parse(localStorage.getItem('cookie'))?.profile;
    const [admin, setadmin] = useState(false);

    useEffect(() => {
        setadmin((student?._id === user?._id && student && user));
    }, [student]);

    useEffect(() => {
        if(!user)
        {
            new Promise(res => setTimeout(res, 2000))
            .then(() => history.goBack());            
        }
        if (!(student))
            dispatch(getStudent(studentId));
    }, [dispatch]);

    function handleLogout() {
        localStorage.removeItem('cookie');
        history.push('/');
        window.location.reload();
    }

    return (

        (student !== undefined) ?
            <>
                <div className="profile" id="profile" style={{ padding: '6rem 0' }}>

                    <div class="container-fluid text-center mt-3" id='backgroundimage   '  >
                        <h1 style={{ 'font-family': 'Permanent Marker,cursive' }}>
                            {student.name}
                        </h1>
                    </div>
                    <div class="col mt-3 text-center">
                        <div class="container h5" style={{ 'font-family': 'Permanent Marker, cursive' }}>
                            <div class="container font-weight-bold d-4" >
                                {student.bio}
                            </div>
                            <div class="text-center font-weight-light">- {student.name}
                            </div>
                        </div>

                        <div class="mt-4 h4" style={{ 'font-family': 'Permanent Marker, cursive' }}>
                            <span class="font-weight-bold">Email Address: </span>
                            <a href={`mailto:${student.email}`} style={{ 'color': '#007bff' }}>
                                {student.email}
                            </a>
                        </div>

                        <div class="mt-4 h4" style={{ 'font-family': 'Permanent Marker, cursive' }}>
                            <span class="font-weight-bold">LinkedIn: </span>
                            <a href={`https://www.linkedin.com/in/${student.linkedin}`} target="_blank" style={{ 'color': '#007bff' }}>
                                {student.linkedin}
                            </a>
                        </div>

                        <div class="mt-4 h4" style={{ 'font-family': 'Permanent Marker, cursive' }}>
                            <span class="font-weight-bold mr-2">Branch: </span>
                            {student.branch}
                        </div>

                        <div class="mt-4 h4" style={{ 'font-family': 'Permanent Marker, cursive' }}>
                            <span class="font-weight-bold mr-2">Roll No.: </span>
                            {student.rollNo}
                        </div>

                        <div class="mt-4 h4" style={{ 'font-family': 'Permanent Marker, cursive' }}>
                            <span class="font-weight-bold mr-2">Contact No.: </span>
                            {student.phoneno}
                        </div>

                        <div class="mt-4 h4" style={{ 'font-family': 'Permanent Marker, cursive', 'marginBottom': '0' }}>
                            <span class="font-weight-bold mr-2">Batch: </span>
                            {student.batch}
                        </div>
                        {
                            admin ?
                                <>
                                    <Link to={`/student/${studentId}/edit`} class="mt-5 btn btn-primary btn-lg" style={{ 'margin-right': '10px', 'background-color:': 'blue' }}>
                                        <i class="fas fa-edit"></i>
                                        Edit Profile
                                    </Link>

                                    <a class="mt-5 btn btn-danger btn-lg" onClick={handleLogout}>
                                        <i class="fas fa-sign-out-alt"></i>
                                        Logout
                                    </a>
                                </> : <></>
                        }

                    </div>
                </div>
            </> : <Loader margin />
    )
};

export default Profile;
