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