import React from 'react';
import "./MapSection.css";

const MapSection = () => {
  return (
    <div className="location-map">
      <h2>Nuestra Ubicación</h2>
      <iframe
        title="Ubicación"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126915.41029363598!2d-74.0060156!3d40.7127281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250bd5b729a9f%3A0x8a7d60a5b02a1836!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1623443430977!5m2!1sen!2s"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapSection;