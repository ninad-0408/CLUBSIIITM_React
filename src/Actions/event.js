import * as api from '../Api/index';
import * as actionTypes from '../Constants/actionTypes';

export const getEvent = (eventId) => async (dispatch) => {

    try {
        const { data } = await api.getEvent(eventId);
        const action = {
            type: actionTypes.EVENT,
            payload: data.event
        }

        dispatch(action);
    } catch (error) {
        console.log(error);
    }
};

export const patchEvent = (eventId, updateInfo) => async (dispatch) => {
    try {
        const { data } = await api.patchEvent(eventId, updateInfo);
        const action = {
            type: actionTypes.EVENT,
            payload: data.event
        }

        dispatch(action);
    } catch (error) {
        console.log(error);
    }

};

export const delEvent = (clubId, eventId) => async (dispatch) => {

    try {
        const { data } = await api.delEvent(eventId);

        const action1 = {
            type: actionTypes.DELEVENT,
            payload: data.eventId
        }

        const action2 = {
            type: actionTypes.DELEVENTCLUB,
            payload: {
                eventId: data.eventId,
                clubId
            }
        }

        dispatch(action1);
        dispatch(action2);
    } catch (error) {
        console.log(error);
    }
};

export const getUpcomingEvents = (eventId) => async (dispatch) => {

    try {
        const { data } = await api.getUpcomingEvents(eventId);
        const action = {
            type: actionTypes.UPCOMINGEVENTS,
            payload: data.events
        }

        dispatch(action);
    } catch (error) {
        console.log(error);
    }
};


export const editEvent = (eventId,event) => async (dispatch) => {

    try {
        const { data } = await api.editEvent(eventId,event);
        
    } catch (error) {
        console.log(error);
    }
};