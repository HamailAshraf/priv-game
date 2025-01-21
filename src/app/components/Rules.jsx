import React from 'react';

const Rules = ({ onClick }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          textAlign: 'center',
          width: '350px',
          border: '5px solid gold', 
          position: 'relative', 
          fontFamily: '"Arial", sans-serif',
        }}
      >
        <button
          onClick={onClick}
          style={{
            position: 'absolute',
            top: '5px',
            right: '5px',
            backgroundColor: 'transparent',
            border: 'none',
            fontSize: '24px',
            color: 'gold',
            cursor: 'pointer',
            fontWeight: 'bold',
            zIndex: 2, 
          }}
        >
          X
        </button>
        <h1 style={{ fontSize: '24px', color: '#333', fontWeight: 'bold' }}>Rules</h1>
        <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.5' }}>
          Remember the sequence of colors that appear on the screen. Click on the colors in the same order to win the game.
        </p>
      </div>
    </div>
  );
};

export default Rules;
