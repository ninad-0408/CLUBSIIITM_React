import * as api from '../Api/index';
import * as actionTypes from '../Constants/actionTypes';

export const approveApproval = (approvalId, clubId, student) => async (dispatch) => {

    try {
        const { data } = await api.approveApproval(approvalId);
        const action1 = {
            type: actionTypes.DELAPPROVAL,
            payload: {
                approvalId: data.approvalId,
                clubId
            }
        }

        const action2 = {
            type: actionTypes.ADDSTUDENTCLUB,
            payload: {
                clubId,
                student
            }
        }

        dispatch(action1);
        dispatch(action2);
        
    } catch (error) {
        console.log(error);
    }

};

export const declineApproval = (approvalId, clubId) => async (dispatch) => {

    try {
        const { data } = await api.declineApproval(approvalId);
        const action = {
            type: actionTypes.DELAPPROVAL,
            payload: {
                approvalId: data.approvalId,
                clubId: clubId
            }
        }

        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }

};
export const ScheduleMeet = (approvalId, meet) => async (dispatch) => {

    try {
        const { data } = await api.ScheduleMeet(approvalId,meet);
        
        
    } catch (error) {
        console.log(error);
    }

};