import * as api from '../Api/index';

export const getAuth = async (profile, token) => async (dispatch) =>  {
    
    try {
        const { data } = await api.getAuth(profile);
        localStorage.setItem('cookie', JSON.stringify({ profile: data.profile, token }));
        console.log(data);
        
    } catch (error) {
        console.log(error);
    }
};