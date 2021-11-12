import  * as api from '../Api/index';
import * as actionTypes  from '../Constants/actionTypes';

const getClubs = async (dispatch) => {

    try {
        const { data } = await api.getClubs();
        const action = {
            type: actionTypes.CLUBS,
            payload: data.clubs
        }
    
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }

} 

const getClub = async (dispatch) =>{
    try{
        const { data } = await api.getClub();
        const action = {
            type: actionTypes.CLUB,
            payload: data.club
        }
    
        dispatch(action);
    }
    catch (error)
    {
        console.log(error);
    }
}

const patchClub = (updateInfo) => async (dispatch) => {

    try {
        const { data } = await api.patchClub(updateInfo);
        const action = {
            type: actionTypes.PATCH,
            payload: data
        }

        dispatch(action);
    } catch (error) {
        console.log(error);
    }

}

const postEvent = (newEvent) => async (dispatch) => {

    try {
        const { data } = await api.postEvent(newEvent);
        const action = {
            type: actionTypes.EVENT,
            payload: data
        }

        dispatch(action);
    } catch (error) {
        console.log(error);
    }

}

const postApproval = (Approval) => async (dispatch) => {

    try {
        const { data } = await api.postApproval(Approval);
        const action = {
            type: actionTypes.APPROVAL,
            payload: data
        }

        dispatch(action);
    } catch (error) {
        console.log(error);
    }

}

const removeMember = (student) => async (dispatch) => {

    try {
        const { data } = await api.removeMember(student);
        const action = {
            type: actionTypes.REMOVE,
            payload: data
        }

        dispatch(action);
    } catch (error) {
        console.log(error);
    }

}

