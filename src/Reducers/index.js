import { combineReducers } from "redux";

import clubs from './club';
import events from './event';

export default combineReducers({ clubs, events });