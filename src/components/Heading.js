// Heading.js
import React from 'react';

const Heading = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Choose Background Theame</h1>
    </header>
  );
};

const styles = {
  header: {
    width: '100%',
    background: 'linear-gradient(to right, #9f4916, #95421a, #ac501f, #ad581b)', 
    padding: '10px 20px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  title: {
    margin: 0,
    color: '#fff',
    fontSize: '24px',
    fontFamily: 'Arial, sans-serif',
  },
};

export default Heading;
