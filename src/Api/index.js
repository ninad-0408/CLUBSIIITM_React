import axios from 'axios';

const url = 'https://clubs-iiitm-server.herokuapp.com';

const API = axios.create({ baseURL: url });

export const getClubs = () => API.get('/club');

export const getClub = () => await API.get('/club/:clubId');

export const patchClub = (updateInfo) => API.patch(`/club/:clubId`, updateInfo);

export const postEvent  = (newEvent) => API.post(`/club/:clubId/event`, newEvent);

export const postApproval = (Approval) => API.post("/club/:clubId/approval", Approval);

export const removeMember = (student) => API.post("/club/:clubId/remove/:studentId", student);

