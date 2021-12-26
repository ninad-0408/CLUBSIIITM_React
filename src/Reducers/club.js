import _ from 'lodash';
import * as actionTypes from '../Constants/actionTypes';

const reducer = (state = {}, action) => {

    switch (action.type) {
        case actionTypes.CLUBS:
            const clubs = _.mapKeys(action.payload, '_id');
            return  { ...state, ...clubs };
        
        case actionTypes.CLUB:
            return { ...state, [action.payload._id]: action.payload };

        case actionTypes.DELSTUDENTCLUB:
            state[action.payload.clubId].memberids = state[action.payload.clubId].memberids.filter((e) => e._id !== action.payload.studentId);
            return { ...state, [action.payload.clubId]: state[action.payload.clubId] };

        case actionTypes.NEWEVENT:
            state[action.payload.clubId].eventids.push(action.payload.newEvent);
            return { ...state, [action.payload.clubId]: state[action.payload.clubId] };
        
        case actionTypes.DELEVENTCLUB:
            state[action.payload.clubId].eventids = state[action.payload.clubId].eventids.filter((e) => e._id !== action.payload.eventId ? e : null);
            return { ...state, [action.payload.clubId]: state[action.payload.clubId] };
        
        case actionTypes.ADDSTUDENTCLUB:
            state[action.payload.clubId].memberids.push(action.payload.student);
            return { ...state, [action.payload.clubId]: state[action.payload.clubId] };
    
        default:
            return state;
    }
}

export default reducer;