import * as actionTypes from '../Constants/actionTypes';

const reducer = (state = {}, action) => {

    switch (action.type) {
        case actionTypes.APPROVALS:
            return  { ...state, [action.payload.clubId]: action.payload.approvals };

        case actionTypes.DELAPPROVAL:
            const approvals = state[action.payload.clubId].filter((e) => e._id !== action.payload.approvalId );
            return { ...state, [action.payload.clubId]: approvals };

        default:
            return state;
    }
}

export default reducer;