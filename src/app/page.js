'use client'
import Block from "./components/Block";
import Rules from "./components/Rules";
import { useState } from "react";

export default function Home() {
  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'white', 'teal', 'brown'];
  const [requiredColors, setRequiredColors] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [flag, setFlag] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [highlightedColor, setHighlightedColor] = useState(null);
  const [showRules, setShowRules] = useState(true);

  const handleBlockClick = (color) => {
    setSelectedColors((prev) => [...prev, color]);

    const currentIndex = selectedColors.length;
    if (requiredColors[currentIndex] !== color) {
      endGame();
    } else if (selectedColors.length + 1 === requiredColors.length) {
      addColor();
    }
  };

  const handleStartGame = () => {
    setFlag(true);
    setGameOver(false);
    setRequiredColors([]);
    setSelectedColors([]);
    addColor();
  };

  const addColor = () => {
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    setRequiredColors((prev) => [...prev, newColor]);
    setHighlightedColor(newColor);

    setTimeout(() => {
      setHighlightedColor(null);
    }, 1000);

    setSelectedColors([]);
  };

  const endGame = () => {
    setFlag(false);
    setGameOver(true);
  };

  const handleShowRules = () => {
    setShowRules(false);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
      {showRules && <Rules onClick={() => handleShowRules()}/>}
      <div>
        <button onClick={handleStartGame} disabled={flag}>
          Start Game
        </button>
      </div>
      {gameOver && <h3>Game Over! Try Again.</h3>}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", width: "60%" }}>
        {colors.map((color, index) => (
          <Block
            key={index}
            color={color}
            highlighted={color === highlightedColor}
            onClick={() => flag && handleBlockClick(color)}
          />
        ))}
      </div>
    </div>
  );
}
