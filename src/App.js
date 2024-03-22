import React from 'react';
import './App.css'; // Importing CSS file
import MainSection from './MainSection'; // Assuming MainSection component is in MainSection.js
import Navbar from './Navbar'; // Assuming Navbar component is in Navbar.js

function App() {
  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
      <div className="main-content">
        <MainSection /> {/* Include the MainSection component */}
      </div>
    </div>
  );
}

export default App;
