import * as actionTypes from '../Constants/actionTypes';
import _ from 'lodash';

const reducer = (state = {}, action) => {

    switch (action.type) {
        case actionTypes.CLUBS:
            const clubs = _.mapKeys(action.payload, '_id');
            return  { ...state, ...clubs };
        
        case actionTypes.CLUB:
            return { ...state, [action.payload._id]: action.payload };
    
        default:
            return state;
    }
}

export default reducer;