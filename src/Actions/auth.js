import * as api from '../Api/index';

export const getAuth = async (profile, token) => {
    
    try {
        const { data } = await api.getAuth(profile);
        localStorage.setItem('cookie', JSON.stringify({ profile: data.profile, token }));
        
    } catch (error) {
        console.log(error);
    }
};