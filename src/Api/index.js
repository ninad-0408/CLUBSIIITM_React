import axios from 'axios';

const url = 'https://clubs-iiitm-server.herokuapp.com';

const API = axios.create({ baseURL: url });

export const getClubs = () => API.get('/club');
export const getClub = (clubId) => API.get(`/club/${clubId}`);
export const patchClub = (clubId, updateInfo) => API.patch(`/club/${clubId}`, updateInfo);
export const postEvent  = (clubId, newEvent) => API.post(`/club/${clubId}/event`, newEvent);
export const postApproval = (clubId, approval) => API.post(`/club/${clubId}/approval`, approval);
export const removeMember = (clubId, studentId) => API.post(`/club/${clubId}/remove/${studentId}`);

