import * as api from '../Api/index';
import * as actionTypes from '../Constants/actionTypes';

export const addAlert = (msg) => async (dispatch) => {

    try {
        const action = {
            type: actionTypes.ADD_ALERT,
            payload: msg
        }

        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }

};