import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Club from './Components/Club/Club';
import { getClubs } from './Actions/club';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClubs());
  },[]);

  return (
    <div className="App">
      <Home />
      <Footer />
    </div>
  );
}

export default App;
