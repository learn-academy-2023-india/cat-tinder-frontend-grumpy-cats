import React from 'react';
import gif from '../assets/wtfcat.gif';

const NotFoundPage = () => {
  const containerStyle = {
    backgroundImage: `url(${gif})`,
    backgroundSize: 'cover',
    backgroundColor: '#0000FF',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    fontSize: '2rem',
  };

  return (
    <div style={containerStyle}>
      <h1>Page not found, no single cats in this neighborhood</h1>
     
    </div>
  );
};

export default NotFoundPage;