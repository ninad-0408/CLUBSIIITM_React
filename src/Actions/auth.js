import * as api from '../Api/index';
import * as actionTypes from '../Constants/actionTypes';

export const getAuth = (profile, token) => async (dispatch) => {
    
    try {
        const { data } = await api.getAuth(profile);
        localStorage.setItem('profile', data.profile);
        const action = {
            type: actionTypes.AUTH,
            payload: data.profile
        }

        dispatch(action);
    } catch (error) {
        console.log(error);
    }
};