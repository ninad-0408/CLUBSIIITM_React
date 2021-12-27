import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from './Components/Home/Home';
import Club from './Components/Club/Club';
import Navbar from './Components/Navbar/Navbar';

import { getClubs } from './Actions/club';
import { getUpcomingEvents } from './Actions/event';
import Profile from './Components/Profile/Profile';
import Event from './Components/Event/Event';
import Meet from './Components/Forms/ScheduleMeeting';
import ClubEdit from './Components/Forms/ClubEdit';
import EventCreate from './Components/Forms/EventCreate';
import StudentEdit from './Components/Forms/StudentEdit'
import EventEdit from './Components/Forms/EventEdit';
import { useAlert } from 'react-alert';
import { ERROR } from './Constants/actionTypes';
import { useSelector } from 'react-redux';
import Alert from './Components/Alert/alert';


const App = () => {

    const dispatch = useDispatch();
    const [app, setapp] = useState(null)

    useEffect(() => {
        dispatch(getClubs());
        dispatch(getUpcomingEvents());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <div className="App">

            {/* <Alert /> */}
                <Switch>
                    <Route path='/' exact>
                        <Navbar home />
                        <Home />
                    </Route>
                    <Route exact path='/club/:clubId'>
                        <Navbar club />
                        <Club setapp={setapp} />
                    </Route>
                    <Route path='/student/:studentId/profile'>
                        <Navbar />
                        <Profile />
                    </Route>
                    <Route path='/student/:studentId/edit'>
                        <Navbar />
                        <StudentEdit />
                    </Route>
                    <Route exact path='/event/:eventId'>
                        <Navbar />
                        <Event />
                    </Route>
                    <Route path='/event/:eventId/edit'>
                        <Navbar />
                        <EventEdit />
                    </Route>
                    <Route path='/approval/:approvalId/meet'>
                        <Navbar />
                        <Meet app={app} setapp={setapp} />
                    </Route>
                    <Route path='/club/:clubId/edit'>
                        <Navbar />
                        <ClubEdit />
                    </Route>
                    <Route path='/club/:clubId/event'>
                        <Navbar />
                        <EventCreate />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
