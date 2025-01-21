import React from 'react';

const Block = ({ color, highlighted, onClick }) => {
  return (
    <div
      className="block"
      style={{
        backgroundColor: color,
        width: "230px",
        height: "230px",
        margin: "10px",
        cursor: "pointer",
        position: "relative", 
        borderRadius: "10px",
        boxShadow: highlighted ? "0 0 15px rgba(0, 0, 0, 0.3)" : "none", 
      }}
      onClick={onClick}
    >
      {highlighted && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            borderRadius: "10px",
          }}
        />
      )}
    </div>
  );
};

export default Block;