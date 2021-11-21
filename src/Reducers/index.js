import { combineReducers } from "redux";

import clubs from './club';
import events from './event';
import upcomingevents from './upcomingevent';
import students from './student';
import approvals from './approval';

export default combineReducers({ clubs, events, upcomingevents, students, approvals });