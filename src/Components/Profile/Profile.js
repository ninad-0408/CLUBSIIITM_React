import React from 'react';

const Profile = () => {
    return (
        <>
            <div class="container-fluid text-center mt-3" id='backgroundimage'>
                <h1>
                    student name
                </h1>
            </div>
            <div class="col mt-3 text-center">
                <div class="container h5">
                    <div class="container font-weight-bold d-4">
                        student bio
                    </div>
                    <div class="text-center font-weight-light">- student name
                    </div>
                </div>

                <div class="mt-4 h4">
                    <span class="font-weight-bold">Email Address:</span>
                    <a href="mailto:<%=student.email%>">
                        student email
                    </a>
                </div>

                <div class="mt-4 h4">
                    <span class="font-weight-bold">LinkedIn:</span>
                    <a href="https://www.linkedin.com/in/<%=student.linkedin%>">
                        student linkedin
                    </a>
                </div>

                <div class="mt-4 h4">
                    <span class="font-weight-bold mr-2">Branch:</span>
                    student branch
                </div>

                <div class="mt-4 h4">
                    <span class="font-weight-bold mr-2">Roll No.:</span>
                    student rollNo
                </div>

                <div class="mt-4 h4">
                    <span class="font-weight-bold mr-2">Contact No.:</span>
                    student phoneno
                </div>

                <div class="mt-4 h4">
                    <span class="font-weight-bold mr-2">Batch:</span>
                    student batch
                </div>
            </div>
        </>
    )
};

export default Profile;
