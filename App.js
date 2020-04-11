import React from 'react';
import logo from './logo.svg';
import './App.css';
import Like from './Like'


function App() {
  
  return (
    <div className="App">
     <Like 
      classButton="buttons"
      button="likes"
     />
    </div>
  );
}

export default App;
