/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';

const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f2f2f2',
    textAlign: 'center',
    marginTop: '100px',
  },
  h1: {
    color: '#333333',
    fontSize: '28px',
    marginBottom: '20px',
  },
  container: {
    width: '90%',
    maxWidth: '400px',
    margin: '0 auto',
  },
  button: {
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    padding: '10px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '4px',
    marginBottom: '10px',
    flexBasis: '48%',
  },
  buttonHover: {
    backgroundColor: '#45a049',
  },
  noButtonHover: {
    position: 'relative',
    left: '20px',
  },
  noButtonDisabled: {
    pointerEvents: 'none',
    opacity: '0.5',
  },
};

function JatoPage() {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.h1}>
          Duda <br />
          <br />
          Por favor, pode me dar meu jato? 🚀
          <br />
        </h1>
        <div style={styles.buttonWrapper}>
          <button style={styles.button}>SIM, TO PEGANDO MEU NUBANK!</button>
        </div>
      </div>
    </div>
  );
}

export default JatoPage;
