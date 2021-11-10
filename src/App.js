import React from 'react';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Club from './Components/Club/Club';

const App = () => {
  return (
    <div className="App">
      <Club name="Uthan" description="hello"/>
      <Footer />
    </div>
  );
}

export default App;
