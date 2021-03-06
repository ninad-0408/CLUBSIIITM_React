import * as api from '../Api/index';
import * as actionTypes from '../Constants/actionTypes';

export const getStudent = (studentId) => async (dispatch) => {

    try {
        const { data } = await api.getStudent(studentId);
        const action = {
            type: actionTypes.STUDENT,
            payload: data.student
        }

        dispatch(action);
    }
    catch (error) {
        console.log(error);
    }
};

export const editStudent = (studentId,student) => async (dispatch) => {

    try {
        const { data } = await api.editStudent(studentId,student);

        const action = {
            type: actionTypes.STUDENT,
            payload: data.student
        }

        dispatch(action);
    }
    catch (error) {
        console.log(error);
    }
};

export const delStudent = (studentId) => async (dispatch) => {

    try {
        const { data } = await api.delStudent(studentId);
        localStorage.removeItem('cookie');
        window.location.reload();

        const action = {
            type: actionTypes.DELSTUDENT,
            payload: data.studentId
        }

        dispatch(action);
    } catch (error) {
        console.log(error);
    }
}