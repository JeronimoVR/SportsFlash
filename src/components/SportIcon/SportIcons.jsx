import React from 'react';
import './SportIcon.css';


function SportIcon({ name, icon }) {
    return (
      <div className="sport-icon">
        <div className="icon">{icon}</div>
        <div className="name">{name}</div>
      </div>
    );
  }
  
  export default SportIcon;