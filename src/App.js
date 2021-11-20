import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from './Components/Home/Home';
import Club from './Components/Club/Club';
import Navbar from './Components/Navbar/Navbar';

import { getClubs } from './Actions/club';
import { getUpcomingEvents } from './Actions/event';
import Profile from './Components/Profile/Profile';

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getClubs());
        dispatch(getUpcomingEvents());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route path='/' exact>
                        <Navbar home />
                        <Home />
                    </Route>
                    <Route path='/club/:clubId'>
                        <Navbar club />
                        <Club />
                    </Route>
                    <Route path='/student/:studentId'>
                        <Profile />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
