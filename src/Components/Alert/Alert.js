import React, { useEffect } from 'react';
import { useAlert } from 'react-alert';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

const Alert = () => {

    const p = useParams();
    const alert = useAlert();
    const state = useSelector(state => state);

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('alert'))?.message) {
            alert.show(JSON.parse(localStorage.getItem('alert'))?.message);
            localStorage.removeItem('alert');
        }
        if (JSON.parse(localStorage.getItem('alert'))?.err) {
            alert.show(JSON.parse(localStorage.getItem('alert'))?.err.message);
            localStorage.removeItem('alert');
        }
    },[p]);

    return (
        <>            
        </>
    )
};

export default Alert;
