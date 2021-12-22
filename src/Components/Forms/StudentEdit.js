import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Loader from '../Loader/Loader';
import { useState } from 'react';
import { editStudent } from '../../Actions/student';
import { useEffect } from 'react';
import { getStudent } from '../../Actions/student';

const StudentEdit = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const students = useSelector(state => state.students);
    const { studentId } = useParams();

    const student = students[studentId];
    const [upstudent, setstudent] = useState({
        phoneno: 9999999999,
        linkedin: "",
        bio: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setstudent((prev) => {
            return {
                ...prev,
                [name]: value
            };
        });
    }

    const handleSubmit = () => {
        dispatch(editStudent(studentId, upstudent));
        history.push(`/student/${studentId}/profile`);
    };

    useEffect(() => {
        if (student === undefined)
            dispatch(getStudent(studentId));
    }, [dispatch]);

    useEffect(() => {
        const Initialvalue = {
            phoneno: student?.phoneno,
            linkedin: student?.linkedin,
            bio: student?.bio
        }
        setstudent(Initialvalue);
    }, [student]);


    return (
        student ?
            <>
                <div>
                    <div class="container-fluid mt-5 pt-5">

                        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0 mt-5"
                            style={{ 'font-family': 'Kaushan Script,cursive'}}>Edit Profile
                        </h2>

                        <div class="divider-custom">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                            <div class="divider-custom-line"></div>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div class="form-group">
                                <label for="full_name" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="full_name" name="name" value={student.name}
                                    readonly/>
                            </div>

                            <div class="form-group">
                                <label for="roll_no" class="form-label"> Roll No.</label>
                                <input type="text" class="form-control" id="roll_no" name="rollNo" value={student.rollNo}
                                    readonly/>
                            </div>

                            <div class="form-group">
                                <label for="phoneno" class="form-label">Phone No.</label>
                                <input type="number" class="form-control" id="phoneno" name="phoneno" value={upstudent.phoneno}
                                    minlength="10" maxlength="10" onChange={handleChange} required/>
                                <small class="form-text text-muted">We will prank call you for sure.</small>
                            </div>

                            <div class="form-group">
                                <label for="mail_id" class="form-label">Email ID</label>
                                <input type="email" class="form-control" id="mail_id" name="email" value={student.email}
                                    readonly />
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                                    else.</small>
                            </div>


                            <div class="form-group">
                                <label for="linkedin" class="form-label">LinkedIn ID</label>
                                <input type="text" class="form-control" id="linkedin" name="linkedin" value={upstudent.linkedin}  onChange={handleChange}/>
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>


                            <div class="form-group">
                                <label for="bio" class="form-label">Bio</label>
                                <textarea type="text" class="form-control" rows="3" name="bio" id="bio" onChange={handleChange}
                                    value={upstudent.bio}>{upstudent.bio}</textarea>
                            </div>



                            <div class="form-group">
                                <label for="branch" class="form-label">Branch</label>
                                <input type="text" class="form-control" id="branch" name="branch" value={student.branch}  readonly />
                            </div>


                            <div class="form-group">
                                <label for="year" id="year" class="form-label">Batch </label>
                                <input type="text" class="form-control" id="batch" name="batch" value={student.batch}  readonly />
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>

                            <button type="submit" class="btn btn-primary">Submit</button>

                        </form>

                        <p style={{ 'margin-left': '2.5em', 'padding': '0 7em 2em 0', 'border-width': '2px' }}></p>
                        <form >
                            <div class="form-group">
                                <div class="form-text text-muted">Delete all information from <strong>CLUBSIIITM</strong>.</div>
                                <button type="submit" class="btn btn-outline-danger" >UN-REGISTER</button>
                            </div>
                        </form>

                    </div>
                </div>
            </> : <Loader margin />
    )
};

export default StudentEdit;
