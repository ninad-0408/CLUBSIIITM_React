import axios from 'axios';
import { baseUrl } from '../Constants/baseUrl';

const API = axios.create({ baseURL: baseUrl });

API.interceptors.request.use((req) => {
    const token = JSON.parse(localStorage.getItem('cookie'))?.token;
    
    if(token)
    {
        req.headers.authorization = `Bearer ${token}`;
    }

    return req;
});

export const getAuth = (profile) => API.post('/auth', profile);

export const getClubs = () => API.get('/club');
export const getClub = (clubId) => API.get(`/club/${clubId}`);
export const getClubApprovals = (clubId) => API.get(`/club/${clubId}/approvals`);
export const patchClub = (clubId, updateInfo) => API.patch(`/club/${clubId}`, updateInfo);
export const postEvent  = (clubId, newEvent) => API.post(`/club/${clubId}/event`, newEvent);
export const postApproval = (clubId, approval) => API.post(`/club/${clubId}/approval`, approval);
export const removeMember = (clubId, studentId) => API.post(`/club/${clubId}/remove/${studentId}`);

export const getUpcomingEvents = () => API.get('/event');
export const getEvent = (eventId) => API.get(`/event/${eventId}`);
export const patchEvent = (eventId, updateInfo) => API.patch(`/event/${eventId}`, updateInfo);
export const delEvent = (eventId) => API.delete(`/event/${eventId}`);

export const getStudent = (studentId) => API.get(`/student/${studentId}`); 
