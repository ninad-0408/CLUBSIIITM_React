import _ from 'lodash';
import * as actionTypes from '../Constants/actionTypes';

const reducer = (state = {}, action) => {

    switch (action.type) {
        case actionTypes.EVENT:
            return { ...state, [action.payload._id]: action.payload };

        case actionTypes.DELEVENT:
            return _.omit(state, [action.payload]);

        default:
            return state;
    }
};

export default reducer;