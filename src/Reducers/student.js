import * as actionTypes from '../Constants/actionTypes';
import _ from 'lodash';

const reducer = (state = {}, action) => {

    switch (action.type) {
        case actionTypes.STUDENT:
            return { ...state, [action.payload._id]: action.payload }; 

        case actionTypes.DELSTUDENT:
            return _.omit(state, [action.payload]);

        default:
            return state;
    }
}

export default reducer;