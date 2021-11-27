import * as api from '../Api/index';
import * as actionTypes from '../Constants/actionTypes';

export const approveApproval = (approvalId, clubId) => async (dispatch) => {

    try {
        const { data } = await api.approveApproval(approvalId);
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