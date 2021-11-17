import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Club from './Components/Club/Club';
import Navbar from './Components/Navbar/Navbar';

import { getClubs } from './Actions/club';
import { getUpcomingEvents } from './Actions/event';

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getClubs());
        dispatch(getUpcomingEvents());
    }, [dispatch]);

    const home={
        home:true,
        club:false
    }
    const club={
        home:false,
        club:true
    }
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route path='/' exact>
                        <Navbar home />
                        <Home />
                        <Footer />
                    </Route>
                    <Route path='/club/:clubId'>
                        <Navbar club />
                        <Club />
                        <Footer />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
