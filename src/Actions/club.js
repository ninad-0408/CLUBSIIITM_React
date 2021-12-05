import * as api from '../Api/index';
import * as actionTypes from '../Constants/actionTypes';

export const getClubs = () => async (dispatch) => {

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

};

export const getClub = (clubId) => async (dispatch) => {

    try {
        const { data } = await api.getClub(clubId);
        const action = {
            type: actionTypes.CLUB,
            payload: data.club
        }

        dispatch(action);
    }
    catch (error) {
        console.log(error);
    }
};

export const patchClub = (clubId, updateInfo) => async (dispatch) => {

    try {
        const { data } = await api.patchClub(clubId, updateInfo);
        const action = {
            type: actionTypes.CLUB,
            payload: data.club
        }

        dispatch(action);
    } catch (error) {
        console.log(error);
    }

};

export const postEvent = (clubId, newEvent) => async (dispatch) => {

    try {
        const { data } = await api.postEvent(clubId, newEvent);
        const action = {
            type: actionTypes.EVENT,
            payload: data.newEvent
        }

        dispatch(action);
    } catch (error) {
        console.log(error);
    }

};

export const postApproval = (clubId) => async (dispatch) => {

    try {
        const { data } = await api.postApproval(clubId);
        const action = {
            type: actionTypes.APPROVAL,
            payload: data
        }

        dispatch(action);
    } catch (error) {
        console.log(error);
    }

};

export const getClubApprovals = (clubId) => async (dispatch) => {

    try {
        const { data } = await api.getClubApprovals(clubId);
        const action = {
            type: actionTypes.APPROVALS,
            payload: {
                approvals: data.approvals,
                clubId: clubId
            }
        }

        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }
    
};

export const removeMember = (clubId, studentId) => async (dispatch) => {

    try {
        const { data } = await api.removeMember(clubId, studentId);
        const action = {
            type: actionTypes.REMOVE,
            payload: data
        }

        dispatch(action);
    } catch (error) {
        console.log(error);
    }

};

export const ScheduleEvent = (clubId, event) => async (dispatch) => {
    try {
        const { data } = await api.ScheduleEvent(clubId, event); 
        console.log(data);
        
    } catch (error) {
        console.log(error);
    }
}