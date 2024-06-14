import React from 'react';
import "./StudentSection.css";

const developers = [
  {
    name: 'Juan Pérez',
    description: 'Desarrollador Frontend con experiencia en React y Vue.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
  },
  {
    name: 'María Gómez',
    description: 'Desarrolladora Backend especializada en Node.js y Python.',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29uYXN8ZW58MHx8MHx8fDA%3D',
  },
  {
    name: 'Carlos Ramírez',
    description: 'Desarrollador Fullstack con experiencia en React, Node.js y MongoDB.',
    photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29uYXN8ZW58MHx8MHx8fDA%3D',
  }
];

  const StudentSection = () => {
    return (
      <div className="developers">
        <h2>Desarrolladores</h2>
        <div className="developer-list">
          {developers.map((dev, index) => (
            <div key={index} className="developer">
              <img src={dev.photo} alt={dev.name} />
              <h3>{dev.name}</h3>
              <p>{dev.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default StudentSection;