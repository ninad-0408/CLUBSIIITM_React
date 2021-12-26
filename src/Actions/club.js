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
            type: actionTypes.DELSTUDENTCLUB,
            payload: {
                clubId,
                studentId
            }
        }

        dispatch(action);
    } catch (error) {
        console.log(error);
    }

};

export const ScheduleEvent = (clubId, event) => async (dispatch) => {
    try {
        const { data } = await api.ScheduleEvent(clubId, event); 

        const action1 = {
            type: actionTypes.NEWEVENT,
            payload: {
                newEvent: {
                    image: data.newEvent.image,
                    name: data.newEvent.name,
                    _id: data.newEvent._id
                },
                clubId
            }
        }

        const action2 = {
            type: actionTypes.EVENT,
            payload: data.newEvent
        }

        dispatch(action1);
        dispatch(action2);    
        
    } catch (error) {
        console.log(error);
    }
}

export const EditClub = (clubId, club) => async (dispatch) => {
    try {
        const { data } = await api.ScheduleEvent(clubId, club); 
        // console.log(data);
        
    } catch (error) {
        console.log(error);
    }
}