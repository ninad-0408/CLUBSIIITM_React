import * as actionTypes from '../Constants/actionTypes';

const reducer = (state = {}, action) => {

    switch (action.type) {
        case actionTypes.APPROVALS:
            return  { ...state, [action.payload.clubId]: action.payload.approvals };

        default:
            return state;
    }
}

export default reducer;