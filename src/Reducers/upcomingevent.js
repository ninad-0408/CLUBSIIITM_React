import * as actionTypes from '../Constants/actionTypes';

const reducer = (state = [], action) => {

    switch (action.type) {
        case actionTypes.UPCOMINGEVENTS:
            return action.payload;
    
        default:
            return state;
    }
};

export default reducer;