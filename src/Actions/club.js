import { getClubs } from '../Api/index';
import { CLUBS } from '../Constants/actionTypes';

const getClubs = async () => {

    try {
        const { data } = await getClubs();
        const action = {
            type: CLUBS,
            payload: data.clubs
        }
    
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }

} 