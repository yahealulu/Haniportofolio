import React from 'react';
import Header from './Components/Header/Header';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import About from './Components/About/About';
import Portfolio from './Components/Portofolio/Portofolio';
function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Header />
      <About/>
      <Portfolio/>
    </div>
  );
}

export default App;
