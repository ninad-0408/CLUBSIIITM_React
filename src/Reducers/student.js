import * as actionTypes from '../Constants/actionTypes';
import _ from 'lodash';

const reducer = (state = {}, action) => {

    switch (action.type) {
        case actionTypes.STUDENT:
            // const students = _.mapKeys(action.payload, '_id');
            return { ...state, [action.payload._id]: action.payload};        
        default:
            return state;
    }
}

export default reducer;